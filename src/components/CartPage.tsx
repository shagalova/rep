"use client"
import Image from 'next/image';
import React, {FC, useEffect, useState } from 'react';
import {booksInCart, IBook, IBookInCart} from "@/lib/data";
import CartList from './CartList';
import { count } from 'console';

const CartPage:FC = () => {

    const [booksCount, setBooksCount] = useState(1)

    const [items, setItems] = useState(booksInCart)

 
    const totalSum: number = items.reduce((previosValue, currentItem): number => {
        if(currentItem.price) {
            return (previosValue + currentItem.count * currentItem.price)
        } else return previosValue
        
    }, 0)
  

    const handleMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"], count: IBookInCart["count"] ) => {
        e.preventDefault();
        e.stopPropagation();

        if (count < 2) {
            handleRemoveBook(id)
        } else {
            setItems(items.map(item => {
                if (item.id === id) {
                    item.count --
                }
                return item
            }));
        }

    }

    const handlePlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"] ) => {
        e.preventDefault();
        e.stopPropagation();
        
        setItems(items.map(item => {
            if (item.id === id) {
                item.count ++
            }
            return item
        }));
        
    }

    const handleRemoveBook = (id :IBookInCart["id"]) => {
        setItems(items.filter(item => item.id !== id))
    }

  return (
    <div className='max-width'>
        <div className=" items-start py-[87px] px-40 gap-y-5">
        {!!items.length ?
        <>
           
            <CartList 
            items={items}
            increaseCount={handlePlus}
            decreaseCount={handleMinus}
            
            />
<div className="text-2xl/[29.26px] text-[#1C2A39] pb-5 self-end">
            TOTAL PRICE: $<span>{Math.round(( totalSum ) * 100) / 100}</span>
            </div>
            <button className="w-44 self-end text-[#4C3DB2] border-[#4C3DB2] border focus:outline-none text-[8px]/[9.75px] py-[18px] text-center">
            CHECKOUT
            </button> 

            
        </>
        : <h2 className="text-2xl/[29.26px] text-[#1C2A39]">THE CART IS EMPTY YET</h2>

}    
    </div>
</div>
  )
}

export default CartPage