import React from 'react';
import DashBord from '../Components/DashBord';
import InputField from './InputField';
import './Messanger.css'
import ShowMessageText from './Show-Massage/ShowMessageText';

const Massanger = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100 h-[92vh] w-[100%] shadow2 flex justify-center ">
                <div className="drawer drawer-mobile flex justify-end">

                    <input id="Rightdrawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                    </div>

                    <div className="drawer-side ">
                        <label htmlFor="Rightdrawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 bg-base-100 text-base-content w-[780px] block ">
                            <div className="flex justify-between mt-[-2px] relative">
                                <h1></h1>
                                <label htmlFor="Rightdrawer" className="text-3xl  drawer-button lg:hidden absolute right-0 pr-3 pt-1 text-red-600"></label>
                            </div>
                            <ShowMessageText></ShowMessageText>
                        </ul>

                    </div>

                </div>

            </section>

        </>
    );
};

export default Massanger;