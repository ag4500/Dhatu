import React from 'react'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

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
                className="border-t border-[#421D0A] my-sm-7 my-4 w-[51.5px] "
                style={{
                    // width: '51.5px',
                    height: '0px',
                    gap: '0px',
                }}
            />
            <div className='flex w-full flex-wrap gap-8 sm:gap-9 px-2 justify-center'>  {metalName.map((i, idx) =>
                <button
                    key={idx}
                    className="border border-[#D9D9D9] sm:max-w-[246px] sm:w-full sm:max-h-[104px] px-2 py-2 sm:p-[22px_85px]"
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

export const ProductCard = ({handleModal,onNavigate}) => {
   
    return (
        <div className="lg:max-w-sm sm:max-w-lg relative group" onClick={handleModal?handleModal:onNavigate}>
            <div className="group relative overflow-hidden bg-[#F7F7F7] sm:h-[413px] flex items-center justify-center">
                <img
                    className="w-[50%] sm:w-full sm:max-h-full object-contain m-9 sm:mx-9 transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={require('./Group_4.png')}
                    alt="Product Image"
                />
                {/* Icons appear on hover */}
                <div className="absolute top-0 h-full w-full flex flex-wrap flex-col items-end justify-start gap-3 m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className='text-gray-800 rounded-full bg-[#FFFFFF] w-10 h-10 flex items-center justify-center'>
                        <MdOutlineRemoveRedEye size={15} />
                    </div>
                    <div className='text-gray-800 rounded-full bg-[#FFFFFF] w-10 h-10 flex items-center justify-center'>
                        <FaShoppingCart size={15} />
                    </div>
                </div>
            </div>

            <div className="py-4">
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
    const navigate=useNavigate();
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
            <div className='flex lg:flex-nowrap flex-wrap justify-center gap-6'>
                {Array.from({ length: 4 }).map((i) => <ProductCard onNavigate={()=>navigate('/product')}/>)} 
            </div>
        </div>

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
    return <div className="mt-12 sm:mt-24 text-[#242424]  bg-[#faf5f1]  border-[#E1DCD8] pt-11 pb-7" style={{ borderWidth: '1px' }}>
        <div className='flex flex-wrap flex-col items-center justify-between'>

            <div className='flex flex-wrap gap:5 sm:gap-10 w-full pb-[50px] sm:flex-row flex-col   pl-16'>
                {footer.map((i, idx) =>
                    <div key={idx} className="gap-10 sm:w-[100%] md:w-[400px] lg:w-[287px] "
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
            <div className='flex flex-wrap justify-between'>
                <svg width="151" height="27" viewBox="0 0 151 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M132.055 3.77194V18.0298C132.055 20.4438 132.658 22.3424 133.866 23.7254C135.073 25.1085 136.72 25.8 138.807 25.8C141.12 25.8 142.931 25.1462 144.238 23.8386C145.546 22.531 146.2 20.733 146.2 18.4447V3.77194H148.086V18.3693C148.086 21.0096 147.256 23.0968 145.596 24.6307C143.937 26.1646 141.636 26.9315 138.694 26.9315C135.626 26.9315 133.224 26.1772 131.489 24.6684C129.779 23.1345 128.924 21.0473 128.924 18.407V3.77194H132.055ZM129 3.77194V5.77106H128.924C128.899 5.31843 128.711 4.94124 128.358 4.63948C128.032 4.31258 127.629 4.14913 127.151 4.14913C127.151 4.14913 127.051 4.14913 126.85 4.14913C126.674 4.14913 126.586 4.14913 126.586 4.14913V3.77194H129ZM134.394 3.77194V4.14913C134.394 4.14913 134.293 4.14913 134.092 4.14913C133.916 4.14913 133.828 4.14913 133.828 4.14913C133.375 4.14913 132.96 4.31258 132.583 4.63948C132.231 4.94124 132.055 5.31843 132.055 5.77106H131.98V3.77194H134.394ZM146.275 3.77194V5.77106H146.2C146.2 5.31843 146.024 4.94124 145.672 4.63948C145.32 4.31258 144.892 4.14913 144.389 4.14913C144.389 4.14913 144.301 4.14913 144.125 4.14913C143.949 4.14913 143.861 4.14913 143.861 4.14913V3.77194H146.275ZM150.462 3.77194V4.14913C150.462 4.14913 150.361 4.14913 150.16 4.14913C149.984 4.14913 149.896 4.14913 149.896 4.14913C149.418 4.14913 149.003 4.31258 148.651 4.63948C148.299 4.94124 148.111 5.31843 148.086 5.77106H148.01V3.77194H150.462Z" fill="#242424" />
                    <path d="M115.761 3.88506V26.4034H112.593V3.88506H115.761ZM124.663 3.73418V4.9412H103.691V3.73418H124.663ZM124.663 4.86576V7.80786H124.248V7.27979C124.248 6.60085 124.047 6.04763 123.644 5.62015C123.242 5.19266 122.689 4.96635 121.985 4.9412V4.86576H124.663ZM124.663 3.13068V4.11138L120.514 3.73418C120.991 3.73418 121.507 3.70904 122.06 3.65874C122.638 3.58331 123.166 3.4953 123.644 3.39471C124.122 3.29413 124.462 3.20612 124.663 3.13068ZM112.668 23.9894V26.4034H109.952V26.0262C109.977 26.0262 110.053 26.0262 110.179 26.0262C110.329 26.0262 110.405 26.0262 110.405 26.0262C111.008 26.0262 111.511 25.8251 111.914 25.4227C112.341 25.0204 112.567 24.5426 112.593 23.9894H112.668ZM115.648 23.9894H115.761C115.786 24.5426 116 25.0204 116.402 25.4227C116.83 25.8251 117.345 26.0262 117.949 26.0262C117.949 26.0262 118.012 26.0262 118.137 26.0262C118.288 26.0262 118.364 26.0262 118.364 26.0262V26.4034H115.648V23.9894ZM106.331 4.86576V4.9412C105.652 4.96635 105.112 5.19266 104.709 5.62015C104.307 6.04763 104.106 6.60085 104.106 7.27979V7.80786H103.691V4.86576H106.331ZM103.691 3.13068C103.917 3.20612 104.257 3.29413 104.709 3.39471C105.162 3.4953 105.677 3.58331 106.256 3.65874C106.834 3.70904 107.362 3.73418 107.84 3.73418L103.691 4.11138V3.13068Z" fill="#242424" />
                    <path d="M93.3634 3.13068L103.925 26.1771H100.153L92.3449 7.31751L93.3634 3.13068ZM86.1213 23.7254C85.8447 24.4546 85.8824 25.0204 86.2344 25.4227C86.5865 25.8251 86.9888 26.0262 87.4414 26.0262H87.7432V26.4034H80.4634V26.0262C80.4634 26.0262 80.5137 26.0262 80.6143 26.0262C80.7148 26.0262 80.7651 26.0262 80.7651 26.0262C81.2932 26.0262 81.8338 25.8502 82.3871 25.4982C82.9403 25.1461 83.4055 24.5552 83.7827 23.7254H86.1213ZM93.3634 3.13068L93.5897 6.18593L85.0651 26.2903H82.5757L91.4774 7.16663C91.5025 7.14149 91.5905 6.96546 91.7414 6.63856C91.8923 6.31167 92.0558 5.9219 92.2318 5.46927C92.4329 5.01664 92.609 4.57658 92.7598 4.1491C92.9107 3.72161 92.9987 3.38214 93.0239 3.13068H93.3634ZM97.5502 17.9543V19.1613H87.63V17.9543H97.5502ZM99.1344 23.7254H102.793C103.17 24.5552 103.636 25.1461 104.189 25.4982C104.742 25.8502 105.27 26.0262 105.773 26.0262C105.773 26.0262 105.823 26.0262 105.924 26.0262C106.024 26.0262 106.075 26.0262 106.075 26.0262V26.4034H97.5502V26.0262H97.8519C98.2794 26.0262 98.6692 25.8251 99.0212 25.4227C99.3733 25.0204 99.411 24.4546 99.1344 23.7254Z" fill="#242424" />
                    <path d="M68.4996 3.13068L79.061 26.1771H75.289L67.4812 7.31751L68.4996 3.13068ZM61.2575 23.7254C60.9809 24.4546 61.0186 25.0204 61.3706 25.4227C61.7227 25.8251 62.125 26.0262 62.5777 26.0262H62.8794V26.4034H55.5996V26.0262C55.5996 26.0262 55.6499 26.0262 55.7505 26.0262C55.8511 26.0262 55.9014 26.0262 55.9014 26.0262C56.4294 26.0262 56.9701 25.8502 57.5233 25.4982C58.0765 25.1461 58.5417 24.5552 58.9189 23.7254H61.2575ZM68.4996 3.13068L68.7259 6.18593L60.2014 26.2903H57.7119L66.6136 7.16663C66.6388 7.14149 66.7268 6.96546 66.8777 6.63856C67.0285 6.31167 67.192 5.9219 67.368 5.46927C67.5692 5.01664 67.7452 4.57658 67.8961 4.1491C68.047 3.72161 68.135 3.38214 68.1601 3.13068H68.4996ZM72.6864 17.9543V19.1613H62.7663V17.9543H72.6864ZM74.2706 23.7254H77.9294C78.3066 24.5552 78.7718 25.1461 79.325 25.4982C79.8782 25.8502 80.4063 26.0262 80.9092 26.0262C80.9092 26.0262 80.9595 26.0262 81.0601 26.0262C81.1607 26.0262 81.211 26.0262 81.211 26.0262V26.4034H72.6864V26.0262H72.9882C73.4157 26.0262 73.8054 25.8251 74.1575 25.4227C74.5095 25.0204 74.5472 24.4546 74.2706 23.7254Z" fill="#242424" />
                    <path d="M51.5233 3.77194V26.4035H48.3926V3.77194H51.5233ZM35.4172 3.77194V26.4035H32.2865V3.77194H35.4172ZM48.7698 14.5974V15.8044H35.04V14.5974H48.7698ZM32.3996 23.9894V26.4035H29.6838V26.0263C29.6838 26.0263 29.7593 26.0263 29.9102 26.0263C30.061 26.0263 30.1365 26.0263 30.1365 26.0263C30.74 26.0263 31.2429 25.8251 31.6452 25.4228C32.0476 25.0204 32.2613 24.5427 32.2865 23.9894H32.3996ZM35.304 23.9894H35.4172C35.4172 24.5427 35.6309 25.0204 36.0584 25.4228C36.4859 25.8251 36.9888 26.0263 37.5672 26.0263C37.5672 26.0263 37.6426 26.0263 37.7935 26.0263C37.9444 26.0263 38.0198 26.0263 38.0198 26.0263V26.4035H35.304V23.9894ZM35.304 6.18597V3.77194H38.0198V4.14913C38.0198 4.14913 37.9444 4.14913 37.7935 4.14913C37.6426 4.14913 37.5672 4.14913 37.5672 4.14913C36.9888 4.14913 36.4859 4.3503 36.0584 4.75264C35.6309 5.12983 35.4172 5.60761 35.4172 6.18597H35.304ZM32.3996 6.18597H32.2865C32.2613 5.60761 32.0476 5.12983 31.6452 4.75264C31.2429 4.3503 30.74 4.14913 30.1365 4.14913C30.1365 4.14913 30.061 4.14913 29.9102 4.14913C29.7593 4.14913 29.6838 4.14913 29.6838 4.14913V3.77194H32.3996V6.18597ZM48.5057 23.9894V26.4035H45.7899V26.0263C45.7899 26.0263 45.8654 26.0263 46.0163 26.0263C46.1671 26.0263 46.2426 26.0263 46.2426 26.0263C46.8209 26.0263 47.3113 25.8251 47.7136 25.4228C48.1411 25.0204 48.3674 24.5427 48.3926 23.9894H48.5057ZM51.4101 23.9894H51.5233C51.5484 24.5427 51.7622 25.0204 52.1645 25.4228C52.5668 25.8251 53.0698 26.0263 53.6733 26.0263C53.6733 26.0263 53.7487 26.0263 53.8996 26.0263C54.0505 26.0263 54.1259 26.0263 54.1259 26.0263V26.4035H51.4101V23.9894ZM51.4101 6.18597V3.77194H54.1259V4.14913C54.1259 4.14913 54.0505 4.14913 53.8996 4.14913C53.7487 4.14913 53.6733 4.14913 53.6733 4.14913C53.0698 4.14913 52.5668 4.3503 52.1645 4.75264C51.7622 5.12983 51.5484 5.60761 51.5233 6.18597H51.4101ZM48.5057 6.18597H48.3926C48.3674 5.60761 48.1411 5.12983 47.7136 4.75264C47.3113 4.3503 46.8209 4.14913 46.2426 4.14913C46.2426 4.14913 46.1671 4.14913 46.0163 4.14913C45.8654 4.14913 45.7899 4.14913 45.7899 4.14913V3.77194H48.5057V6.18597Z" fill="#242424" />
                    <path d="M12.9754 0C15.7415 0 18.1555 0.540643 20.2175 1.62193C22.2795 2.70321 23.8763 4.23713 25.0078 6.22367C26.1646 8.21022 26.7429 10.5362 26.7429 13.2017C26.7429 15.8672 26.1646 18.1932 25.0078 20.1798C23.8763 22.1412 22.2795 23.6751 20.2175 24.7815C18.1555 25.8628 15.7415 26.4035 12.9754 26.4035H4.7149L4.67718 25.1587C4.85321 25.1587 5.2304 25.1587 5.80876 25.1587C6.41227 25.1587 7.11636 25.1587 7.92104 25.1587C8.72571 25.1587 9.50524 25.1587 10.2596 25.1587C11.014 25.1587 11.6427 25.1587 12.1456 25.1587C12.6485 25.1587 12.9 25.1587 12.9 25.1587C14.962 25.1587 16.7599 24.6684 18.2938 23.6877C19.8277 22.6818 21.0096 21.2862 21.8394 19.5008C22.6944 17.7155 23.1219 15.6158 23.1219 13.2017C23.1219 10.7877 22.6944 8.688 21.8394 6.90262C21.0096 5.11724 19.8152 3.7342 18.2561 2.7535C16.7222 1.74766 14.9368 1.24473 12.9 1.24473C12.9 1.24473 12.6359 1.24473 12.1079 1.24473C11.5798 1.24473 10.9134 1.24473 10.1088 1.24473C9.32922 1.24473 8.52455 1.24473 7.69472 1.24473C6.89005 1.24473 6.16081 1.24473 5.50701 1.24473C4.87835 1.24473 4.47601 1.24473 4.29999 1.24473V0H12.9754ZM6.11051 0V26.4035H2.90438V0H6.11051ZM3.01754 23.65V26.4035H0V26.0263C0 26.0263 0.0754385 26.0263 0.226315 26.0263C0.402339 26.0263 0.49035 26.0263 0.49035 26.0263C1.14415 26.0263 1.69737 25.8 2.15 25.3473C2.62777 24.8695 2.87923 24.3038 2.90438 23.65H3.01754ZM3.01754 2.7535H2.90438C2.90438 2.0997 2.66549 1.54649 2.18772 1.09386C1.70994 0.616081 1.14415 0.377191 0.49035 0.377191C0.49035 0.377191 0.414912 0.377191 0.264035 0.377191C0.113158 0.377191 0.0377193 0.377191 0.0377193 0.377191L0 0H3.01754V2.7535Z" fill="#242424" />
                </svg>
                {/* <img src={require('./Dhaatu.png')} alt="Logo" className="h-6 sm:h-8" /> */}
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
            {/* <Footer /> */}
        </div>
    )
}

export default DhaatuWebsite