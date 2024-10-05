import { useState } from "react";
import menu from "../../Utils/constant/productData";
import Button from "./Button";
import Modal from "./Modal";

const Card = () => {

    const [openModal, setOpenModal] = useState(false)

    const handleClick = () => {
        setOpenModal(true)
    }

  return (
    <div>
        {/* <button onClick={}>s</button> */}
      {menu.map((items , index) => {
        return (
          <div key={index} className="h-[350px] w-[280px] border-2 border-primary rounded-xl m-6 p-4  gap-4">
            <img className="h-[100px] w-[300px] mb-[120px]" src="./vite.svg" alt="" />
            <h2 className="font-bold text-primary mb-2"><span className="text-black">Tittle:</span> {items.title}</h2>
            {/* <p>{items.description}</p> */}
            <h5 className="font-bold text-primary mb-2">Price: {items.price}</h5>
            {/* <Button onClick={()=>setOpenModal(true)} data='Read More'> </Button> */}
                <button className='h-8 w-28 rounded-xl text-white bg-[#39DB4A]' onClick={()=>setOpenModal(true)}> Read More </button>
                <Modal openModal={openModal} setOpenModal={setOpenModal}/>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
