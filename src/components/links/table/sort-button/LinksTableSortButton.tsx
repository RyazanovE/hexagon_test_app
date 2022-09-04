import { useActions } from 'hooks/actions/useActions';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import { ChevronSvg } from 'shared/ui/svg/chevron/ChevronSvg';
import { resetSortArr } from 'store/actions';
import { sortArrSelector } from 'store/slices/links/linksSlice';

export type ILinksTableSortButtonProps = {

}

const LinksTableSortButton: React.FC<ILinksTableSortButtonProps> = ({ }) => {
	const sortArr = useAppSelector(sortArrSelector)

	const { resetSortArr } = useActions()

	return (

		sortArr.length === 0
			?
			<div className='absolute -top-10 left-10'>
				<ChevronSvg fill='none' className='fill-violet rotate-180' width={20} height={20} />
				<p className=' text-violet font-semibold'>Нажмите для сортировки</p>
			</div>
			:
			<VioletButton className='absolute -top-16 left-10' onClick={() => resetSortArr()}>Сбросить сортировку</VioletButton>

	);
}

export { LinksTableSortButton };