import React, { useState } from 'react';
import CounterButton from './counter';

const Drawer = ({ toggleDrawer, drawerOpen }) => {

  return (
    <div>

      <div
        className={`fixed top-0 right-0 h-full w-11/12 max-w-[445px] bg-white text-black transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between px-5 pt-6 pb-8 border-b border-gray-700">
          <h2 className="text-[16px] font-normal">Shopping Cart</h2>
          <button onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="border-b border-[#D9D9D9]"></div>

        <div className="flex flex-row gap-4 flex-grow p-4">
          <div className="overflow-hidden bg-[#F7F7F7] w-24 h-24 flex items-center justify-center">
            {/* sm:h-[413px]  */}
            <img
              className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm-mx-9"
              src={require('./bigOne.png')}
              alt="Product Image"
            />

          </div>
          <div className='w-full flex flex-col gap-3'>

          <div className='flex  justify-between'>
            <p className='text-base font-normal font-poppins'>Product Name</p>
            <div className="border-[#606060] border rounded-full p-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#606060]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
           
          </div>
          <div className='flex justify-between'>
            <CounterButton />
            <p>₹ 580</p>

          </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-700">
          {/* <button
            onClick={toggleDrawer}
            className="w-full p-2 bg-blue-600 text-white rounded"
          >
            Close Drawer
          </button> */}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${drawerOpen ? 'block' : 'hidden'} z-30`}
        onClick={toggleDrawer}
      />
    </div>
  );
};

export default Drawer;
