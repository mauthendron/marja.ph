import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({...props}: ButtonProps): JSX.Element => {
	return (
      <button className={styles.button} {...props}>
         {props.children}
      </button>
   )
}