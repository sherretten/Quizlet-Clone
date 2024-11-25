import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { deleteTicket, getTickets } from '~/server/queries';
import { addTicket } from './lib/actions';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
	const tickets = await getTickets();
	// const tickets = [];


	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			{/* <SignedOut>
				<div className='h-full w-full text-2xl text-center'>Please sign</div>
			</SignedOut> */}
			{/* <SignedIn> */}
			<div>
				<div className='bg-blue-500 rounded p-10 border-slate-400'>
					<p>Create Ticket</p>
					<form action={addTicket} className='flex flex-col'>
						<label htmlFor="title">Title</label>
						<input
							id='title'
							name='title'
							className='text-gray-500'
							defaultValue='' />
						<label htmlFor="description">Description</label>
						<input
							id='description'
							name='description'
							className='text-gray-500'
							defaultValue='' />
						<button type='submit'>Create Ticket</button>
					</form>
				</div>
				{tickets.map((ticket) => (
					<Link key={ticket.id} href={`/tickets/${ticket.id}`}>
						<div className='p-5 bg-slate-500 rounded cursor-pointer'>{ticket.title}
							<form action={async () => {
								"use server"

								await deleteTicket(ticket.id);
							}}>
								<button type="submit">
									Delete
								</button>
								<Link href={`/tickets/${ticket.id}/edit`} className='rounded-md border p-2 hover:bg-gray-100'>edit</Link>
							</form>
						</div>
					</Link>
				))}
			</div>
			{/* </SignedIn> */}
		</main>
	);
}
