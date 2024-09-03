import React, { useEffect, useRef, useState } from 'react';
import CounterButton from './counter';

const Modal = ({ isOpen, toggleModal }) => {
  const modalRef = useRef(null);

  const images = [
    require('./bigOne.png'),
    require('./bigOne.png'),
    require('./bigOne.png'),
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  console.log({ isOpen })
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" ref={modalRef}>
      <div className="bg-white  shadow-lg relative max-w-[1116px] ">
        <button
          className="absolute top-[-0.5rem] right-[-0.5rem] text-gray-600 hover:text-gray-900"
          onClick={toggleModal}
        >
          <div className="bg-[#242424] rounded-full p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
        </button>

        {/* Modal Body */}
        <div className="flex flex-wrap gap-6 h-full">
          <div className="max-w-screen-md relative group">
            {/* Image Container */}
            <div className="rounded-lg shadow-lg overflow-hidden bg-[#F7F7F7] flex items-center justify-center h-full relative">
              <img
                className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm:mx-9"
                src={images[currentImage]}
                alt="Product Image"
              />
              {/* Dots Positioned at the Bottom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${currentImage === index ? 'bg-[#1e222e]' : 'bg-[#76777f]'
                      }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:max-w-[550px] sm:max-w-36 flex gap-4 flex-col mt-5">
            <p className="font-poppins text-base text-[#606060]">Category</p>
            <h3 className="text-4xl font-normal font-cinzel">Product Name 1</h3>
            <p className="text-2xl font-medium text-[#A86E3B]">
              ₹ 580 <span className="text-base font-light text-[#606060]">& Free Shipping</span>
            </p>
            <p className="text-base text-[#606060]">
              Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at volutpat arcu lacinia. Aliquam id ullamcorper augue. Fusce feugiat nibh et nisl mollis hendrerit. Mauris sit amet nulla in augue laoreet lobortis ac eleifend nunc. Quisque eleifend sollicitudin nulla, et consequat eros. Donec pellentesque dapibus massa ut cursus.
            </p>
            <p className="text-base text-[#606060]">
              Quisque ut augue eu dui semper eleifend. Aliquam imperdiet nisl libero, vitae vulputate lectus fringilla eget.
            </p>
            <hr />
            <p className="text-base text-[#606060] mb-24">Category: Category Name</p>
            <div className="flex gap-6 font-poppins mb-5">
              <CounterButton />
              <button className="text-base border border-[#242424] text-[#242424] font-normal py-2 px-6 hover:text-white transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
