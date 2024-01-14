import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import Link from 'next/link'
import { Button } from '../Button/Button'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<>
			<header className={styles.header}>
				<Link className={styles.logo} href='/'>
					MARJA.PH
				</Link>
				<nav className={styles.navbar}>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About Me</Link>
						</li>
						<li>
							<Link href='/portfolio'>Portfolio</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
					<Button>Contact Me</Button>
				</nav>
			</header>
			<div className={styles.line}></div>
		</>
	)
}
