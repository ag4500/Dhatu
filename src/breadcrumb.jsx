import React from 'react';

const Breadcrumb = () => {
    return (
        <nav className="flex flex-wrap  font-poppins text-base text-[#606060]" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                    <svg
                        className="w-3 h-3 mx-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l7-7-7-7" />
                    </svg>

                </li>
                <li className="flex items-center">
                    <a href="/category" className="text-gray-600 hover:text-gray-900">Category</a>
                    <svg
                        className="w-3 h-3 mx-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l7-7-7-7" />
                    </svg>

                </li>
                <li className="flex items-center">
                    <span className="text-gray-500">Product Name</span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
