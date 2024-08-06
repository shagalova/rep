"use client"

import Image from "next/image"
import ArrowRight from "./ArrowRight"
import React, {FC, ReactElement, useEffect, useState } from "react"
import data, { ISliderImage } from "@/lib/data"
import Link from "next/link"

const Slider:FC = () => {

    const [sliderImages, setSliderImages] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dotIndex, setDotIndex] = useState(0);

    useEffect(() => {

        setDotIndex(currentIndex)

    },[currentIndex])

    useEffect(() => {
        const lastIndex = sliderImages.length - 1

        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }

        if (currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    },[currentIndex, sliderImages])

    useEffect(() => {
        let slider = setInterval(() => setCurrentIndex( prevState => prevState + 1), 5000);
        return () => {
            clearInterval(slider);
        }
    }, [currentIndex])

  return (
    <div className="max-width">
        <section className="slider">
            <div className="slider__images">
           
    <>
                {sliderImages.map((sliderImage: ISliderImage, imageIndex: number) => {
                    const { id, image, alt } = sliderImage;

                    let position = "nextSlide";

                    if (imageIndex === currentIndex) {
                        position = "active";
                    }

                    if (imageIndex === currentIndex -1 || (currentIndex === 0 && imageIndex === sliderImages.length - 1)) {
                        position = "lastSlide";
                    }

                    return (
                        
                        // <Image src={image} alt={alt} fill priority={true} className={`slider__img ${position}`} key={id} />
                        <Image src={image} alt={alt} width={1120} height={702} priority={true} className={`slider__img ${position}`} key={id} />
                        
                    )
                })}
    </>
            </div>
            
            <div className="text-lg/[22px] xl:text-sm/[18px] uppercase p-5 xl:p-2.5 content-end shadow-[0_24px_36px_rgba(53,49,84,0.28)] col-start-2 lg:col-start-[unset] col-end-5 lg:col-end-[unset] row-start-2 lg:row-start-[unset] row-end-3 lg:row-end-[unset] bg-[#9E98DC] z-10 lg:hidden">
                <Link href="/">
                    <p className="text-[#1C2A39]">Change old book on new</p>
                    <ArrowRight />
                </Link>  
            </div>
            
            <div className="text-lg/[22px] xl:text-sm/[18px] uppercase p-5 xl:p-2.5 content-end shadow-[0_24px_36px_rgba(53,49,84,0.28)] col-start-4 lg:col-start-[unset] col-end-6 lg:col-end-[unset] row-start-4 lg:row-start-[unset] row-end-5 lg:row-end-[unset] bg-[#FF8FE6] pr-12 xl:pr-2.5 lg:hidden">
                <Link href="/">
                    <p className="text-[#1C2A39]">top 100 books 2022</p>
                    <ArrowRight />
                </Link>
            </div>
            <div className="slider__dots">
            
                
                <>
                    {sliderImages.map((slidreImage:ISliderImage, imageIndex: number) => {
                        
                        let position = "";

                        imageIndex === currentIndex ? position = "active": ""
                            
                        const handleClickSlider = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                            e.preventDefault();

                            setCurrentIndex(imageIndex)

                        }
                        return (
                            <div className={`slider__dots-item ${position}`} onClick={handleClickSlider} key={imageIndex}></div>
                        )
                    }) 

                    
                }
                </>
            </div>
        </section>
    </div>
  )
}

export default Slider