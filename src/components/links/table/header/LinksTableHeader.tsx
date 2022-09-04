import { useActions } from 'hooks/actions/useActions';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React, { useMemo } from 'react';
import { ChevronSvg } from 'shared/ui/svg/chevron/ChevronSvg';
import { sortArrSelector } from 'store/slices/links/linksSlice';
import cl from "classnames"

export type ILinksTableHeaderProps = {

}

const LinksTableHeader: React.FC<ILinksTableHeaderProps> = ({ }) => {
	const sortArr = useAppSelector(sortArrSelector)



	const { addToSortArr } = useActions()

	const pArr = useMemo(() => [
		{ id: 1, label: "Исходная ссылка", className: "w-[50%]", type: "target" },
		{ id: 2, label: "Короткая ссылка", className: "w-[30%]", type: "short" },
		{ id: 3, label: "Кол-во переходов", className: "", type: "counter" },
	], []);

	return (
		<li className='bg-violet text-white p-2 rounded-md font-semibold'>
			{pArr.map(el => <p key={el.id} onClick={() => addToSortArr(el.type)} className={el.className}>

				<span className={cl('flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity duration-150')}>
					{el.label}
					<ChevronSvg width={20} height={20}
						className={cl({
							"opacity-0": !sortArr.includes(el.type) && !sortArr.includes("~" + el.type),
							"rotate-180": sortArr.includes("~" + el.type)
						})} fill="white" />
				</span>


			</p>)}
		</li>
	);
}

export { LinksTableHeader };


