import {TopPageComponentProps} from "./TopPageComponent.props";
import React, {useReducer} from "react";
import {Advantages, HhData, Htag, Sort, Tag} from "../../components";
import styles from './TopPageComponent.module.css'
import {TopLevelCategory} from "../../interfaces/course.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.Reducer";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
	const [{products:sortedProducts,sort},dispatch]=useReducer(sortReducer,{products,sort:SortEnum.Rating})
	const setSort=(sort:SortEnum)=>{
		dispatch({type:sort})
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='m'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort}/>
			</div>
			<div>
				{sortedProducts && sortedProducts.map(p => (<div key={p._id}>
					{p.title}
				</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущества</Htag>
				<Advantages advantages={page.advantages}/>
			</>}
			{page.seoText
			&& <div className={styles.seo}
							dangerouslySetInnerHTML={{__html: page.seoText}}/>
			}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
	)
}