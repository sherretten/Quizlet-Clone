'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface MyProps { };

export const HeaderNav: React.FC<MyProps> = React.memo(({ }) => {
	const router = useRouter();

	const handleCreateTicket = React.useCallback(async () => {
		try {


			router.refresh();
		} catch (err) {

		}
	}, []);

	return (
		<nav className='flex w-full justify-between'>
			<div>Jira Clone</div>
			<div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={handleCreateTicket}>Add Ticket</button>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
});

HeaderNav.displayName = 'HeaderNav';
