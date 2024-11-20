import { SignedIn, SignedOut } from '@clerk/nextjs';
import { deleteTicket, getTickets } from '~/server/queries';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
	// const tickets = await getTickets();
	const tickets = [];

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			{/* <SignedOut>
				<div className='h-full w-full text-2xl text-center'>Please sign</div>
			</SignedOut> */}
			{/* <SignedIn> */}
			<div>
				{tickets.map((ticket) => (
					<div key={ticket.id}>{ticket.title}

						<form action={async () => {
							"use server"

							await deleteTicket(ticket.id);
						}}>
							<button type="submit">
								Delete
							</button>
						</form>
					</div>
				))}
			</div>
			{/* </SignedIn> */}
		</main>
	);
}
