import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
   
      <div 
        className={`fixed top-0 right-0 h-full w-11/12 max-w-[445px] bg-white text-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
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

        <div className="border-b border-gray-700"></div>

        <div className="flex flex-col items-center justify-center flex-grow p-4">
          <p className="text-center">Middle Content Item</p>
        </div>

        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={toggleDrawer}
            className="w-full p-2 bg-blue-600 text-white rounded"
          >
            Close Drawer
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'} z-30`}
        onClick={toggleDrawer}
      />
    </div>
  );
};

export default Drawer;
