import { useCreateLinkMutation } from 'api/links/linksApi';
import cl from 'classnames';
import { useActions } from 'hooks/actions/useActions';
import { useInput } from 'hooks/input/useInput';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React, { useCallback, useState } from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import ModalHoc from 'shared/ui/hoc/modal/ModalHoc';
import { isCreateLinkModalShownSelector } from 'store/slices/links/linksSlice';

export type ILinksCreateModalProps = {

}

const LinksCreateModal: React.FC<ILinksCreateModalProps> = ({ }) => {

	const isOpen = useAppSelector(isCreateLinkModalShownSelector)

	const [createLink] = useCreateLinkMutation()
	const { setValue, ...link } = useInput()
	const { setisCreateLinkModalShown } = useActions()
	 const [isValid, setisValid] = useState(true);


	const onClose = useCallback(() => setisCreateLinkModalShown(false), []);
	const afterLeave = useCallback(() => setValue(""), []);


	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newValue = { link: link.value }

		createLink(newValue)
			.unwrap()
			.then(() => {
				onClose()
				alert("Ссылка создана")
			})
			.catch(e =>{
				setisValid(false)
				setTimeout(() => setisValid(true), 1000)
			})
	}

	return (
		<ModalHoc isOpen={isOpen} onClose={onClose} afterLeave={afterLeave} title='Создание ссылки' >
			<form onSubmit={submitHandler} className='flex flex-col gap-3'>
				<input {...link} className={cl('border-violet border-2 rounded-md p-3', {"border-red ": !isValid})} placeholder='Введите ссылку' />
				<VioletButton  type='submit'>Создать</VioletButton>
			</form>
		</ModalHoc>
	);
}

export { LinksCreateModal };