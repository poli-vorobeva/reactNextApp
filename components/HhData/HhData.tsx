import {HhDataProps} from "./HhData.props";
import styles from './HhData.module.css'
import cn from 'classnames'
import {Card} from "..";
import React from "react";
import Rate from './rate.svg'
import {priceRu} from "../../helpers/helpers";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.hhCount}>
				<div className={styles.hhStatTitle}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={styles.rate}>
						<Rate/>
						<Rate className={styles.filled}/>
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={styles.rate}>
						<Rate/><Rate/><Rate/>
						<Rate className={styles.filled}/>
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессивонал</div>
					<div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={styles.rate}>
						<Rate/>
						<Rate className={styles.filled}/>
					</div>
				</div>
			</Card>
		</div>
	)
}