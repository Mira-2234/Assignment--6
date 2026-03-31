import React from 'react';

const badge = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 py-10 mb-5 px-25'>
            <div className='flex justify-around items-center'>
                <div className='text-center text-white'>
                    <h2 className='text-4xl font-bold'>50k+</h2>
                    <p className='text-[#FFFFFF] mt-2'>Active Users</p>
                </div>

                <div className='h-12 w-[2px] bg-white opacity-50'></div>


                <div className='text-center text-white'>
                    <h1 className='text-4xl font-extrabold'>200+</h1>
                    <p className='text-[#FFFFFF]]mt-2'>Premium Tools</p>
                </div>

               <div className='h-12 w-[2px] bg-white opacity-50'></div>

               <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>4.9</h1>
                    <p className='text-[#FFFFFF] mt-2'>Rating</p>
                </div>
            </div>

            
        </div>
    );
};

export default badge;