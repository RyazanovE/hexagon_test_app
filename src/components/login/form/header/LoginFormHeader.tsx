import React, { memo } from 'react';
import cl from "classnames";
import { useAppSelector } from 'hooks/redux/reduxHooks';
import { loginFormTypeSelector } from 'store/slices/auth/authSlice';


export type ILoginFormHeaderProps = {
}

const LoginFormHeader: React.FC<ILoginFormHeaderProps> = memo(({  }) => {
	const formType = useAppSelector(loginFormTypeSelector)


	return (
		<h1 className={cl('text-xl text-violet font-bold flex flex-col items-center transition-transform duration-300', { "-translate-y-[28px]": formType === "register" })}>
			<span className={cl("transition-opacity duration-150", { "opacity-0": formType === "register" })}>Авторизация</span>
			<span className={cl("transition-opacity duration-150", { "opacity-0": formType === "login" })}>Регистрация</span>
		</h1>
	);
})

export { LoginFormHeader };