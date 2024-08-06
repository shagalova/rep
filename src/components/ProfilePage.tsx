import {FC} from 'react'
import Image from 'next/image'

const ProfilePage:FC = () => {
  return (
    <div className='max-width'>
        <div className="flex justify-between pt-[87px] px-40 xl:px-20 lg:flex-col">
                <div className="profile">
                    <h2 className="text-2xl/[29.26px] text-left text-[#1C2A39]">PROFILE</h2>
                    <div className="profile2 flex gap-x-4">
                        <Image src="/profile-img.png" alt="defaultPhoto" width={235} height={235} className="object-cover"></Image>
                        <div className="right">
                            <h4 className="text-xs/[14.63px] pb-2">YOUR NAME</h4>
                            <p className="text-2xl/[29.26px] pb-6">John Smith</p>
                            <h4 className="text-xs/[14.63px] pb-2">YOUR EMAIL</h4>
                            <p className="text-2xl/[29.26px] pb-10">example@mail.com</p> 
                            <button className="w-44 text-[#4C3DB2] border-[#4C3DB2] border focus:outline-none text-[8px]/[9.75px] py-[18px] text-center">
                            EDIT PROFILE
                            </button>
                        </div>
                    </div>
                </div>
                <article className="bg-[#FFE0E2] shadow-[0px_24px_36px_0px_#35315447] pt-4 lg:mt-10 lg:mx-auto px-7 max-w-[353px] text-xs/[14.63px]">
                    <h2 className="text-center">ABOUT ME</h2>
                    <p className="py-7 text-[#5C6A79] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat, 
    ornare nisi et, ultrices libero. Nunc nibh dolor, maximus quis auctor nec, tempor 
    quis ipsum. Proin mollis pellentesque nulla ac varius.</p>

                </article>
            </div>
        </div>
  )
}

export default ProfilePage