import { useGetStatisticsQuery } from 'api/links/linksApi';
import { LinksCreateModal } from 'components/links/create-modal/LinksCreateModal';
import { LinksPagination } from 'components/links/pagination/LinksPagination';
import { LinksTable } from 'components/links/table/LinksTable';
import { useActions } from 'hooks/actions/useActions';
import React, { useState } from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';

import { HeaderHoc } from 'shared/ui/hoc/header/HeaderHoc';
import ModalHoc from 'shared/ui/hoc/modal/ModalHoc';


export type IContactsPageProps = {

}

const ContactsPage: React.FC<IContactsPageProps> = ({ }) => {

	const {setisCreateLinkModalShown} = useActions()



	return (
		<HeaderHoc>
			<section className="min-h-screen w-full bg-main flex justify-start pt-20  p-6 flex-col gap-5 items-center">
				<VioletButton onClick={() => setisCreateLinkModalShown(true)}>Создать ссылку</VioletButton>
				<LinksPagination/>
				<LinksTable/>
				<LinksCreateModal />
			</section>
		</HeaderHoc>
	);
}

export default ContactsPage



//TODO: Добавить модальное окно на редактирование/удаление/создание
