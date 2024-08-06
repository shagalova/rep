"use client"

import { CategoriesProp } from '@/lib/data'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { changeFilter } from '@/store/filterSlice';

  
const Categories = ({categories}: CategoriesProp) => {

    const dispatch = useAppDispatch();
    
    let targetCategory = useAppSelector((state) => state.filter.filter)
   
    const router = useRouter();

    const handleClickCategory = (e: React.MouseEvent<HTMLElement>) => {
    
        e.preventDefault();
        
        const li = (e.target as HTMLLIElement).textContent;
        
        li && dispatch(changeFilter(li))
      }


    const updateSearchParams = (e: React.MouseEvent<HTMLElement>) => {
        const searchParams = new URLSearchParams(window.location.search);

        const li = (e.target as HTMLLIElement).textContent;
        if(li) {
            searchParams.set("q", `${li.trim()}`)
            searchParams.delete("startIndex")
        } else {
            searchParams.delete("q")
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName)

    }

  return (
    <ul className='category col-start-2 col-end-3 row-start-2 row-end-auto'>
        {
            categories.map((item, index) => (
                <li key={index} className={targetCategory.toLocaleString() === item  ? 'category__item activeItem' : 'category__item'}  
                onClick = {(e)=>{handleClickCategory(e); updateSearchParams(e)}}>{item}</li>
            ))
        }
    </ul>
  )
}

export default Categories