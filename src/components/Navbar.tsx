"use client"
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";
import {FC, ReactElement, useState } from "react";
import { useRouter } from 'next/navigation';
import { handleAuth } from "@/app/actions";



const Navbar:FC = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false)
    const [hasEmail, setHasEmail] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(true)
    



    const handleClickProfile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.PointerEvent<ReactElement>) => {
        e.preventDefault();
        
            if (showModal === false) {
            setShowModal(true)
        } else {
            
           
            return
        }
        
       
    }

    const handlePasswordError = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value.length < 6) {
            setShowPasswordError(true)
            e.target.classList.add("invalid")
        } else {
            setShowPasswordError(false)
            e.target.classList.remove("invalid")
        }
        

    }

    const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        if ( showModal && hasEmail && !showPasswordError) {
            setShowModal(false);
            setHasEmail(false);
            setShowPasswordError(true);
            router.push("/profile");
        } else return
        
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value.trim().length > 0) {
            setHasEmail(true)
        }
    }

    const handleClickCart = () => {
        router.push("/cart");
    }
    
  return (
    <header className="w-full  fixed top-0 left-0 right-0 bg-white z-20">
        <div className="max-width flex-between pt-12 px-40 pb-10">
            <Link href="/">
            <div className="text-2xl/[29px] text-[#1C2A39] w-[15%]">Bookshop</div>
            </Link>
            <nav className="text-[10px]/[12px] uppercase w-[70%] flex-center">
                <Link href="/" className="header__menu-item activeText">books</Link>
                <Link href="/" className="header__menu-item">audiobooks</Link>
                <Link href="/" className="header__menu-item">Stationery & gifts</Link>
                <Link href="/" className="header__menu-item">blog</Link>
            </nav>   
            <div className="min-w-[120px] flex-between w-[15%]">
                <button className="w-[15px] h-[17px] relative" onClick={handleClickProfile}>
                    <Image src="/user.png" alt="user" fill sizes="max-width: 15px" className="" />
                    <Modal isVisible={showModal}>
                        <div className="py-4 px-3 text-left">
                            <h3 className="mb-[14px] text-base/[19.5px] text-[#1C2A39] text-center">Log in</h3>
                            <form action={handleAuth} >
                                <div className="ml-4 mr-7">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-xs/[14.63px] text-black"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        

                                        className="border border-[#4C3DB2]  text-[#4C3DB2] placeholder:text-[#4C3DB2] text-xs/[14.63px] focus:outline-none block w-full p-2.5 mb-4"
                                        placeholder="example.@mail.com"
                                        // onChange={handleEmail}
                                        required
                                        />
                                </div>
                                <div className="ml-4 mr-7">
                                    <label 
                                        htmlFor="password"
                                        className="block mb-2 text-xs/[14.63px] text-black"
                                    >
                                        Password                                    
                                    </label>
                                    <input 
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="************"
                                        minLength={6}
                                        
                                        className="invalid:border-[#FF353A] invalid:text-[#FF353A] border border-[#4C3DB2]  text-[#4C3DB2] placeholder:text-[#FF353A] text-xs/[14.63px] focus:outline-none block w-full p-2.5 mb-2"
                                        required
                                        onInput={handlePasswordError}

                                        />        
                                </div>
                                <div className="text-[#FF353A] text-[8px]/[9.75px] text-left mb-10">
                                    {showPasswordError && <p>Your password must be at least 6 characters long</p>}
                                </div>
                                <div className="ml-4 mr-7">
                                    <button 
                                        type="submit"
                                        className="w-full text-white bg-[#9E98DC] border-0 focus:outline-none text-sm/[17.07px] py-2 text-center" 
                                        // onClick={handleCloseModal}
                                        >
                                            LOG IN
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </Modal>    
                </button>
                <button className="w-[15px] h-[17px] relative" onClick={handleClickCart}>
                    <Image src="/shop-bag.png" alt="shop-bag" fill sizes="max-width: 15px" className="" />
                    <div className="hidden absolute right-[-5px] bottom-[-5px] rounded-full bg-[#FF353A] w-[13px] h-[13px] text-[10px]/[12px] font-medium text-white">0
                    </div>    
                </button>
            </div>
        </div>    
    </header>
    )
}

export default Navbar