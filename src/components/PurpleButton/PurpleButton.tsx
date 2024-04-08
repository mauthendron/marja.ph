import { PurpleButtonProps } from './PurpleButton.props'
import styles from './PurpleButton.module.css'
import Image from 'next/image'
import purpleButtonIcon from './purpleButtonIcon.svg'

export const PurpleButton = ({}: PurpleButtonProps): JSX.Element => {
	return (
		<button className={styles.purple}>
			<Image src={purpleButtonIcon} width={30} height={30} alt='purpleButtonIcon'/>
		</button>
	)
}
