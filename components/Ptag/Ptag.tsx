import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css'
import cn from 'classnames'

export const Ptag=({children,size='s',className,...props}:PtagProps):JSX.Element=>{
	return(
		<p className={cn(className,{
			[styles.s]: size == 's',
			[styles.m]:size=='m',
			[styles.l]:size=='l'
		})
		}
			 {...props}
		>
			{children}
		</p>
	)
}