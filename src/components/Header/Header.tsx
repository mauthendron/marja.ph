'use client'

import { useState } from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../Button/Button'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	const [activeItem, setActiveItem] = useState<string | null>(null)

	const router = typeof window !== 'undefined' ? useRouter() : null

	const handleItemClick = (pathname: string) => {
		setActiveItem(pathname)
	}

	return (
		<>
			<header className={styles.header}>
				<Link className={styles.logo} href='/'>
					MARJA.PH
				</Link>
				<nav className={styles.navbar}>
					<ul>
						<li className={activeItem === '/' ? styles.active : ''}>
							<Link href='/' onClick={() => handleItemClick('/')}>
								Home
							</Link>
						</li>
						<li className={activeItem === '/about' ? styles.active : ''}>
							<Link href='/about' onClick={() => handleItemClick('/about')}>
								About Me
							</Link>
						</li>
						<li className={activeItem === '/portfolio' ? styles.active : ''}>
							<Link
								href='/portfolio'
								onClick={() => handleItemClick('/portfolio')}
							>
								Portfolio
							</Link>
						</li>
						<li className={activeItem === '/services' ? styles.active : ''}>
							<Link
								href='/services'
								onClick={() => handleItemClick('/services')}
							>
								Services
							</Link>
						</li>
					</ul>
					<Button>Contact Me</Button>
				</nav>
			</header>
			<div className={styles.line}></div>
		</>
	)
}
