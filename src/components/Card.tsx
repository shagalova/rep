"use client"

import { IBook } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppStore } from "@/store/hooks";
import { addToCart, removeFromCart } from "@/store/cartSlice";

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

const dispatch = useAppDispatch();

const addToBasket = () => {
    
    dispatch(
        addToCart({
          id,
          img, 
          authors,
          title,
          rating,
          review,
          price,
          currency,
          count: 1
        })
      );

      setIsInCart(prev => !prev)

    };

const removeFromBasket = () => {

    dispatch(removeFromCart({ id }));

    setIsInCart(prev => !prev)
};
   
const handleClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    isInCart === false ? addToBasket() : removeFromBasket()
}


  return (
    <>
    <div className="card__cover flex-[0_0_50%] ">
                            <Image src={img} alt={img} width={212} height={300} className='w-[212px] lg:w-[170px] h-[300px] lg:h-[240px] shadow-[0_24px_36px_rgba(53,49,84,0.28)] lg:shadow-[0_12px_18px_rgba(53,49,84,0.28)]'/>
                        </div> 
                        <div className="card__text flex flex-[0_0_50%] flex-col justify-center pl-9 lg:px-4">
                            <div className="card__text-author font-openSans text-[10px]/[13.62px] text-[#5C6A79] pb-1">{authors}</div>
                            <div className="card__text-title text-base/[19.5px] lg:text-xs/[13px] text-[#1C2A39] pb-1">{title}</div>
                            {rating && rating > 0 
                                ? <div className="card__text-rating flex items-center text-[10px]/[13.62px] lg:text-[10px]/[11px]"> 
                                    <div className="rating__icons">
                                        <div className="rating__active"></div>
                                    </div>
                                    <div className="rating__text text-[#5C6A79] lg:text-[10px]/[11px] font-openSans pl-1.5">{review} review</div>
                                </div>
                                : ""}
                                
                            {description && <div className="card__text-summary py-4 lg:py-2.5 font-openSans text-[10px]/[13.62px] lg:text-[10px]/[11px] text-[#5C6A79]"><p className='line-clamp-3'>{description}</p></div>}
                            {saleability === "FOR_SALE" 
                            ? <div className="card__text-price text-[13px]/[15.85px] lg:text-[10px]/[12px] text-[#1C2A39] pb-4 lg:pb-2.5"> {price} {currency}</div>
                            : ""}
                            <button className="card__text-btn w-full h-11 lg:h-[30px] lg:font-medium text-[#4C3DB2] border border-[#4C3DB2] text-[8px]/[10px] uppercase" 
                            onClick={(e) => handleClick(e)}>{ isInCart === false ? 'buy now' : "in the cart" }</button>
                        </div>
                        </>
  )
}

export default Card