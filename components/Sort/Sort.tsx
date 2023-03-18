import {SortEnum, SortProps} from "./Sort.props";
import styles from './Sort.module.css'
import cn from 'classnames'
import React from "react";
import SortSvg from '../../helpers/icons/sort.svg'

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<span onClick={() => setSort(SortEnum.Rating)} className={cn({
				[styles.active]: sort == SortEnum.Rating
			})}>
			{sort===SortEnum.Rating && <SortSvg classname={styles.sortItem}/>} По рейтингу
			</span>
			<span onClick={() => setSort(SortEnum.Price)} className={cn({
				[styles.active]: sort == SortEnum.Price
			})}>
			{sort===SortEnum.Price && <SortSvg classname={styles.sortItem}/>} По цене
			</span>
		</div>
	)
}