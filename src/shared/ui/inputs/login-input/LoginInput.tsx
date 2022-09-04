import React, { memo, useEffect, useRef } from 'react';
import cn from "classnames"
import { MailSvg } from '../../svg/mail/MailSvg';
import { LockSvg } from 'shared/ui/svg/lock/LockSvg';

export type ILoginInputProps = {
	className?: string
	type: "email" | "password"
	isValid: boolean
	isSuccess : boolean
}

const LoginInput: React.FC<ILoginInputProps> = memo(({isSuccess, className, isValid, type, ...props }) => {
	const isEmail = type === "email"
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => { isEmail && inputRef.current?.focus() }, []);



	const wrapperClass = cn("flex text-login-text gap-3  flex-col bg-white shadow-loginInput p-4  rounded-[20px] border-[2px] border-transparent transition-colors duration-150", 
	{ "!border-red/80": !isValid },
	{ "!border-emerald-600": isSuccess }
	)

	const inputClass = cn(className, "placeholder:text-black min-w-[300px] outline-none ")

	return (
		<div className={wrapperClass}>
			<label className="">{isEmail ? "Логин" : "Пароль"}</label>
			<div className='flex items-center gap-3'>
				{isEmail ? <MailSvg fill='login-text' height={16} width={16} /> : <LockSvg fill='black' height={16} width={16} />}
				<input type={type === "password" ? "password" : "text"} ref={inputRef} {...props} className={inputClass} placeholder={(isEmail) ? "username" : "*********"} />
			</div>
		</div>
	);
})

export { LoginInput };