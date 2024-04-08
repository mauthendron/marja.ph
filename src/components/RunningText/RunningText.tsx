'use client'

import Image from 'next/image'
import styles from './RunningText.module.css'
import icon from './runningTextIcon.svg'

export const RunningText = (): JSX.Element => {
	
	return (
		<div className={styles.slider}>
			<div className={styles.items}>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Event Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Commercial Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Product Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Wedding Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Landscape Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Branding Photography</div>
				<div className={styles.icon}>
					<Image src={icon} alt='iconRunningText' width={40} height={40} />
				</div>
				<div className={styles.descr}>Portrait Photography</div>
			</div>
		</div>
	)
}
