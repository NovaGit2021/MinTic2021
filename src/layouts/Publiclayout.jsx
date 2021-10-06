import Footer from '../components/Footer';
import React from 'react'
import Navbar from '../components/Navbar'

const publiclayout = ({children}) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <div className="h-full overflow-y-scroll bg-grey-500 ">
                <main className="h-full">{children}</main>
                
            </div>
            <Footer />
        </div>
    );
}

export default publiclayout
