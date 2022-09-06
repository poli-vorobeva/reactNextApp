import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import styles from './menu.module.css'
import cn from 'classnames'
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
	const router= useRouter()
	const {menu, setMenu, firstCategory} = useContext(AppContext)
const openSecondLevel=(secondCategory:string)=>{
		setMenu && setMenu(menu.map(m=>{
			if(m._id.secondCategory === secondCategory){
				m.isOpened=!m.isOpened
			}
			return m
	}))
}
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{
					menu.map(m => {
						if(m.pages.map(p=>p.alias).includes(router.asPath.split('/')[2])){
							m.isOpened=true
						}
						return (
							<div key={m._id.secondCategory}>
								<div className={styles.secondLevel}
								onClick={()=>openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
								<div className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened
								})}>
									{
										buildThirdLevel(m.pages, menuItem.route)
									}
								</div>
							</div>)
					})
				}
			</div>
		)
	}
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		//	console.log('third',pages)
		return (
			pages.map(p => {
				return (
					<Link href={`/${route}/${p.alias}`}>
						<a className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${p.alias}`===router.asPath
						})}>{p.category}</a>
					</Link>

				)
			})
		)
	}
	const buildFirstLevel = () => {
		return (
			<>
				{
					firstLevelMenu.map(menu => {
						return (
							<div key={menu.route}>
								<Link href={`/${menu.route}`}>
									<a>
										<div className={cn(styles.firstLevel, {
											[styles.firstLevelActive]: menu.id == firstCategory
										})}>
											{menu.icon}
											<span>{menu.name}</span>
										</div>
									</a>
								</Link>

								{menu.id == firstCategory && buildSecondLevel(menu)}
							</div>)
					})
				}
			</>
		)
	}
	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	)
}