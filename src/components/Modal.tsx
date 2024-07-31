

import React, { FC, ReactNode}from 'react'


interface ModalProps {
    isVisible: boolean;
    children: ReactNode   

}
const Modal: FC<ModalProps> = ({ isVisible, children })  => {
    if ( !isVisible ) return null;

  return (
    <div className='absolute -left-[120px] -bottom-[342px] bg-white shadow-[0_4px_4px_#00000040]'>
        <div className='w-[241px] h-[312px]'>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Modal