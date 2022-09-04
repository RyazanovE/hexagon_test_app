import React from 'react';
import { useLoginMutation } from 'api/auth/authApi';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import cl from "classnames"
import { useAppSelector } from 'hooks/redux/reduxHooks';
import { loginFormTypeSelector } from 'store/slices/auth/authSlice';

export type ILoginFormButtonProps = {

}

const LoginFormButton: React.FC<ILoginFormButtonProps> = ({ }) => {
	const loginFormType = useAppSelector(loginFormTypeSelector)
	const isRegister = loginFormType === "register"

	const [_, { isLoading }] = useLoginMutation({ fixedCacheKey: 'login-post' })


	return (
		<VioletButton type='submit' isLoading={isLoading}>
			<span className={cl("transition-opacity duration-300 absolute", { "opacity-0": isRegister })}>Войти</span>
			<span className={cl("transition-opacity duration-300 aabsolute", { "opacity-0": !isRegister })}>Зарегестрироваться</span>
		</VioletButton>
	);
}

export { LoginFormButton };