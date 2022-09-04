import { useGetStatisticsQuery } from 'api/links/linksApi';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React from 'react';
import { Spinner } from 'shared/ui/spinner/Spinner';
import { sortArrSelector, statisticsPaginationSelector } from 'store/slices/links/linksSlice';
import { LinksTableHeader } from './header/LinksTableHeader';
import { LinksTableItem } from './item/LinksTableItem';
import multisort from "multisort"


export type ILinksTableProps = {

}

const LinksTable: React.FC<ILinksTableProps> = ({ }) => {
	const pagination = useAppSelector(statisticsPaginationSelector)
	const sortArr = useAppSelector(sortArrSelector)

	const { data, isFetching } = useGetStatisticsQuery(pagination, {
		selectFromResult: ({ data, ...args }) => ({
			...args, data: multisort(data?.slice() ?? [], sortArr)
		})
		, refetchOnMountOrArgChange: true
	})



	return (
		<ul className='child:flex child:gap-3 rounded-md bg-white child:items-center w-full items-center'>
			<LinksTableHeader />
			{
				!isFetching ?
					(data && data.length !== 0
						?
						data.map(el => <LinksTableItem key={el.id} item={el} />)
						:
						<li className='p-3 text-violet font-semibold break-words'>Нет результатов</li>)
					:
					<li className='p-3 justify-center'><Spinner fill='violet' height={24} width={24} /></li>
			}
		</ul>
	);
}

export { LinksTable };