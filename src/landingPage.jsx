import React from 'react'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const sharedClasses = {
    primaryColor: 'bg-[var(--primary)]',
    primaryColorForeground: 'text-[var(--primary-foreground)]',
    inputColor: 'bg-[var(--input)]',
    cardColor: 'bg-[var(--card)]',
    cardColorForeground: 'text-[var(--card-foreground)]',
    secondaryColor: 'bg-[var(--secondary)]',
    secondaryColorForeground: 'text-[var(--secondary-foreground)]',
    mutedColor: 'bg-[var(--muted)]',
    mutedColorForeground: 'text-[var(--muted-foreground)]',
}

const HeroSection = () => {
    return <div className="relative w-full max-w-full mx-auto">
        {/* Image */}
        <img
            src={require('./Group_1.png')} // Replace with your image URL
            alt="Hero"
            className="w-full h-[210px] sm:h-[572px] object-cover"
            style={{ maxHeight: '572px' }}
        />

        {/* Overlay Text */}
        <div className="opacity-100 text-[#242424] px-4 sm:px-[103px] absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
            <div
                className="w-full"
                style={{ gap: '0px', maxWidth: "453px", maxHeight: "136px" }}
            >

                <h1 className="font-cinzel font-normal text-left mb-4 text-base sm:text-[48px] sm:leading-[68px] sm:font-cinzel">
                    Taste the difference!
                </h1>

            </div>
            <p
                className="font-poppins text-sm  text-left mb-[6px] sm:text-[18px] font-light sm:leading-[27px] sm:my-12 w-[200px]  sm:max-w-[641px] sm:w-full"
            // style={{
            //     maxWidth: '641px',
            //     // maxHeight: '54px',
            //     // marginTop: '51px',
            //     // marginBottom: '51px',
            //     width:'100%'
            // }}
            >
                Experience the essence of Indian cuisine. Enhance your cooking
                experience with the authentic flavors of Indian cuisine.
            </p>
            <button
                className="text-xs h-6 w-24 sm:w-32 sm:h-11 sm:text-xl flex items-center justify-center border-[#242424] border text-[#242424] font-poppins text-[16px] font-normal leading-[24px]"
                style={{
                    // maxWidth: '127px',
                    // height: '44px',
                    gap: '24px',
                    // width:'100%'
                }}
            >
                <span
                    className=''
                    style={{
                        maxWidth: '87px',
                        height: '24px',
                        gap: '0px',
                    }}
                >
                    SHOP
                </span>
            </button>
        </div>

    </div>

}

const MetalButtons = () => {
    let metalName = ["Brass", "Copper", "Bronze", "Clay"]
    return <div className="mt-8 text-[#242424]">
        <p className='text-[#787878] font-poppins text-xs mb-2 sm:mb-auto sm:text-[16px] font-normal sm:leading-[60px] text-center'>Shop By</p>
        <p className="font-cinzel text-2xl sm:text-[38px] font-normal sm:leading-[60px] text-center">
            METALS
        </p>

        <div className='flex flex-wrap flex-col items-center justify-center'>
            <div
                className="border-t border-[#421D0A] my-sm-7 my-4 w-[51.5px]"
                style={{
                    // width: '51.5px',
                    height: '0px',
                    gap: '0px',
                }}
            />
            <div className='flex flex-wrap gap-2 gap-sm-9 px-2 justify-center'>  {metalName.map((i, idx) =>
                <button
                    key={idx}
                    className="border border-[#D9D9D9] w-sm-[246px] h-sm-24 px-2 py-2 py-sm-0 px-sm-0 sm:p-[22px_20px]"
                >
                    {i}
                </button>)}</div>

        </div>

    </div>

}
const cardClasses = 'max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden bg-[#F7F7F7] h-[413px]'
const imageClasses = 'w-full object-cover'
const titleClasses = 'text-lg font-semibold text-foreground'
const priceClasses = 'text-xl font-bold text-primary'
const ratingClasses = 'text-yellow-500'
const reviewClasses = 'text-muted-foreground'

export const ProductCard = () => {
    return (
        <div className="max-w-sm relative group">
            <div className="rounded-lg shadow-lg overflow-hidden bg-[#F7F7F7] sm:h-[413px] flex items-center justify-center">
                <img
                    className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm-mx-9"
                    src={require('./Group_4.png')}
                    alt="Product Image"
                />
                {/* Icons appear on hover */}
                <div className="absolute top-0 h-full w-full flex flex-wrap flex-col items-end justify-start gap-3 m-3  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                    <div className='text-gray-800 rounded-full bg-[#FFFFFF] w-10 h-10 flex items-center justify-center'>

                        <MdOutlineRemoveRedEye className=""
                            size={15} />
                    </div>
                    <div className='text-gray-800 rounded-full bg-[#FFFFFF] w-10 h-10 flex items-center justify-center'>

                        <FaShoppingCart className=""
                            size={15} />
                    </div>

                </div>
            </div>

            <div className="p-4">
                <p className="font-poppins text-sm sm:text-[24px] font-light sm:leading-[36px] text-[#242424] text-left">
                    Product Name
                </p>
                <div className="flex justify-between items-center">
                    <p className="font-poppins text-xs sm:text-[20px] font-medium sm:leading-[30px] text-left text-[#242424]">
                        ₹ 580
                    </p>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-2">★ ★ ★ ★ ☆</span>
                        <span className="text-gray-600 text-xs sm:text-[20px] sm:leading-[30px]">(38)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrendingProducts = () => {
    return <div className="sm:mt-24 mt-16 text-[#242424]">
        <p className='text-[#787878] font-poppins text-xs mb-2 sm:mb-auto sm:text-[16px] font-normal sm:leading-[60px] text-center'>Popular Products</p>
        <p className="font-cinzel text-2xl sm:text-[38px] font-normal sm:leading-[60px] text-center">
            Trending Now
        </p>

        <div className='flex flex-wrap flex-col mx-2 sm:mx-20 gap-sm-6 gap-1 items-center'>
            <div
                className="border-t border-[#421D0A] my-7"
                style={{
                    width: '51.5px',
                    height: '0px',
                    gap: '0px',
                }}
            />
            <div className='flex flex-wrap sm:mx-20 gap-6 justify-center'>
                {Array.from({ length: 4 }).map((i) => <ProductCard />)} </div></div>

    </div>
}

const WhyChooseUs = () => {
    let type = [{ image: "HandHeart.png", title: "Handcrafted", des: "Each piece is meticulously handcrafted, showcasing the artistry and dedication of our skilled artisans." }, { image: "Infinity.png", title: "Timeless", des: "Discover the timeless elegance of our utensils, designed to be cherished for generations." }, { image: "SealCheck.png", title: "Authentic", des: "Experience the authentic charm of traditional craftsmanship with our genuine brass, copper, bronze, and clay utensils." }, { image: "FlowerTulip.png", title: "Sustainable", des: "Embrace sustainability with our eco-friendly utensils, crafted from natural and durable materials." }]
    return <div className="mt-12 sm:mt-24 text-[#242424]">
        <p className='text-[#787878] font-poppins text-xs mb-2 sm:mb-auto sm:text-[16px] font-normal sm:leading-[60px] text-center'>Best in Business  </p>
        <p className="font-cinzel text-2xl sm:text-[38px] font-normal sm:leading-[60px] text-center">
            Why Choose Us
        </p>
        <div className="flex flex-wrap justify-center items-center my-3 sm:my-7">

            <div
                className="max-w-full h-sm-[40px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[80px] text-center"
                style={{
                    width: '100%', // Use 100% to be responsive and fill the parent container
                    maxWidth: '1141px', // Set maximum width to 1141px
                }}
            >

                <p className="font-cinzel text-[18px] font-normal sm:leading-[40px] text-center text-[#242424]">
                    Experience timeless tradition with our copper, brass, bronze and Clay utensils, blending heritage and modern culinary art.
                </p>
            </div>
        </div>
        <div className='flex flex-wrap flex-col items-center justify-between'>
            <div
                className="border-t border-[#421D0A] my-7"
                style={{
                    width: '51.5px',
                    height: '0px',
                    gap: '0px',
                }}
            />
            <div className='flex flex-wrap gap-10 justify-center w-full pb-[50px] mx-sm-4 px-2 px-sm-0 sm:m-[unset]'>
                {type.map((i, idx) =>
                    <div key={idx} className="gap-10 sm:w-[100%] md:w-[400px] lg:w-[287px] "
                        style={{
                            height: 'auto', // Height adjusts based on content
                        }}
                    >
                        <div className='flex w-full justify-center sm:block'>
                            <img src={require(`./${i.image}`)} className='' />
                        </div>
                        <div className='py-4'>
                            <p className="sm:text-left text-center font-cinzel text-[14px] sm:text-[24px] font-normal sm:leading-[40px]  text-[#242424]">
                                {i.title}</p>
                        </div>
                        <div className=''>
                            <p className="font-poppins capitalize text-[14px] sm:text-[16px] font-normal sm:leading-[28px] sm:text-left text-center text-[#242424]">
                                {i.des}</p>
                        </div>
                    </div>
                )}
                <div>

                </div>
            </div>
        </div>
    </div>
}

export const Footer = () => {
    let footer = [{ name: "About Us", val: ["Home", "About", "Contact"] }, { name: "Shop", val: ["Cookware", "Drinkware", "Serveware", "Gifting"] }, { name: "Contact", val: ["contact@dhaatu.com", "826-955-0232"] }, { name: "Address", val: ["T2-A, 605, Sagar lake view homes, Bhopal,    India "] }]
    return <div className="mt-12 sm:mt-24 text-[#242424]  bg-[#faf5f1]  border-[#E1DCD8] py-11" style={{ borderWidth: '1px' }}>

        <div className='flex flex-wrap flex-col items-center justify-between'>

            <div className='flex flex-wrap gap:5 sm:gap-10 justify-center w-full pb-[50px] sm:flex-row flex-col pl-5'>
                {footer.map((i, idx) =>
                    <div key={idx} className="gap-10 sm:w-[100%] md:w-[400px] lg:w-[287px]"
                        style={{
                            height: 'auto', // Height adjusts based on content
                        }}
                    >

                        <div className='py-4'>
                            <p className="font-cinzel text-[24px] font-normal leading-[40px] text-left text-[#242424] capitalize">

                                {i.name}</p>
                        </div>
                        <div className='flex flex-wrap flex-col gap-3'>
                            {i.val.map((j) =>
                                <p className="font-poppins text-[16px] font-normal leading-[28px] text-left text-[#242424]">
                                    {j}</p>
                            )}

                        </div>
                    </div>
                )}
                <div>

                </div>
            </div>
        </div>
        <div className='mx-8'>
            <hr className="border-t border-[#E1DCD8] my-5" />
            <div className='flex flex-wrap justify-between sm:mx-12'>
                <img src={require('./Dhaatu.png')} alt="Logo" className="h-6 sm:h-8" />
                <p className="font-light text-xs leading-8 sm:text-[16px] sm:leading-[28px] text-right text-[#242424]">
                    Copyright © 2024 Dhaatu

                </p>

            </div>
        </div>

    </div>
}

const DhaatuWebsite = () => {
    return (
        <div>
            <HeroSection />
            <MetalButtons />
            <TrendingProducts />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}

export default DhaatuWebsite