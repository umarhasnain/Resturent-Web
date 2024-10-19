import { useState } from "react";
import menu from "../../Utils/constant/productData";
import Button from "./Button";
import Modal from "./Modal";

const Card = () => {

    const [openModal, setOpenModal] = useState(false)
    const [modalId ,setmodalId] = useState(0)


    const modalIdUpdate = (id) => {
      setmodalId(id)
    }

    const handleClick = () => {
        setOpenModal(true)
    }

  return (
    <div className="flex justify-evenly items-center flex-wrap">
        {/* <button onClick={}>s</button> */}
        <Modal modalId={modalId}  openModal={openModal} setOpenModal={setOpenModal}/>
      {menu.map((items) => {
        const {id, title , price , img} = items
      
        return (
          <div className="h-[350px] w-[280px] border-2 border-primaryThemeColor rounded-xl m-6 p-4  gap-4">
            <img className="h-[180px] w-[300px] mb-8" src={img} alt="" />
            <h2 className="font-bold text-primaryThemeColor mb-2"><span className="text-black">Tittle:</span> {title}</h2>
            {/* <p>{items.description}</p> */}
            <h5 className="font-bold text-primaryThemeColor mb-2">Price: {price}</h5>
            {/* <Button onClick={()=>setOpenModal(true)} data='Read More'> </Button> */}
                <button key={id}  className='h-8 w-28 rounded-xl text-white bg-[#39DB4A]'  onClick={()=> modalIdUpdate(id) + handleClick() }> Read More </button>
          </div>
        );
      })}
    </div>
  );
};


// const Card = ()=>{
//   console.log(menu);
//     const [openModal, setOpenModal] = useState(false)

  
//  const {title,price} = menu
//   return(
//     <div className="h-[350px] w-[280px] border-2 border-primaryThemeColor rounded-xl m-6 p-4  gap-4">
//     <img className="h-[100px] w-[300px] mb-[120px]" src="./vite.svg" alt="" />
//     <h2 className="font-bold text-primaryThemeColor mb-2"><span className="text-black">Tittle:</span> {title}</h2>
//     {/* <p>{items.description}</p> */}
//     <h5 className="font-bold text-primaryThemeColor mb-2">Price: {price}</h5>
//     {/* <Button onClick={()=>setOpenModal(true)} data='Read More'> </Button> */}
//         <button className='h-8 w-28 rounded-xl text-white bg-[#39DB4A]' onClick={()=>setOpenModal(true)}>  Read More </button>
//         <Modal openModal={openModal} setOpenModal={setOpenModal}/>
//   </div>
//   )
// }

export default Card;
