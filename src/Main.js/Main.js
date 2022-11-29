import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Messanger-Page/LeftSide';
import RightSide from '../Messanger-Page/RightSide';
import Navbar from './Navbar';

const Main = () => {
    return (
        <>
            <div className="h-[92vh] w-[100%]">
                <Navbar />
                <div className="container w-[100%] h-[92vh] flex mt-[65px]" >

                    <div className="lg:w-[20%] ">
                        <LeftSide />
                    </div>
                    <div className="lg:w-[60%] mx-auot">
                        <Outlet></Outlet>
                    </div>
                    <div className="lg:w-[20%] ">
                        <RightSide />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Main;