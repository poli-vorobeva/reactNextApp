//import  {useState} from "react";
import Head from "next/head";
import {Htag} from "../components/Htag/Htag";
import {ButtonTag} from "../components/ButtonTag/ButtonTag";
import {Ptag} from "../components/Ptag/Ptag";
import {Rating, Tag} from "../components";
import {withLayout} from "../Layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {useState} from "react";

const Home = ({menu,firstCategory}:HomeProps):JSX.Element => {
	const [rating, setRating] = useState(4)
	return <>

		<Htag tag={'h2'}>TITLTe2</Htag>
		<Htag tag={'h1'}>TITLTe1</Htag>
		<Htag tag={'h3'}>TITLTe3</Htag>
		<ButtonTag appearance='primary' className="button" arrow='right'>PrimButton</ButtonTag>
		<ButtonTag appearance='ghost' className="button" arrow='down'>GhostButon</ButtonTag>
		<Ptag size='l' className=''>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus.
		</Ptag>
		<Ptag size='s' className=''>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus.
		</Ptag>
		<Tag size='m' className='tag' color='red'>TAGelement</Tag>
		<Rating rating={rating} isEditable setRating={setRating}/>
		<Rating rating={1}/>
		<Rating rating={3}/>
		{
			menu.map(e=> {
				return (<div key={e._id.secondCategory}>{e._id.secondCategory}</div>)
			})
		}
	</>
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
		firstCategory
	})
	return {
		props: {
			menu, firstCategory
		}
	}
}
interface HomeProps extends Record<string, unknown>{
	menu:MenuItem[],
	firstCategory:number
}