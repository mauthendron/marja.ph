import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Marja.ph',
	description: 'marja.ph photography',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={manrope.className}>
				{children}
				<Header />
			</body>
		</html>
	)
}
