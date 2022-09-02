import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css'
import cn from 'classnames'
import {Menu} from "../components/Menu/Menu";

export const Sidebar=({...props}:SidebarProps):JSX.Element=>{
	console.log("**&&*&&*",props)
	return(
		<div {...props}>
			<Menu/>
		</div>
	)
}