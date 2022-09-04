import React, { useState } from 'react';
import { useLoginMutation, useRegisterMutation } from 'api/auth/authApi';
import { useInput } from 'hooks/input/useInput';
import { LoginInput } from 'shared/ui/inputs/login-input/LoginInput';
import { useNavigate } from 'react-router';
import { useActions } from 'hooks/actions/useActions';
import { CONTACTS_ROUTE } from 'pages/routing/routes';
import cl from 'classnames';
import { LoginFormHeader } from 'components/login/form/header/LoginFormHeader';
import { RegisterParagraph } from 'components/login/register-paragraph/RegisterParagraph';
import { LoginFormButton } from 'components/login/form/button/LoginFormButton';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import { loginFormTypeSelector } from 'store/slices/auth/authSlice';

export type ILoginPageProps = {

}

const LoginPage: React.FC<ILoginPageProps> = ({ }) => {
	const navigate = useNavigate()
	const formType = useAppSelector(loginFormTypeSelector)

	const [login] = useLoginMutation({ fixedCacheKey: 'login-post' })
	const [register] = useRegisterMutation({ fixedCacheKey: 'login-post' })

	const { setValue: setEmail, ...emailInput } = useInput()
	const { setValue: setPass, ...passwordInput } = useInput()
	const [isValid, setisValid] = useState(true);
	const [isSuccess, setisSuccess] = useState(false);


	const { setIsLoggedIn, setloginFormType } = useActions()


	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const userValue = { username: emailInput.value, password: passwordInput.value }

		formType === "login"
			?
			login(userValue)
				.unwrap()
				.then((res) => {
					localStorage.setItem("token", res.access_token)
					setIsLoggedIn(true)
					navigate(CONTACTS_ROUTE)
				})
				.catch(e => {
					setisValid(false)
					setTimeout(() => setisValid(true), 1000)
				})
			:
			register(userValue).unwrap()
				.then(async () => {
					setisSuccess(true)
					await new Promise((res) => setTimeout(res, 1000))
					setisSuccess(false)
					setloginFormType("login")
				})
				.catch(e => {
					setisValid(false)
					setTimeout(() => setisValid(true), 1000)
				})


	}


	return (
		<section className='min-h-screen w-full bg-main flex justify-center items-center'>
			<form onSubmit={submitHandler} className='h-[650px] bg-form p-6 flex flex-col gap-6 rounded-[30px] relative'>
				<LoginFormHeader />
				<img src="/circle.JPG" alt="circle" className='mx-auto my-6 -mt-6' />
				<LoginInput isValid={isValid} isSuccess={isSuccess}  {...emailInput} type='email' />
				<LoginInput isValid={isValid} isSuccess={isSuccess} {...passwordInput} type='password' />
				<LoginFormButton />
				<p className={cl('absolute top-60 font-semibold text-emerald-600 transition-opacity duration-150', { "opacity-0": !isSuccess })}>Регистрация успешна</p>
				<RegisterParagraph />
			</form>
		</section>
	);
}

export default LoginPage;

