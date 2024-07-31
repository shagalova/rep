"use client"

import { CategoriesProp, deleteSearchParams } from '@/lib/data'
import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { startIndex } from '@/lib/vars';
  
const Categories = ({categories}: CategoriesProp) => {

    const [targetCategory, setTargetCategory] = useState([categories[0]]);
    const [isSelected, setIsSelected] = useState(false);
   
    const router = useRouter();

//     useEffect(() => {
//         console.log("delete")
//         const newSearchParams = new URLSearchParams(window.location.search);
  
    
//     // newSearchParams.delete("q".toLocaleLowerCase());
//     // newSearchParams.delete("startIndex");
  
    
//     const newPathname = `${window.location.pathname}`;
// router.push(newPathname)
//            }, [])


    const handleClickCategory = (e: React.MouseEvent<HTMLElement>) => {
    
        e.preventDefault();
        
        const li = (e.target as HTMLLIElement).textContent;

       
        // li && setTargetCategory(li)
        
        const newTarget = categories.filter(item => item ===li)
        // setTargetCategory(prev => prev.filter(item => item !==li))

          setTargetCategory(newTarget)
      }

   


    // const updateSearchParams = (targetCategory: string) => {
    //     const searchParams = new URLSearchParams(window.location.search);

    //     if(targetCategory) {
    //         searchParams.set("q", `subject:${targetCategory.trim()}`)
    //     } else {
    //         searchParams.delete("q")
    //     }

    //     const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    //     router.push(newPathName)

    // }

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

    const handleSearcParams = (e: React.MouseEvent<HTMLElement>) => {

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