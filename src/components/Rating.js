import React from 'react'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const Rating = ({rating, onClick, style}) => {
  return <>
       {
           [...Array(5)].map((_ , i) =>(
               <span key={i} onClick={() =>onClick(i + 1)} style={style}>
                   {
                    rating > i ? (
                        <AiFillStar fontSize='15px'/>
                    ) : (
                     <AiOutlineStar/>   
                    )
                   }
               </span>
           ))
       } 

    </>
  
}
