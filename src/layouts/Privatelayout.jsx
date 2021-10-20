import React from 'react'
import PrivateRoute from '../components/PrivateRoute';
import Sidebar from '../components/Sidebar';
import SidebarResponsive from '../components/SidebarResponsive.jsx';


const Privatelayout = ({children}) => {
    return (
        <PrivateRoute>
    <div className="flex w-screen h-screen">
            <div className="flex flex-col md:flex-row flex-nowrap h-full w-full">
                <Sidebar />
                <SidebarResponsive />
                <main className="flex w-full bg-white overflow-y-scroll">
                    {children}
                </main>
            </div>
        </div>
        </PrivateRoute>       
    );
} 

export default Privatelayout
