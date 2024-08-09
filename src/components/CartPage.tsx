"use client"

import React, {FC, useRef } from 'react';
import { IBookInCart} from "@/lib/data";
import CartList from './CartList';
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {  
    removeFromCart, 
    decreaseCount, 
    increaseCount, 
    selectCartItems, 
    selectCartTotal, 
    CartState
} from "@/store/cartSlice";



const CartPage = () => {

    // const store = useAppStore()
    
    // const dispatch = useAppDispatch();

    // const initialized = useRef(false);
    // const basket = useAppSelector((state) => state.cart.items)    
    // if (!initialized.current) {
    //     store.dispatch(initializeItems(items))
    //     initialized.current = true
    // }
    
    const dispatch = useAppDispatch()

    const basket: IBookInCart[] = useAppSelector(selectCartItems);
    // const basket = useAppSelector((state) => state.cart.items)
    const basketTotalSum = useAppSelector(selectCartTotal);

    const handleMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"], count: IBookInCart["count"] ) => {

        e.preventDefault();
        e.stopPropagation();

            basket.map(item => {
                if (item.id === id) {
                    
                    dispatch(decreaseCount({id}))
                    if (count < 2) {
                        dispatch(removeFromCart({ id }))
                    };
                }
                return item
            });
        }

    
    const handlePlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"] ) => {
        e.preventDefault();
        e.stopPropagation();
        
        basket.map(item => {
            if (item.id === id) {
                
                dispatch(increaseCount({id}))
            }
            return item
        });

    }

  return (
    <div className='max-width'>
        <div className=" items-start py-[87px] px-40 xl:px-20 lg:px-10 gap-y-5 lg:gap-y-2">
        {basket.length > 0 ?
        <>
           
            <CartList 
            items={basket}
            // items={items}
            increaseCount={handlePlus}
            decreaseCount={handleMinus}
            
            />
<div className="text-2xl/[29.26px] text-[#1C2A39] pb-5 self-end">
            TOTAL PRICE: $<span>{Math.round(( basketTotalSum ) * 100) / 100}</span>
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