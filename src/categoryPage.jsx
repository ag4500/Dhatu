import React from 'react'
import Breadcrumb from './breadcrumb'
import { ProductCard } from './landingPage'

function CategoryPage() {
  return (
    <div className='px-24 py-9'><Breadcrumb />
    
      <div className='py-10'>
        <h5 className='text-4xl	font-cinzel'>Cookware</h5>

      </div>
      <div className='flex justify-between'>
        <p>Showing all 12 results</p>
        <div className='flex items-center'>
        <p className="font-poppins text-base font-light leading-6 text-left text-gray-600">
        Default</p>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.5L20 22.5L25 17.5" stroke="#1F212E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((i) => <ProductCard />)} </div>
    </div>

  )
}

export default CategoryPage