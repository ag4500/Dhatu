import React, { useState } from 'react'
import StarRating from './starRating'

function Reviews() {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <div className='my-14 flex  gap-9 md:flex-row flex-col'>
            <span className='w-full md:max-w-44 font-cinzel text-3xl'>Reviews (0)</span>
            <div className='w-full'>
                <p className='text-base	font-poppins text-[#606060] mb-3'>There are no reviews yet.</p>
                <div className=" px-7 py-6 border border-gray-300   gap-6 flex flex-col">
                    <h5 className='text-xl text-[#242424] font-poppins font-normal'>Add a Review</h5>
                    <div className='flex gap-6 items-center'>

                    <p className='text-base text-[#242424] font-poppins font-normal'>Your rating*</p>      
                    <StarRating/>
                    </div>
                    <div>
                        <p className='text-base text-[#242424] font-poppins font-normal'>Your review*</p>
                        <textarea className="mt-1 block w-full border border-zinc-300 rounded-md text-base text-[#242424] font-poppins font-normal py-2 px-3" rows="4" placeholder="Tell us what you think about this product."></textarea>

                    </div>
                    <div className='flex gap-4'>
                        <label className="block mt-4 w-full">
                            <span className="text-base text-[#242424]">Name*</span>
                            <input type="text" className="p-2 text-base block w-full border border-zinc-300 rounded-md" placeholder="e.g. John Diego" />
                        </label>
                        <label className="block mt-4 w-full">
                            <span className="text-base text-[#242424]">Email*</span>
                            <input type="email" className="p-2 text-base block w-full border border-zinc-300 rounded-md" placeholder="er.john@abc.com" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <input type="checkbox" id="save-name" />
                        <label htmlFor="save-name" className="ml-2 text-[#606060] text-base">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <button type="submit" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 p-2  border border-[#242424] w-36">
                        SUBMIT
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Reviews