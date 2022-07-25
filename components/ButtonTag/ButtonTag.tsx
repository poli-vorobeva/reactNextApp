import {ButtonTagProps} from "./ButtonTag.props";
import cn from 'classnames'
import styles from './ButtonTag.module.css'
import Arrow from './arrow.svg'

export const ButtonTag = ({children, arrow = 'none', appearance, className}: ButtonTagProps): JSX.Element => {
	return (
		<button className={cn(
			styles.button,
			className,
			{[styles.arrow]:arrow!='none'},
			{[styles.down]:arrow==='down'},
			{[styles.primary]: appearance === 'primary'},
			{[styles.ghost]: appearance === 'ghost'})

		}>{children}
			{arrow!=='none' && <Arrow/>}
		</button>

	)
}