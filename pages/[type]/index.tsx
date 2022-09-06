//import {useState} from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {withLayout} from "../../Layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/course.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelMenu} from "../../helpers/helpers";

const Type = ():JSX.Element => {

	return <>Type</>
}

export default withLayout(Type)

export const getStaticPaths:GetStaticPaths=async()=>{
	return{
		paths:firstLevelMenu.map(m=>'/'+m.route),
		fallback:true
	}
}
export const getStaticProps: GetStaticProps<TypeProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
	if(!params){
		return{
			notFound:true
		}
	}
	const firstCategoryItem= firstLevelMenu.find(m=>m.route==params.type)
	if(!firstCategoryItem){
		return{
			notFound:true
		}
	}

		const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
			firstCategory:firstCategoryItem.id
		})
		return {
			props: {
				menu, firstCategory:firstCategoryItem.id
			}
		}
}
interface TypeProps extends Record<string, unknown>{
	menu:MenuItem[],
	firstCategory:number
}