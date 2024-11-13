import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

export default async function HomePage() {

	const tickets = await db.query.tickets.findMany({ orderBy: (model, { desc }) => desc(model.id) });

	console.debug(tickets);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div>
				{tickets.map((ticket) => (
					<div key={ticket.id}>{ticket.title} hi</div>
				))}
			</div>
		</main>
	);
}
