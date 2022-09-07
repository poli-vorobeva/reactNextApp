import {TopPageComponentProps} from "./TopPageComponent.props";
import React from "react";
import {HhData, Htag, Tag} from "../../components";
import styles from './TopPageComponent.module.css'
import {Card} from "../../components/Card/Card";
import {TopLevelCategory} from "../../interfaces/course.interface";
export const TopPageComponent=({page,products,firstCategory}:TopPageComponentProps):JSX.Element=>{
	return(
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='m'>{products.length}</Tag>}
				<span>Сотрировка</span>
			</div>
			<div>
				{products && products.map(p=>(<div key={p._id}>
					{p.title}
				</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory==TopLevelCategory.Courses && <HhData {...page.hh}/>}
		</div>
	)
}