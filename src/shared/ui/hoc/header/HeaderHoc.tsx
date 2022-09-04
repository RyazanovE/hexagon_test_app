import { useActions } from 'hooks/actions/useActions';
import { LOGIN_ROUTE } from 'pages/routing/routes';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

export type IHeaderHocProps = {

}

const HeaderHoc: React.FC<PropsWithChildren<IHeaderHocProps>> = ({ children }) => {
	const { setIsLoggedIn } = useActions()

	const logOutHandler = () => setIsLoggedIn(false)
	


	return (
		<>
			<header className=" h-10 bg-login-text  text-white fixed top-0 left-0 right-0 flex items-center justify-center">
				<div className="flex items-center justify-center w-full relative">
					<h1>Hexagon testApp</h1> <button onClick={logOutHandler} className='opacity-80 hover:opacity-100 transition-opacity duration-150 bg-red/60 px-2 py-1 rounded-sm flex itemas-center justify-center absolute right-6'>Выйти</button>
				</div>
			</header>
			{children}
		</>

	);
}

export { HeaderHoc };