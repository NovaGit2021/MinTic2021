
import Logo from "../media/logo.png";
import React from 'react'



const Authlayout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-7 lg:px-9'>
            <div className='flex w-full'>{children}</div>
        </div>
    );
};
        


export default Authlayout
