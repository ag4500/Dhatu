import React from 'react'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Breadcrumb from './breadcrumb';
import Counter from './counter';
import CounterButton from './counter';
import Reviews from './Reviews';
import { Footer, ProductCard } from './landingPage';

function ProductPage() {
    return (
        <div>
            <div className='px-4 sm:px-6 lg:px-8 py-9'>
                <div className="flex flex-wrap gap-6 h-full">
                    <div className="flex flex-wrap gap-2 flex-col">{Array.from({ length: 4 }).map((_, idx) => <div key={idx} className="rounded-lg shadow-lg overflow-hidden bg-[#F7F7F7] sm:h-28 w-28 flex items-center justify-center h-full">
                        <img
                            className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm-mx-9"
                            src={require('./bigOne.png')}
                            alt="Product Image"
                        />
                    </div>)}</div>
                    <div className="max-w-screen-md relative group">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-[#F7F7F7] flex items-center justify-center h-full">
                            {/* sm:h-[413px]  */}
                            <img
                                className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm-mx-9"
                                src={require('./bigOne.png')}
                                alt="Product Image"
                            />

                        </div>

                    </div>
                    <div className="lg:max-w-[550px] sm:max-w-36 flex gap-4 flex-col">
                        <Breadcrumb />
                        <p className='font-poppins text-base text-[#606060]'>Category</p>
                        <h3 className='text-4xl font-normal	font-cinzel'>Product Name 1</h3>
                        <p className='text-2xl	font-medium text-[#A86E3B]'>₹ 580 <span className='text-base font-light text-[#606060]'>& Free Shipping</span></p>
                        <p className='text-base text-[#606060]'>Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at volutpat arcu lacinia. Aliquam id ullamcorper augue. Fusce feugiat nibh et nisl mollis hendrerit. Mauris sit amet nulla in augue laoreet lobortis ac eleifend nunc. Quisque eleifend sollicitudin nulla, et consequat eros. Donec pellentesque dapibus massa ut cursus.</p>
                        <p className='text-base text-[#606060]'>Quisque ut augue eu dui semper eleifend. Aliquam imperdiet nisl libero, vitae vulputate lectus fringilla eget.</p>
                        <div className='flex gap-6 font-poppins'>

                            <CounterButton />
                            <button className="text-base  border border-[#242424] text-[#242424] font-normal py-2 px-4  hover:text-white transition duration-300">
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
                {/* Review Section */}
                <div>
                    <Reviews />
                </div>
                {/* Related Products */}
                <div>
                    <h5 className='text-4xl	font-cinzel'>Related Products</h5>
                    <div className='flex flex-wrap gap-6 my-6'>
                        {Array.from({ length: 4 }).map((i) => <ProductCard />)} </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default ProductPage