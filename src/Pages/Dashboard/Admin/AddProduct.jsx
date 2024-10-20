import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import ResponsiveDrawer from '../../../Components/Common/Drawer'
import { useForm } from "react-hook-form";
import { addDoc, collection, db, doc, setDoc } from '../../../Firebase/FirebaseConfig.jsx'
import { MyContext } from '../../../context/myContext.jsx';

const AddProduct = () => {
const productData = useContext(MyContext);
const productArr = productData.product;

    const [productImage, setProductImage] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const { image, tittle, discription, price, } = data
        const imagefile = image[0].name
        setProductImage(image[0].name)
        console.log(productImage);

        const docRef = await addDoc(collection(db, "products"), {
            tittle,
            discription,
            price,
            imagefile,
        });
        console.log("Document written with ID: ", docRef.id);

    }





    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                <ResponsiveDrawer />
                <div className=''>

                    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>

                        <input className='h-8 w-[300px] border-primaryThemeColor border-2 p-2 m-2 rounded-lg' placeholder='Tittle' {...register("tittle", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.tittle && <span>This field is required</span>}

                        <input className='h-8 w-[300px] border-primaryThemeColor border-2 p-2 m-2 rounded-lg' placeholder='Discription'{...register("discription", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.discription && <span>This field is required</span>}

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className='h-8 w-[300px] border-primaryThemeColor border-2 p-2 m-2 rounded-lg' placeholder='Price' {...register("price", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.price && <span>This field is required</span>}
                        <input className='h-12 w-[300px] border-primaryThemeColor border-2 p-2 m-2 rounded-lg' type='file' {...register("image", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.image && <span>This field is required</span>}

                        <button className='h-8 w-28 m-4 rounded-xl text-white bg-[#39DB4A]'>Add Product</button>
                    </form>
                    <img src="./vite.svg" className='h-[100px] w-[100px]' alt="" />

                </div>
            </Box>


<div>
//Get Data By Running Map on Product Arr
    {
        productArr.map((item)=>{
            console.log(item);
            
        })
    }
</div>

        </div>
    )
}

export default AddProduct
