import React, { FC, MouseEvent, MouseEventHandler } from 'react'

import { notFound } from 'next/navigation';
import { FilterProps, IBook, BooksListProps, categories } from '@/lib/data';
import { startIndex, maxResult, curIndex} from '@/lib/vars';
import LoadMore from './LoadMore';
import Card from './Card';

const API_KEY = process.env.API_KEY;

async function getBooks( filters: FilterProps ) {
    const {q, startIndex} = filters;
    // const API_KEY = "AIzaSyCCTTDDIA16TuouhGsfn-ANBuUPUgiM-Ck";
    const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=${maxResult}&langRestrict=en`);
    const data = await res.json();

    //     if (!data) {
    //     return {
    //         notFound: true, 
    //     }
    // } 
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    } 

    
    return data.items;
}

// export async function getStaticProps() {
//     // const API_KEY = "AIzaSyCCTTDDIA16TuouhGsfn-ANBuUPUgiM-Ck";
//     const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=Subject:${categories[0]}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=${maxResult}&langRestrict=en`)

//     const receivedData = await res.json();

//     return {
//         props: {
//             data: receivedData.items,
//         }
//     }
// }


export default async function BooksList({ searchParams }: BooksListProps) {
    // export default async function BooksList({ data }) {

    const books = await getBooks({ 
        q: searchParams.q || "Architecture",
        startIndex: +searchParams.startIndex || 0,
    });


  return (
    
   
        <>
                <div className="bookshop__el output grid grid-cols-[repeat(auto-fill,_424px)] grid-rows-[repeat(auto-fill,_300px)] col-start-3 col-end-5 row-start-2 row-end-4 gap-x-[76px] gap-y-24">

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
        }

        const { id, title, authors, img, description, rating, review, categories, saleability, price, currency } = bookItem;
        return (
            <div className="output__card flex" key={id}>
                <Card id={id} img={img} authors={authors} title={title} rating={rating} review={review} description={description} saleability={saleability} price={price} currency={currency} />
                        {/* <div className="card__cover flex-[0_0_50%] ">
                            <Image src={bookItem.img} alt={bookItem.img} width={212} height={300} className='w-[212px] h-[300px] shadow-[0_24px_36px_rgba(53,49,84,0.28)]'/>
                        </div> 
                        <div className="card__text flex flex-[0_0_50%] flex-col justify-center pl-9">
                            <div className="card__text-author font-openSans text-[10px]/[13.62px] text-[#5C6A79] pb-1">{bookItem.authors}</div>
                            <div className="card__text-title text-base/[19.5px] text-[#1C2A39] pb-1">{bookItem.title}</div>
                            {bookItem.rating && bookItem.rating > 0 
                                ? <div className="card__text-rating flex items-center text-[10px]/[13.62px]"> 
                                    <div className="rating__icons">
                                        <div className="rating__active"></div>
                                    </div>
                                    <div className="rating__text text-[#5C6A79] font-openSans pl-1.5">{bookItem.review} review</div>
                                </div>
                                : ""}
                                
                            {bookItem.description && <div className="card__text-summary py-4 font-openSans text-[10px]/[13.62px] text-[#5C6A79]"><p className='line-clamp-3'>{bookItem.description}</p></div>}
                            {bookItem.saleability === "FOR_SALE" 
                            ? <div className="card__text-price text-[13px]/[15.85px] text-[#1C2A39] pb-4"> {bookItem.price} {bookItem.currency}</div>
                            : ""}
                            <button className="card__text-btn w-full h-11 text-[#4C3DB2] border border-[#4C3DB2] text-[8px]/[10px] uppercase" onClick={() => handleClickCart(bookItem.id)}>buy now</button>
                        </div> */}
                    </div>
        )
     })
   }
    </>
                           
                </div>

                <LoadMore 
                    pageNumber={((+searchParams.startIndex + maxResult) || 6) / 6}
                    isNext={((+searchParams.startIndex + maxResult) || 6) > books.length} />
                {/* <button className="bookshop__el loadMore col-start-3 col-end-5 row-start-4 row-end-5 w-44 h-11 justify-self-center mt-24 text-[8px]/[9.75px] uppercase text-[#4C3DB2] border border-[#4C3DB2]"
                >Load more</button> */}

       
</>

  )
}

