import Image from 'next/image'
import styles from './page.module.css'
import { Home } from '@/components/Home/Home'
import { RunningText } from '@/components/RunningText/RunningText'


export default function Main() {
	return (
		<main>
			<Home />
			<RunningText />
		</main>
	)
}
