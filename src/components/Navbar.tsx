"use client"
import { handleAuth } from "@/app/actions";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";
import {FC, ReactElement, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { USER_EMAIL, USER_PASS } from "@/lib/vars";
import { useAppSelector } from "@/store/hooks";
import { selectCartItemsCount } from "@/store/cartSlice";




const Navbar:FC = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false)
    const [isEmail, setIsEmail] = useState('')
    const [showPasswordError, setShowPasswordError] = useState(true)
    const [isPass, setIsPass] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const ref = useRef<HTMLFormElement>(null)

    const basketCount = useAppSelector(selectCartItemsCount);


    const handleClickProfile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.PointerEvent<ReactElement>) => {
        e.preventDefault();
        
            if (showModal === false) {
            setShowModal(true)
        } else {
            
           
            return
        }
        
       
    }

    // const handlePasswordError = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     if (e.target.value.length < 6) {
    //         setShowPasswordError(true)
    //         e.target.classList.add("invalid")
    //     } else {
    //         setShowPasswordError(false)
    //         e.target.classList.remove("invalid")
    //     }
        

    // }

    // const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault();
        
    //     if ( showModal && isEmail && !showPasswordError) {
    //         setShowModal(false);
    //         // setIsEmail(false);
    //         setShowPasswordError(true);
    //         router.push("/profile");
    //     } else return
        
    // }

    const handleAuthenticate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
       
    //     let userEmail = isEmail === USER_EMAIL 
    //     let userPass = isPass === USER_PASS 
    //     console.log(isEmail, USER_EMAIL, isPass, USER_PASS)
    //     try {
    //         let res = await Promise.all([userEmail, userPass])
    //               if (res) {
    //                 router.push("/profile")
    //               }      
    //         return res
    //    } catch(err) {
    //     alert("Login failed. Please try again")
    //    }

        if(isEmail === USER_EMAIL && isPass === USER_PASS) {
            setShowModal(false);
            router.push("/profile")
        } else {
            alert("Login failed. Please try again")
        }



        
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // if (e.target.value === process.env.USER_EMAIL) {
            setIsEmail(e.target.value)
        // }
    }

    const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // if (e.target.value === process.env.USER_PASS) {
        //     setHasPass(prev => !prev)
        // } else 
        
        if(e.target.value.length < 6) {
                    setShowPasswordError(true)
                    e.target.classList.add("invalid")
                } else {
                    setShowPasswordError(false)
                    e.target.classList.remove("invalid")
                    setIsPass(e.target.value)
                }
    }

    const handleClickCart = () => {
        router.push("/cart");
    }
    
  return (
    <header className="w-full  fixed top-0 left-0 right-0 bg-white z-20">
        <div className="max-width flex-between pt-12 xl:py-5 lg:py-3 px-40 xl:px-20 lg:px-12 pb-10">
            <Link href="/">
            <div className="text-2xl/[29px] lg:text-lg/[23px] text-[#1C2A39] w-[15%]">Bookshop</div>
            </Link>
            <nav className="text-[10px]/[12px] uppercase w-[70%] flex-center">
                <Link href="/" className="header__menu-item activeText">books</Link>
                <Link href="/" className="header__menu-item">audiobooks</Link>
                <Link href="/" className="header__menu-item">Stationery & gifts</Link>
                <Link href="/" className="header__menu-item">blog</Link>
            </nav>   
            <div className="min-w-[120px] lg:min-w-[70px] flex-between w-[15%]">
                <button className="w-[15px] lg:w-[10px] h-[17px] lg:h-[10px] relative" onClick={handleClickProfile}>
                    <Image src="/user.png" alt="user" fill sizes="max-width: 15px" className="" />
                    <Modal isVisible={showModal}>
                        <div className="py-4 px-3 text-left">
                            <h3 className="mb-[14px] text-base/[19.5px] text-[#1C2A39] text-center">Log in</h3>
                            <form 
                            ref={ref}
                            action={async() => { 
                                ref.current?.reset();
                                await handleAuth}}>
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
                                        onChange={handleEmail}
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
                                        onChange={handlePass}

                                        />        
                                </div>
                                <div className="text-[#FF353A] text-[8px]/[9.75px] text-left mb-10">
                                    {showPasswordError && <p>Your password must be at least 6 characters long</p>}
                                </div>
                                <div className="ml-4 mr-7">
                                    <button 
                                        type="submit"
                                        className="w-full text-white bg-[#9E98DC] border-0 focus:outline-none text-sm/[17.07px] py-2 text-center" 
                                        onClick={handleAuthenticate}
                                        >
                                            LOG IN
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </Modal>    
                </button>
                <button className="w-[15px] lg:w-[10px] h-[17px] lg:h-[10px] relative" onClick={handleClickCart}>
                    <Image src="/shop-bag.png" alt="shop-bag" fill sizes="max-width: 15px" className="" />
                    <div className={basketCount <= 0 ? `hidden` : `absolute right-[-5px] bottom-[-5px] rounded-full bg-[#FF353A] w-[13px] lg:w-[10px] h-[13px] lg:h-[10px] text-[10px]/[12px] font-medium text-white`}>{basketCount}
                    </div>    
                </button>
            </div>
        </div>    
    </header>
    )
}

export default Navbar