import React from 'react'
import Button from './Common/Button'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center flex-wrap p-6 bg-[white]'>
      <div>
        <h1 className='text-xl'><span className='bg-[#39DB4A] pl-2 pr-2 rounded text-white'>F</span> OODI</h1>
      </div>
      <div>
        <ul className='flex items-center flex-wrap gap-4 mt-4 mb-4'>
            <li>Home</li>
           <select className='bg-none rounded ' name="" id="">
            <option value=""> <li>Menu</li></option>
            <option value="">Chicken</option>
            <option value="">Chicken</option>
            <option value="">Chicken</option>
           </select>
            <li>Service</li>
            <li>Offer</li>
        </ul>
      </div>

      <div>
        <Button data="Contact"/>
      </div>
    </div>
  )
}

export default Header
