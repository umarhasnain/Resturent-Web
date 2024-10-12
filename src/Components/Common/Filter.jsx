import React from 'react'
import Button from './Button'

const Filter = () => {

  // const [searchInput, setSearchInput] = useState('')
  // const [searchFilter, setSearchFilter] = useState(foodItems);
  // const filterFood = (event) => {
  //   const searchValue = event.target.value.toLowerCase();
  //   const searchFood = foodItems.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
  //   setSearchInput(searchValue);
  //   if (searchValue === "") {
  //     setSearchFilter(foodItems);
  //   } else {
  //     const filteredFood = foodItems.filter(item =>
  //       item.name.toLowerCase().includes(searchValue)
  //     );
  //     setSearchFilter(filteredFood)
  //   }
  // }
  return (
    <div className='flex justify-center items-center flex-wrap gap-10'>
      <input type="text" className='h-8 w-[500px] p-4 rounded-xl border-2 border-[#39DB4A]'  placeholder='Search Product'/>
      <select name="" id="" className=' h-10 w-[150px] text-center rounded-xl border-2  border-[#39DB4A] '>
        <option value="">Category</option>
        <option value="">Chickeen</option>
        <option value="">Category</option>
        <option value="">Category</option>
      </select>
      <Button data="Search"/>
    </div>
  )
}

export default Filter
