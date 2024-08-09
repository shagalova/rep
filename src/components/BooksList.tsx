import React from 'react'

import { FilterProps, IBook, BooksListProps } from '@/lib/data';
import {  maxResult } from '@/lib/vars';
import LoadMore from './LoadMore';
import Card from './Card';


const API_KEY = process.env.API_KEY;

async function getBooks( filters: FilterProps ) {
    const {q, startIndex} = filters;
    const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=${maxResult}&langRestrict=en`);
    const data = await res.json();


    if (!res.ok) {
        throw new Error("Failed to fetch data")
    } 

    
    return data.items;
}


export default async function BooksList({ searchParams }: BooksListProps) {
    

    const books = await getBooks({ 
        q: searchParams.q || "Architecture",
        startIndex: +searchParams.startIndex || 0,
    });


  return (
    
   
        <>
                <div className="bookshop__el output grid grid-cols-[repeat(auto-fill,_424px)] lg:grid-cols-[repeat(auto-fill,_340px)] 
                grid-rows-[repeat(auto-fill,_300px)] lg:grid-rows-[repeat(auto-fill,_240px)]  col-start-3 col-end-5 
                row-start-2 row-end-4 gap-x-[76px] xl:gap-x-10 lg:gap-x-5 gap-y-24 xl:gap-y-[70px] lg:gap-y-[30px]">

    <>
   {
    books && books.map((book: any) => {
        const bookItem: IBook = {
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors || "No authors",
            img: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail || "/no_cover_thumb.png",
            description: book.volumeInfo.description || book.volumeInfo.title, 
            rating: book.volumeInfo.averageRating || 0,
            review: book.volumeInfo.ratingsCount || 0,
            categories: book.volumeInfo.categories,
            saleability: book.saleInfo.saleability, 
            price: book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount,
            currency: book.saleInfo.retailPrice && book.saleInfo.retailPrice.currencyCode,
            count: 0,
        }

        const { id, title, authors, img, description, rating, review, categories, saleability, price, currency, count } = bookItem;
        return (
            <div className="output__card flex" key={id}>
                <Card id={id} img={img} authors={authors} title={title} rating={rating} review={review} description={description} saleability={saleability} price={price} currency={currency} count={count}/>
                       
                    </div>
        )
     })
   }
    </>
                           
                </div>

                <LoadMore 
                    pageNumber={((+searchParams.startIndex + maxResult) || 6) / 6}
                    isNext={((+searchParams.startIndex + maxResult) || 6) > books.length} />
              
</>

  )
}

