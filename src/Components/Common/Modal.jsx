import React, { useState } from 'react'
import menu from '../../Utils/constant/productData'
import Button from './Button'

const Modal = ({openModal, setOpenModal,modalId}) => {
const singleData = menu.find((e)=>{
return e.id === modalId
})

const [isImgUrl ,setIsImgUrl] = useState(0)

if (singleData) {
  const {id ,title , price, description,img, imgUrl} = singleData
console.log(singleData);


  return (

    <div className={openModal && 'sticky top-[100px] max-sm:top-2 z-10 w-[100%] '} >
      {
        openModal && 
        <div className='fixed inset-0  flex items-center justify-center bg-black bg-opacity-65	 '>
         <div className='flex justify-evenly items-center bg-white rounded-lg shadow-lg p-[5px] h-[300px] w-[550px]'>
          <img className='w-[200px] h-[200px]' src={imgUrl[isImgUrl]} />
          
          {/* <div className='mt-[-250px] ml-[]'><h1 className=''>hi</h1></div> */}
         <div className='ml-2'>
         <div className='flex h-[90px] w-[90px] mb-4'>
          {
            imgUrl.map((item, i) => {
              return (
                <img key={i}  onClick={()=> setIsImgUrl(i)} className='border-2 border-[#39DB4A] rounded m-2 h-[90px] w-[80px]' src={item} />
              )
            })
          }
          {/* <img className='border-2 border-[#39DB4A] rounded m-2 h-[90px] w-[80px]' src={img} />
          <img  className='border-2 border-[#39DB4A] rounded m-2 h-[90px] w-[80px]' src={img} />
          <img className='border-2 border-[#39DB4A] rounded m-2 h-[90px] w-[80px]'  src={img} /> */}
         <div className='mt-[-20px]'>
         <button onClick={() => setOpenModal(false)}>Close</button>
         </div>
         </div>
         <h1 className='font-bold text-2xl'>{title}</h1>
         <h4 className='mb-4 mt-2'>{description}</h4>
         <Button data={`Price: ${price}`}/> 

        
         </div>

         </div>

        </div>
      }
    </div>
  )
}

 
}

export default Modal
