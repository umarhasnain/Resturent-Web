import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTwitterSquare, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
  <div>
      <div className='flex justify-evenly flex-wrap m-8 '>
       <div className='w-60'>
        <h1 className='text-xl mb-4'><span className='bg-[#39DB4A] pl-2 pr-2 rounded text-white'>F</span> OODI</h1>
        <p>Savour the artistry where every dish is a culinary masterpiece</p>
      </div>

      <div>
        <ul>
            <li className='font-bold text-base mb-2 mt-2'>Useful Links</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
        </ul>
      </div>
      <div>
        <ul>
            <li className='font-bold text-base mb-2 mt-2'>Main Menu</li>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
        </ul>
      </div>

      <div>
        <ul>
            <li className='font-bold text-base mb-2 mt-2'>Contact Us</li>
            <li>foodi@gmail.com</li>
            <li>+92 315 1929192</li>
            <li>Social Media</li>
        </ul>
      </div>
    </div>


    <div className='flex justify-evenly flex-wrap m-8 pt-8'>
       <div >
     <ul className='flex gap-4'> 
         <FaFacebook/>
         <FaInstagram />

         <FaTwitter />

         <FaYoutube />
        </ul>
       </div>
       <span>Copyright © 2024 | All rights reserved</span>
    </div>

    <div>

    </div>
  </div>
  )
}

export default Footer
