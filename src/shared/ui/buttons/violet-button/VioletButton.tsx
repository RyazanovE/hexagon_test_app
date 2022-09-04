import React, { PropsWithChildren } from 'react';
import cl from 'classnames';
import { Spinner } from 'shared/ui/spinner/Spinner';

export interface IVioletButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isLoading?: boolean;
}

const VioletButton: React.FC<PropsWithChildren<IVioletButtonProps>> = ({ className, isLoading, children, ...props }) => {
	const btnClass = "hover:opacity-70 transition-opacity duration-150 bg-violet text-white rounded-[30px] p-3 font-bold flex items-center justify-center"


	return (
		<button {...props} className={cl(className, btnClass)}>
			{!isLoading ? children : <Spinner fill='white' height={24} width={24}/>}
		</button>
	);
}

export { VioletButton };