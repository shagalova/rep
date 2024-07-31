"use client"

import { IBook } from '@/lib/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Card = ({ 
    id,
    img, 
    authors, 
    title,  
    rating,
    review,
    description, 
    saleability,
    price,
    currency    
}: IBook) => {

const [isInCart, setIsInCart] = useState(false)
// const initialState = [{"id": ""}]
// const [cart, setCart] = useState(initialState)

const handleClickCart = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBook['id']) => {
    
    e.preventDefault();
    // const btn = e.target

    setIsInCart(prev => !prev)
    // isInCart ? setCart(prev => [...prev, {"id": id}]) : setCart(prev => prev.filter(item => item.id != id))
    // console.log(cart)
}

// useEffect(() => {

// },[cart])

  return (
    <>
    <div className="card__cover flex-[0_0_50%] ">
                            <Image src={img} alt={img} width={212} height={300} className='w-[212px] h-[300px] shadow-[0_24px_36px_rgba(53,49,84,0.28)]'/>
                        </div> 
                        <div className="card__text flex flex-[0_0_50%] flex-col justify-center pl-9">
                            <div className="card__text-author font-openSans text-[10px]/[13.62px] text-[#5C6A79] pb-1">{authors}</div>
                            <div className="card__text-title text-base/[19.5px] text-[#1C2A39] pb-1">{title}</div>
                            {rating && rating > 0 
                                ? <div className="card__text-rating flex items-center text-[10px]/[13.62px]"> 
                                    <div className="rating__icons">
                                        <div className="rating__active"></div>
                                    </div>
                                    <div className="rating__text text-[#5C6A79] font-openSans pl-1.5">{review} review</div>
                                </div>
                                : ""}
                                
                            {description && <div className="card__text-summary py-4 font-openSans text-[10px]/[13.62px] text-[#5C6A79]"><p className='line-clamp-3'>{description}</p></div>}
                            {saleability === "FOR_SALE" 
                            ? <div className="card__text-price text-[13px]/[15.85px] text-[#1C2A39] pb-4"> {price} {currency}</div>
                            : ""}
                            <button className="card__text-btn w-full h-11 text-[#4C3DB2] border border-[#4C3DB2] text-[8px]/[10px] uppercase" 
                            onClick={(e) => handleClickCart(e, id )}>{ !isInCart ? 'buy now' : "in the cart" }</button>
                        </div>
                        </>
  )
}

export default Card