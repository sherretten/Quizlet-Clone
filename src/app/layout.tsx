import "~/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { HeaderNav } from './_components/HeaderNav';

export const metadata: Metadata = {
	title: "Shop Scheduler",
	description: "An app that helps bike shops schedule mechanics",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		// <ClerkProvider>
		<html lang="en" className={`${GeistSans.variable}`}>
			<body className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
				<HeaderNav />
				{children}
			</body>
		</html>
		// </ClerkProvider >
	);
}
