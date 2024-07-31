import { BooksList, Categories, LoadMore, Slider } from "@/components";
import { categories, HomeProps } from "@/lib/data";
import { maxResult } from "@/lib/vars";
import Image from "next/image";
import { MouseEvent, MouseEventHandler, ReactNode, Suspense } from "react";







export default async function Home({searchParams}: HomeProps) {

  
  
  return (
    <main className="overflow-hidden">
      <Slider />

      <div className="container-lib w-full">
      <section className="bookshop grid grid-cols-[160px_196px_60px_1fr_160px] grid-rows-[46px_1fr_1fr_120px] mb-20">
            <div className="bookshop__el bg grid grid-cols-[160px_196px_60px] grid-rows-[46px_1fr_60px] col-start-1 col-end-4 row-start-1 row-end-3 bg-[#EFEEF6]">
              <Categories categories={categories} />
            </div>
      {/* <Suspense fallback="Loading..."> */}
        <BooksList searchParams={searchParams} />  
      {/* </Suspense> */}
      
      
        </section>
      </div>
    </main>
  );
}
