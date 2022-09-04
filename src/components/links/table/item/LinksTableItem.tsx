import { IStatisticsItem } from 'api/links/linksApi';
import React from 'react';

interface ILinksTableItemProps {
	item: IStatisticsItem
}

const LinksTableItem: React.FC<ILinksTableItemProps> = ({ item }) => {
	const { counter, id, short, target } = item

	const clickHandler = () => { 
		navigator.clipboard.writeText("http://79.143.31.216/s/" + short)
		alert("Скопировано")
	 }

	return (
		<li onClick={clickHandler} className='cursor-pointer hover:bg-violet/20 transition-colors duration-150 p-3 text-violet font-semibold break-words'>
			<p className='w-[50%]'>{target}</p>
			<p className='w-[30%]'>{short}</p>
			<p>{counter}</p>
		</li>
	);
}

export { LinksTableItem };