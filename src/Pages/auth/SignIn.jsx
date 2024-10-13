import { useForm } from "react-hook-form";
import Button from "../../Components/Common/Button";
import {auth,signInWithEmailAndPassword} from "../../Firebase/FirebaseConfig.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (data) => {
    const { email, password } = data; 
    SignInUser(email, password); 
  };

  const SignInUser = async (email, password) => {
   await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      toast.success("Account sign in successfully" , user)
      navigate("/admin")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  
  };


  return (
    <div className=" flex justify-center flex-wrap  items-center h-[100%]  bg-[#39DB4A] ">

      <div className="flex items-center justify-center flex-wrap flex-col border-2 border-[#39DB4A] rounded-xl h-[495px] mb-8 mt-8 bg-white">
      <div>
        <h1 className='text-xl text-center m-4'><span className='bg-[#39DB4A] pl-2 pr-2 rounded text-white'>F</span> OODI</h1>
        <h1 className='text-xl text-center'>SignIn <span className="text-[#39DB4A]">Your</span> Account</h1>
      </div>
      <form className="flex flex-col h-[250px] mt-4" onSubmit={handleSubmit(onSubmit)}>
      <label className="h-8 w-72 p-4">Email Address</label>
      <input className="border-2 border-[#39DB4A] rounded-lg h-8 w-72 p-4 m-4" placeholder="Enter Your Email Address" type="email"{...register("email",{ required: true })} />
      {errors.email && <span className="text-red-900 pl-[20px]">Email Address is required</span>}
      
      <label className="h-8 w-72 p-4">Password</label>

      <input className="border-2 border-[#39DB4A] rounded-lg h-8 w-72 p-4 m-4" placeholder="Enter Your Password" type="password"{...register("password", { required: true })} />
      {errors.password && <span className="text-red-900 pl-[20px] mb-12">Password is required</span>}
      
      {/* <input type="submit" /> */}

      <div className="flex justify-center items-center flex-col flex-wrap m-4">
      <Button data="SignIn"/>
      
      <div className="flex justify-center items-center gap-2 m-2 p-2 rounded-xl bg-[#39DB4A] "><FaGoogle />
      <button className="text-white">  SignIn With Google</button>
      </div>
      </div>

    </form>
      </div>
    </div>
  );
}

export default SignIn;