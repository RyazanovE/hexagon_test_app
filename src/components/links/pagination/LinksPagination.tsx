import { useGetAllStatisticsQuery } from 'api/links/linksApi';
import { useActions } from 'hooks/actions/useActions';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { statisticsPaginationSelector } from 'store/slices/links/linksSlice';
import cl from "classnames"

export type ILinksPaginationProps = {

}

const LinksPagination: React.FC<ILinksPaginationProps> = ({ }) => {

	const { limit, offset } = useAppSelector(statisticsPaginationSelector)

	const { data } = useGetAllStatisticsQuery(undefined, {refetchOnMountOrArgChange: true})
	const [pageCount, setpageCount] = useState(0);
	const { setStatisticsPagination } = useActions()

	useEffect(() => {
		if (!data) return
		setpageCount(Math.ceil(data / limit));
	}, [offset, data]);

	if (pageCount === 0) return <div className='h-[40px]'></div>

	return (
		<ReactPaginate activeClassName='bg-violet text-white p-2 rounded-md'
			pageCount={pageCount}
			className="flex items-center gap-5"
			onPageChange={(e) => setStatisticsPagination({ offset: e.selected * limit })}
			nextClassName="bg-violet text-white p-2 rounded-md hover:opacity-70 transition-opacity duration-150"
			previousClassName='bg-violet text-white p-2 rounded-md hover:opacity-70 transition-opacity duration-150'
			nextLabel="Следующая"
			previousLabel="Предыдущая" />
	);
}

export { LinksPagination };