'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface MyProps { };

export const HeaderNav: React.FC<MyProps> = React.memo(({ }) => {

	return (
		<nav className='flex w-full justify-between'>
			<Link href="/">Jira Clone</Link>
			<div>
				{/* <SignedOut> */}
				{/* <SignInButton /> */}
				{/* </SignedOut> */}
				{/* <SignedIn> */}
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => null}>
					Add Ticket
				</button>
				{/* <UserButton /> */}
				{/* </SignedIn> */}
			</div>
		</nav >
	);
});

HeaderNav.displayName = 'HeaderNav';
