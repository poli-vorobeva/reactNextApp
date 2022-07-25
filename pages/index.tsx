import React from "react";
import Head from "next/head";
import {Htag} from "../components/Htag/Htag";
import {ButtonTag} from "../components/ButtonTag/ButtonTag";
import {Ptag} from "../components/Ptag/Ptag";
import {Tag} from "../components";

const tr=()=>{
	return <div>
<Htag tag={'h2'}>TITLTe2</Htag>
		<Htag tag={'h1'}>TITLTe1</Htag>
		<Htag tag={'h3'}>TITLTe3</Htag>
		<ButtonTag appearance='primary' className="button" arrow='right'>PrimButton</ButtonTag>
		<ButtonTag appearance='ghost'  className="button" arrow='down'>GhostButon</ButtonTag>
		<Ptag size='l' className=''>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus.
		</Ptag>
		<Ptag size='s' className=''>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus.
		</Ptag>
		<Tag size='m' className='tag' color='red'>TAGelement</Tag>
	</div>
}

export default tr
