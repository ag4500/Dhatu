import React, { useState } from 'react'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Breadcrumb from './breadcrumb';
import Counter from './counter';
import CounterButton from './counter';
import Reviews from './Reviews';
import { Footer, ProductCard } from './landingPage';
import Modal from './modal';
import Drawer from './drawer';

function ProductPage() {
    const [isModal, setIsModal] = useState(false);
    const [drawerOpen,setDrawerOpen]=useState(false);
    const handleModal = () => {
        setIsModal(!isModal);
    };
    const handleDrawer=()=>{
        
            setDrawerOpen(!drawerOpen);
        
    }
    console.log(isModal)
    return (

        <div className='px-4 sm:px-6 lg:px-28 py-9'>
            <div className="flex flex-wrap gap-6 h-full">
                <div className="flex flex-wrap gap-3 flex-col">{Array.from({ length: 4 }).map((_, idx) => <div key={idx} className="overflow-hidden bg-[#F7F7F7] h-20 sm:h-28 w-28 flex items-center justify-center">
                    <img
                        className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm-mx-9"
                        src={require('./bigOne.png')}
                        alt="Product Image"
                    />
                </div>)}</div>
                <div className="w-[515px] h-[516px]">
                    <div className="overflow-hidden bg-[#F7F7F7] flex items-center justify-center h-full">
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
                    <div className='flex gap-6 font-poppins mt-7'>

                        <CounterButton />
                        <button onClick={handleDrawer} className="text-base  border border-[#242424] text-[#242424] font-normal py-2 px-6  hover:text-white transition duration-300">
                            Add to Cart
                        </button>
                    </div>
        {drawerOpen&&<Drawer toggleDrawer={handleDrawer} drawerOpen={drawerOpen}/>}
                </div>
            </div>
            {/* Review Section */}
            {isModal && <Modal isOpen={isModal} toggleModal={handleModal}/>}
            <div>
                <Reviews />
            </div>
            {/* Related Products */}
            <div>
                <h5 className='text-4xl	font-cinzel'>Related Products</h5>
                <div className='flex flex-wrap gap-6 my-6'>
                    {Array.from({ length: 4 }).map((i) => <ProductCard handleModal={handleModal} />)} </div>
            </div>

        </div>

    )
}

export default ProductPage