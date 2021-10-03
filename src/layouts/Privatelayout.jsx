import React from 'react'
import Sidebar from '../components/Sidebar';

const privatelayout = ({children}) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <main className="flex w-full bg-gray-300 overflow-y-scroll">{children}</main>
        </div>       
    );
}

export default privatelayout
