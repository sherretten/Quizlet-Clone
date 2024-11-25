import Link from 'next/link';
import { editTicket } from '~/app/lib/actions';
import { getTicket } from '~/server/queries';


export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;

	const ticket = await getTicket(+id);

	const updateTicketWithId = editTicket.bind(null, ticket.id);

	return (
		<form action={updateTicketWithId} className='flex flex-col'>
			<label htmlFor="title">Title</label>
			<input
				id='title'
				name='title'
				className='text-gray-500'
				defaultValue={ticket?.title} />
			<label htmlFor="description">Description</label>
			<input
				id='description'
				name='description'
				className='text-gray-500'
				defaultValue={ticket?.desc ?? ''} />
			<Link href='/'>Cancel</Link>
			<button type='submit'>Edit Ticket</button>
		</form>
	);
}