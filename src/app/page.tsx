import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { deleteMechanic, getMechanics } from '~/server/queries';
import { addTicket } from './lib/actions';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
	const mechanics = await getMechanics();
	// const tickets = [];


	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			{/* <SignedOut>
				<div className='h-full w-full text-2xl text-center'>Please sign</div>
			</SignedOut> */}
			{/* <SignedIn> */}
			<div>
				<div className='bg-blue-500 rounded p-10 border-slate-400'>
					<p>Add Mechanic</p>
					<form action={addTicket} className='flex flex-col'>
						<label htmlFor="title">Name</label>
						<input
							id='name'
							name='name'
							className='text-gray-500'
							defaultValue='' />
						<label htmlFor="description">Description</label>
						<input
							id='description'
							name='description'
							className='text-gray-500'
							defaultValue='' />
						<button type='submit'>Add Mechanic</button>
					</form>
				</div>
				{mechanics.map((mechanic) => (
					<Link key={mechanic.id} href={`/mechanics/${mechanic.id}`}>
						<div className='p-5 bg-slate-500 rounded cursor-pointer'>{mechanic.title}
							<form action={async () => {
								"use server"

								await deleteMechanic(mechanic.id);
							}}>
								<button type="submit">
									Delete
								</button>
								<Link href={`/mechanics/${mechanic.id}/edit`} className='rounded-md border p-2 hover:bg-gray-100'>edit</Link>
							</form>
						</div>
					</Link>
				))}
			</div>
			{/* </SignedIn> */}
		</main>
	);
}
