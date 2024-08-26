import React, { useState } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { Footer } from './landingPage';

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-lg px-28  border-[#D9D9D9] border-b-[1px]">
        <div className="px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          {/* Left Side Links */}
          <div className="font-poppins hidden lg:flex space-x-4 text-sm font-light uppercase gap-5">
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Cookware
            </a>
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Drinkware
            </a>
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Serveware
            </a>
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Gifting
            </a>
          </div>

          {/* Middle Logo/Image */}
          <div className="flex  justify-start sm:justify-center flex-grow lg:flex-grow-0">
            {/* <img
            src={require('./Dhaatu.png')}
            alt="Logo"
            className="h-sm-8 h-5 w-auto"
          /> */}
            <svg width="151" height="27" viewBox="0 0 151 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M132.055 3.77194V18.0298C132.055 20.4438 132.658 22.3424 133.866 23.7254C135.073 25.1085 136.72 25.8 138.807 25.8C141.12 25.8 142.931 25.1462 144.238 23.8386C145.546 22.531 146.2 20.733 146.2 18.4447V3.77194H148.086V18.3693C148.086 21.0096 147.256 23.0968 145.596 24.6307C143.937 26.1646 141.636 26.9315 138.694 26.9315C135.626 26.9315 133.224 26.1772 131.489 24.6684C129.779 23.1345 128.924 21.0473 128.924 18.407V3.77194H132.055ZM129 3.77194V5.77106H128.924C128.899 5.31843 128.711 4.94124 128.358 4.63948C128.032 4.31258 127.629 4.14913 127.151 4.14913C127.151 4.14913 127.051 4.14913 126.85 4.14913C126.674 4.14913 126.586 4.14913 126.586 4.14913V3.77194H129ZM134.394 3.77194V4.14913C134.394 4.14913 134.293 4.14913 134.092 4.14913C133.916 4.14913 133.828 4.14913 133.828 4.14913C133.375 4.14913 132.96 4.31258 132.583 4.63948C132.231 4.94124 132.055 5.31843 132.055 5.77106H131.98V3.77194H134.394ZM146.275 3.77194V5.77106H146.2C146.2 5.31843 146.024 4.94124 145.672 4.63948C145.32 4.31258 144.892 4.14913 144.389 4.14913C144.389 4.14913 144.301 4.14913 144.125 4.14913C143.949 4.14913 143.861 4.14913 143.861 4.14913V3.77194H146.275ZM150.462 3.77194V4.14913C150.462 4.14913 150.361 4.14913 150.16 4.14913C149.984 4.14913 149.896 4.14913 149.896 4.14913C149.418 4.14913 149.003 4.31258 148.651 4.63948C148.299 4.94124 148.111 5.31843 148.086 5.77106H148.01V3.77194H150.462Z" fill="#242424" />
              <path d="M115.761 3.88506V26.4034H112.593V3.88506H115.761ZM124.663 3.73418V4.9412H103.691V3.73418H124.663ZM124.663 4.86576V7.80786H124.248V7.27979C124.248 6.60085 124.047 6.04763 123.644 5.62015C123.242 5.19266 122.689 4.96635 121.985 4.9412V4.86576H124.663ZM124.663 3.13068V4.11138L120.514 3.73418C120.991 3.73418 121.507 3.70904 122.06 3.65874C122.638 3.58331 123.166 3.4953 123.644 3.39471C124.122 3.29413 124.462 3.20612 124.663 3.13068ZM112.668 23.9894V26.4034H109.952V26.0262C109.977 26.0262 110.053 26.0262 110.179 26.0262C110.329 26.0262 110.405 26.0262 110.405 26.0262C111.008 26.0262 111.511 25.8251 111.914 25.4227C112.341 25.0204 112.567 24.5426 112.593 23.9894H112.668ZM115.648 23.9894H115.761C115.786 24.5426 116 25.0204 116.402 25.4227C116.83 25.8251 117.345 26.0262 117.949 26.0262C117.949 26.0262 118.012 26.0262 118.137 26.0262C118.288 26.0262 118.364 26.0262 118.364 26.0262V26.4034H115.648V23.9894ZM106.331 4.86576V4.9412C105.652 4.96635 105.112 5.19266 104.709 5.62015C104.307 6.04763 104.106 6.60085 104.106 7.27979V7.80786H103.691V4.86576H106.331ZM103.691 3.13068C103.917 3.20612 104.257 3.29413 104.709 3.39471C105.162 3.4953 105.677 3.58331 106.256 3.65874C106.834 3.70904 107.362 3.73418 107.84 3.73418L103.691 4.11138V3.13068Z" fill="#242424" />
              <path d="M93.3634 3.13068L103.925 26.1771H100.153L92.3449 7.31751L93.3634 3.13068ZM86.1213 23.7254C85.8447 24.4546 85.8824 25.0204 86.2344 25.4227C86.5865 25.8251 86.9888 26.0262 87.4414 26.0262H87.7432V26.4034H80.4634V26.0262C80.4634 26.0262 80.5137 26.0262 80.6143 26.0262C80.7148 26.0262 80.7651 26.0262 80.7651 26.0262C81.2932 26.0262 81.8338 25.8502 82.3871 25.4982C82.9403 25.1461 83.4055 24.5552 83.7827 23.7254H86.1213ZM93.3634 3.13068L93.5897 6.18593L85.0651 26.2903H82.5757L91.4774 7.16663C91.5025 7.14149 91.5905 6.96546 91.7414 6.63856C91.8923 6.31167 92.0558 5.9219 92.2318 5.46927C92.4329 5.01664 92.609 4.57658 92.7598 4.1491C92.9107 3.72161 92.9987 3.38214 93.0239 3.13068H93.3634ZM97.5502 17.9543V19.1613H87.63V17.9543H97.5502ZM99.1344 23.7254H102.793C103.17 24.5552 103.636 25.1461 104.189 25.4982C104.742 25.8502 105.27 26.0262 105.773 26.0262C105.773 26.0262 105.823 26.0262 105.924 26.0262C106.024 26.0262 106.075 26.0262 106.075 26.0262V26.4034H97.5502V26.0262H97.8519C98.2794 26.0262 98.6692 25.8251 99.0212 25.4227C99.3733 25.0204 99.411 24.4546 99.1344 23.7254Z" fill="#242424" />
              <path d="M68.4996 3.13068L79.061 26.1771H75.289L67.4812 7.31751L68.4996 3.13068ZM61.2575 23.7254C60.9809 24.4546 61.0186 25.0204 61.3706 25.4227C61.7227 25.8251 62.125 26.0262 62.5777 26.0262H62.8794V26.4034H55.5996V26.0262C55.5996 26.0262 55.6499 26.0262 55.7505 26.0262C55.8511 26.0262 55.9014 26.0262 55.9014 26.0262C56.4294 26.0262 56.9701 25.8502 57.5233 25.4982C58.0765 25.1461 58.5417 24.5552 58.9189 23.7254H61.2575ZM68.4996 3.13068L68.7259 6.18593L60.2014 26.2903H57.7119L66.6136 7.16663C66.6388 7.14149 66.7268 6.96546 66.8777 6.63856C67.0285 6.31167 67.192 5.9219 67.368 5.46927C67.5692 5.01664 67.7452 4.57658 67.8961 4.1491C68.047 3.72161 68.135 3.38214 68.1601 3.13068H68.4996ZM72.6864 17.9543V19.1613H62.7663V17.9543H72.6864ZM74.2706 23.7254H77.9294C78.3066 24.5552 78.7718 25.1461 79.325 25.4982C79.8782 25.8502 80.4063 26.0262 80.9092 26.0262C80.9092 26.0262 80.9595 26.0262 81.0601 26.0262C81.1607 26.0262 81.211 26.0262 81.211 26.0262V26.4034H72.6864V26.0262H72.9882C73.4157 26.0262 73.8054 25.8251 74.1575 25.4227C74.5095 25.0204 74.5472 24.4546 74.2706 23.7254Z" fill="#242424" />
              <path d="M51.5233 3.77194V26.4035H48.3926V3.77194H51.5233ZM35.4172 3.77194V26.4035H32.2865V3.77194H35.4172ZM48.7698 14.5974V15.8044H35.04V14.5974H48.7698ZM32.3996 23.9894V26.4035H29.6838V26.0263C29.6838 26.0263 29.7593 26.0263 29.9102 26.0263C30.061 26.0263 30.1365 26.0263 30.1365 26.0263C30.74 26.0263 31.2429 25.8251 31.6452 25.4228C32.0476 25.0204 32.2613 24.5427 32.2865 23.9894H32.3996ZM35.304 23.9894H35.4172C35.4172 24.5427 35.6309 25.0204 36.0584 25.4228C36.4859 25.8251 36.9888 26.0263 37.5672 26.0263C37.5672 26.0263 37.6426 26.0263 37.7935 26.0263C37.9444 26.0263 38.0198 26.0263 38.0198 26.0263V26.4035H35.304V23.9894ZM35.304 6.18597V3.77194H38.0198V4.14913C38.0198 4.14913 37.9444 4.14913 37.7935 4.14913C37.6426 4.14913 37.5672 4.14913 37.5672 4.14913C36.9888 4.14913 36.4859 4.3503 36.0584 4.75264C35.6309 5.12983 35.4172 5.60761 35.4172 6.18597H35.304ZM32.3996 6.18597H32.2865C32.2613 5.60761 32.0476 5.12983 31.6452 4.75264C31.2429 4.3503 30.74 4.14913 30.1365 4.14913C30.1365 4.14913 30.061 4.14913 29.9102 4.14913C29.7593 4.14913 29.6838 4.14913 29.6838 4.14913V3.77194H32.3996V6.18597ZM48.5057 23.9894V26.4035H45.7899V26.0263C45.7899 26.0263 45.8654 26.0263 46.0163 26.0263C46.1671 26.0263 46.2426 26.0263 46.2426 26.0263C46.8209 26.0263 47.3113 25.8251 47.7136 25.4228C48.1411 25.0204 48.3674 24.5427 48.3926 23.9894H48.5057ZM51.4101 23.9894H51.5233C51.5484 24.5427 51.7622 25.0204 52.1645 25.4228C52.5668 25.8251 53.0698 26.0263 53.6733 26.0263C53.6733 26.0263 53.7487 26.0263 53.8996 26.0263C54.0505 26.0263 54.1259 26.0263 54.1259 26.0263V26.4035H51.4101V23.9894ZM51.4101 6.18597V3.77194H54.1259V4.14913C54.1259 4.14913 54.0505 4.14913 53.8996 4.14913C53.7487 4.14913 53.6733 4.14913 53.6733 4.14913C53.0698 4.14913 52.5668 4.3503 52.1645 4.75264C51.7622 5.12983 51.5484 5.60761 51.5233 6.18597H51.4101ZM48.5057 6.18597H48.3926C48.3674 5.60761 48.1411 5.12983 47.7136 4.75264C47.3113 4.3503 46.8209 4.14913 46.2426 4.14913C46.2426 4.14913 46.1671 4.14913 46.0163 4.14913C45.8654 4.14913 45.7899 4.14913 45.7899 4.14913V3.77194H48.5057V6.18597Z" fill="#242424" />
              <path d="M12.9754 0C15.7415 0 18.1555 0.540643 20.2175 1.62193C22.2795 2.70321 23.8763 4.23713 25.0078 6.22367C26.1646 8.21022 26.7429 10.5362 26.7429 13.2017C26.7429 15.8672 26.1646 18.1932 25.0078 20.1798C23.8763 22.1412 22.2795 23.6751 20.2175 24.7815C18.1555 25.8628 15.7415 26.4035 12.9754 26.4035H4.7149L4.67718 25.1587C4.85321 25.1587 5.2304 25.1587 5.80876 25.1587C6.41227 25.1587 7.11636 25.1587 7.92104 25.1587C8.72571 25.1587 9.50524 25.1587 10.2596 25.1587C11.014 25.1587 11.6427 25.1587 12.1456 25.1587C12.6485 25.1587 12.9 25.1587 12.9 25.1587C14.962 25.1587 16.7599 24.6684 18.2938 23.6877C19.8277 22.6818 21.0096 21.2862 21.8394 19.5008C22.6944 17.7155 23.1219 15.6158 23.1219 13.2017C23.1219 10.7877 22.6944 8.688 21.8394 6.90262C21.0096 5.11724 19.8152 3.7342 18.2561 2.7535C16.7222 1.74766 14.9368 1.24473 12.9 1.24473C12.9 1.24473 12.6359 1.24473 12.1079 1.24473C11.5798 1.24473 10.9134 1.24473 10.1088 1.24473C9.32922 1.24473 8.52455 1.24473 7.69472 1.24473C6.89005 1.24473 6.16081 1.24473 5.50701 1.24473C4.87835 1.24473 4.47601 1.24473 4.29999 1.24473V0H12.9754ZM6.11051 0V26.4035H2.90438V0H6.11051ZM3.01754 23.65V26.4035H0V26.0263C0 26.0263 0.0754385 26.0263 0.226315 26.0263C0.402339 26.0263 0.49035 26.0263 0.49035 26.0263C1.14415 26.0263 1.69737 25.8 2.15 25.3473C2.62777 24.8695 2.87923 24.3038 2.90438 23.65H3.01754ZM3.01754 2.7535H2.90438C2.90438 2.0997 2.66549 1.54649 2.18772 1.09386C1.70994 0.616081 1.14415 0.377191 0.49035 0.377191C0.49035 0.377191 0.414912 0.377191 0.264035 0.377191C0.113158 0.377191 0.0377193 0.377191 0.0377193 0.377191L0 0H3.01754V2.7535Z" fill="#242424" />
            </svg>

          </div>

          {/* Right Side Links and Icons */}
          <div className="font-poppins hidden lg:flex space-x-4 text-sm font-light uppercase gap-5">
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-[#242424] hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-[#242424] hover:text-blue-500">
              Contact
            </a>
            <button className="text-[#242424] hover:text-blue-500">
              <CiSearch size={20} />
            </button>
            <div className="relative inline-block">
              <button className="text-[#242424] hover:text-blue-500">
                {/* <CiShoppingCart size={20} /> */}
                <img
                  src={require('./Tote.png')}
                  alt="Logo"
                  className="h-sm-8 h-5 w-auto"
                />
              </button>
              <span className="absolute -top-3 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                0
              </span>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#242424] hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 py-2 space-y-1 font-poppins text-sm uppercase">
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Cookware
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Drinkware
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Serveware
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Gifting
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Home
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              About
            </a>
            <a href="#" className="block text-[#242424] hover:text-blue-500">
              Contact
            </a>
          </div>
        )}

      </nav>
      <div className=''>

        {props.children&&props.children}
      </div>
     {props.children&& <Footer />}
    </div>
  );
};

export default Navbar;
