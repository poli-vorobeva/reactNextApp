import {SidebarProps} from "./Sidebar.props";
import Logo from '../logo.svg'
import {Menu} from "../components/Menu/Menu";
import cn from 'classnames'
import styles from './Sidebar.module.css'
import React from "react";

export const Sidebar=({className,...props}:SidebarProps):JSX.Element=>{
		return(
		<div className={cn(className,styles.sidebar)} {...props}>
			<Logo className={styles.logo}/>
			<div>ПОИСК</div>
			<Menu/>
		</div>
	)
}