import React from 'react';
import DashBord from '../Components/DashBord';

const RightSide = () => {
    return (
        <>
            <h1 rel="noopener noreferrer" href="#" className="font-semibold text-2xl text-center shadow bg-gray-900 mb-2 py-2">All Group Members</h1>
            <div className="drawer drawer-mobile">

                <input id="Rightdrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* <div className="header flex w-[100%] justify-between mt-[80px] fixed top-2">
                        <label htmlFor="Rightdrawer" className=" drawer-button lg:hidden ml-2 flex "><span className='text-[18px] text-bold'>Drawer</span>  <span className='mt-2'></span></label>

                        <h1 className='text-[18px] text-bold pr-5 lg:hidden'>All Presents</h1>
                    </div> */}
                </div>

                <div className="drawer-side">
                    <label htmlFor="Rightdrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content w-[280px] block">
                        <div className="flex justify-between mt-[55px] relative">
                            <h1></h1>
                            <label htmlFor="Rightdrawer" className="text-3xl  drawer-button lg:hidden absolute right-0 pr-3 pt-1 text-red-600"></label>
                        </div>
                        <DashBord></DashBord>
                    </ul>

                </div>

            </div>
            {/* <div class="relative  overflow-auto ">
                <div className='h-[100vh]'>

                    <div class="overflow-auto h-72 relative  mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5  flex flex-col dark:divide-slate-200/5">

                        <div class="flex items-center gap-4 p-4">
                            <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                            <div class="flex flex-col">
                                <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                                <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4">
                            <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                            <div class="flex flex-col">
                                <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Debra Houston</strong>
                                <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Analyst</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4">
                            <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                            <div class="flex flex-col">
                                <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Jane White</strong>
                                <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Director, Marketing</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4">
                            <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                            <div class="flex flex-col">
                                <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Ray Flint</strong>
                                <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Technical Advisor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default RightSide;