import {TagProps} from "./Tag.props";
import styles from './Tag.module.css'
import cn from 'classnames'
//import React from "react";

export const Tag = ({children, size = 'm', color = 'ghost', href, className='', ...props}: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag,className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.gray]: color == 'gray',
			[styles.primary]: color == 'primary',
			[styles.green]: color == 'green'
		})
		}
			 {...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>}
		</div>
	)
}