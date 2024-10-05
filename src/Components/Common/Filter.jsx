import React from 'react'
import Button from './Button'

const Filter = () => {
  return (
    <div className='flex justify-center items-center gap-10'>
      <input type="text" className='h-8 w-[500px] p-4 rounded-xl border-2 border-[#39DB4A]'  placeholder='Search Product'/>
      <select name="" id="" className=' h-10 w-[150px] text-center rounded-xl border-2  border-[#39DB4A] '>
        <option value="">Category</option>
      </select>
      <Button data="Search"/>
    </div>
  )
}

export default Filter
