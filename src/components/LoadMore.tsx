"use client"

import React from 'react'

import { useRouter } from 'next/navigation' 
import { LoadMoreProps, updateSearchParams } from '@/lib/data'
import { maxResult } from '@/lib/vars'

const LoadMore = ({ pageNumber, isNext }: LoadMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const nextIndex = (pageNumber * 6);
    console.log(nextIndex)
    const newPathName = updateSearchParams("startIndex", `${nextIndex}`)
    
    router.push(newPathName);
  }
  return (
    <div className='bookshop__el loadMore col-start-3 col-end-5 row-start-4 row-end-5 justify-self-center'>
      {/* {!isNext && ( */}
        <button className="w-44 h-11  mt-24 text-[8px]/[9.75px] uppercase text-[#4C3DB2] border border-[#4C3DB2]" onClick={handleNavigation}>
      Load more</button>
      {/* )} */}
      
    </div>
    
  )
}

export default LoadMore