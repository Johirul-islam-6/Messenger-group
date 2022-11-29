import React from 'react';

const InputField = () => {
    return (
        <div className='fixed bottom-[8px] w-3/6 mx-auto z-50'>
            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted flex">

                <input type="text" name="text" placeholder="Username" className="w-4/6 mx-auto flex justify-center px-4 py-4 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100  focus:dark:border-violet-400" />

            </form>


        </div>
    );
};

export default InputField;