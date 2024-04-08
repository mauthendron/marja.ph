import { HomeProps } from './Home.props'
import styles from './Home.module.css'
import Image from 'next/image'
import homeImg from './home.svg'
import { PurpleButton } from '../PurpleButton/PurpleButton'
import Link from 'next/link'

export const Home = ({}: HomeProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.about}>
					<h2>Stunning photography by</h2>
					<h1>Maria M.</h1>
				</div>
				<Image className={styles.img} src={homeImg} width={346} height={346} alt='homeImage' />
				<div className={styles.work}>
					<span>Let's</span>
					<Link className={styles.contact} href='/contact'>
						<PurpleButton />
					</Link>
					<div className={styles.work_descr}>Work together</div>
				</div>
			</div>
		</div>
	)
}
