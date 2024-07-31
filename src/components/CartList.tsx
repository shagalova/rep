import {FC} from 'react'
import Image from 'next/image'
import { IBook, IBookInCart } from '@/lib/data'

interface CartListProps {
    items: IBookInCart[];
    increaseCount: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"]) => void;
    decreaseCount: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IBookInCart["id"], count: IBookInCart["count"]) => void;

}

const CartList:FC<CartListProps> = ({items, increaseCount, decreaseCount}) => {
  return (
    <>
            <h2 className="text-2xl/[29.26px] text-[#1C2A39]">SHOPPING CART</h2>

            <div className="wrapper w-full flex flex-col gap-x-6">
            
                <header className="w-full flex flex-row flex-between text-[#5C6A79] text-[10px]/[12.19px] pb-[30px] ">
                    <div className='w-[30%] px-2'>ITEM</div>
                    <div className='w-[16%] px-2'>QUANTITY</div>
                    <div className='w-[11%] px-2'>PRICE</div>
                    <div className='w-[16%] px-2'>DELIVERY</div>
                </header>
                     

                    {items.map((item) => (
                        <div key={item.id} className='cartList w-full flex-between flex-row pb-20'>
                            <div className='book flex w-[30%] gap-x-6'>
                                <div className='cover  relative flex-[0_0_102px] min-h-[145px] shadow-[0_24px_36px_rgba(53,49,84,0.28)]'>
                                <Image src={item.img} alt="defaultCover"  fill sizes="max-width: 102px" className=""></Image>
                                </div>
                                <div className='text flex-[0_0_176px] flex flex-col justify-center'>
                                    <div className='book-title text-[#1C2A39] text-base/[19.5px] pb-2'>{item.title}</div>
                                    <div className='book-author text-[#5C6A79] font-normal text-[10px]/[13.62px] pb-2'>{item.authors}</div>
                                    {item.rating && item.rating > 0 
                                    ?
                                    <div className="card__text-rating flex items-center text-[10px]/[13.62px] pb-2">
                                        <div className="rating__icons">
                                            <div className="rating__active"></div>
                                        </div>
                                        <div className="rating__text font-['Open_Sans'] text-[10px]/[13.62px] pl-[6px] text-[#5C6A79]">
                                        <span>{item.review}</span> reviews
                                        </div>
                                    </div>
                                    : ""}
                                </div>
                            </div>

                            <div className='control-box flex-between flex-row  w-[16%] h-11 p-3  border border-[#EEEDF5]'>
                                <button className='cursor-pointer border-none' onClick={(e) => decreaseCount(e,item.id, item.count)}>
                                    <Image src="/minus.png" alt='minus' width={22} height={25} className='object-fill' />
                                </button>
                                <div className='text-[#5C6A79] text-base/[19.5px]'>{item.count}</div>
                                <button className='cursor-pointer border-none' onClick={(e) => increaseCount(e, item.id)}>
                                    <Image src="/plus.png" alt='plus' width={21} height={24} className='object-fill'/>
                                </button>
                            </div>

                            <div className='text-[#1C2A39] w-[11%] text-lg/[21.94px] px-2'>$<span>{item.price && Math.round((item.price * item.count)*100)/100}</span></div>
                            <div className='text-[#5C6A79] w-[16%] text-xs/[14.63px] px-2'>Shipping: delivery</div>
                        </div>
                    ))}

</div>


        </> 
  )
} 

export default CartList