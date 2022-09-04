
import React, { memo } from 'react';
import cl from "classnames";
import { useAppSelector } from 'hooks/redux/reduxHooks';
import { loginFormTypeSelector } from 'store/slices/auth/authSlice';
import { useActions } from 'hooks/actions/useActions';


export type IRegisterParagraphProps = {

}

const RegisterParagraph: React.FC<IRegisterParagraphProps> = memo(({ }) => {
	const formType = useAppSelector(loginFormTypeSelector)
	const isRegister = formType === "register"


	const { setloginFormType } = useActions()

	const clickHandler = () => setloginFormType(formType === "login" ? "register" : "login")




	return (
		<p className={cl(pClass, { "-translate-y-[24px]": isRegister })}>
			<span className={cl(spanClass, { ' opacity-0': isRegister })}>
				{"Впервые у нас? - "}
				<button type='button' onClick={clickHandler} className={btnClass}>Регистрация</button>
			</span>
			<span className={cl(spanClass, { "opacity-0": !isRegister })}>
				<button type='button' onClick={clickHandler} className={btnClass}>Авторизоваться</button>
			</span>
		</p>
	);
})

export { RegisterParagraph };


const btnClass = 'text-violet font-semibold text-base hover:opacity-70 transition-all duration-150'
const spanClass = 'text-sm ml-auto mt-auto duration-300 transition-all'
const pClass = "flex flex-col mt-[24px] transition-transform duration-300"