import {useEffect, useState} from "react";
import StarIcon from './star.svg'
import cn from 'classnames'
import {inspect} from "util";
import styles from './Rating.module.css'
import {RatingProps} from "./Rating.props";

export const Rating=({isEditable=false,rating,setRating,...props}:RatingProps)=>{
	const [ratingArray,setRatingArray]=useState<JSX.Element[]>(new Array(5)
		.fill(<></>))
	useEffect(()=>{
		constructRating(rating)
	},[rating])

	const constructRating=(currentRating:number)=>{
		const updatedArray= ratingArray.map((el,i)=>{
			return(
				<span	className={cn(styles.star,{
					[styles.fill]:i<currentRating,
					[styles.editable]:isEditable
				})}
					onMouseEnter={()=>changeDisplay(i+1)}
					onMouseLeave={()=>changeDisplay(rating)}
					onClick={()=>onClick(i+1)}>
						<StarIcon
							tabIndex={isEditable?0:-1}
							onKeyDown={(e:KeyboardEvent)=>isEditable && handleSpace(i+1,e)}
						/>
				</span>

			)
		})
		setRatingArray(updatedArray)
	}
	const handleSpace=(i:number,e:KeyboardEvent)=>{
		if(e.code!="Space" || !setRating) return
		setRating(i)
	}
	const onClick=(i:number)=>{
		if(!isEditable||!setRating)return
		setRating(i)
	}
	const changeDisplay=(i:number)=>{
if(!isEditable)return
		constructRating(i)
	}
	return(
		<div {...props}>
			{ratingArray.map((r,i)=><span key={i}>{r}</span>)}
		</div>
	)
}