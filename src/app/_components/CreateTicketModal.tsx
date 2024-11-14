import * as React from 'react';

interface MyProps { };

export const CreateTicketModal: React.FC<MyProps> = React.memo(({ }) => {

	async function createTicket(formData: FormData) {
		'use server'

		const rawFormData = {
			title: formData.get('title'),
			desc: formData.get('description')
		}
	}
	return (
		<div></div>
	);
});

CreateTicketModal.displayName = 'CreateTicketModal';
