import { useForm } from "react-hook-form";
import Button from "../../Components/Common/Button";
import { auth, createUserWithEmailAndPassword } from "../../Firebase/FirebaseConfig.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SiGnuprivacyguard } from "react-icons/si";


//SignUp User Account

const SignUp = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data; 
    SignUpUser(email, password); 
  };

  const SignUpUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed up 
      const user = userCredential.user;
      console.log("Sign-up successful:", user);
      toast.success("Account Create successfully ")
      navigate('/signin')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during sign-up:", errorCode, errorMessage);
      toast.error("Error during sign-up: " + errorMessage)
    }
  };

  return (
    <div className="flex justify-center flex-wrap items-center h-screen bg-[#39DB4A]">
      <div className="flex items-center flex-wrap w-auto flex-col border-2 border-[#39DB4A] rounded-xl h-[500px] pt-[40px] mb-8 p-2 bg-white">
        <div>
          <h1 className='text-xl text-center m-2'>
            <span className='bg-[#39DB4A] pl-2 pr-2 rounded text-white'>F</span> OODI
          </h1>
          <h1 className='text-xl text-center'>Create <span className="text-[#39DB4A]">Your</span> Account</h1>
        </div>
        <form className="flex flex-col h-[250px] mt-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="h-8 w-72 p-4">Email Address</label>
          <input 
            className="border-2 border-[#39DB4A] rounded-lg h-8 w-72 p-4 m-4" 
            placeholder="Enter Your Email Address" 
            type="email" 
            {...register("email", { required: true })} 
          />
          {errors.email && <span className="text-red-900 pl-[20px]">Email Address is required</span>}
          
          <label className="h-8 w-72 p-4">Password</label>
          <input 
            className="border-2 border-[#39DB4A] rounded-lg h-8 w-72 p-4 m-4" 
            placeholder="Enter Your Password" 
            type="password" 
            {...register("password", { required: true })} 
          />
          {errors.password && <span className="text-red-900 pl-[20px] ">Password is required</span>}
          <div>
            <p className="pl-[20px] pt-[10px]">Already Have an Account <Link to='/signin' className="text-[#39DB4A]">Sign In</Link></p>
          </div>
          <div className="flex justify-center items-center flex-wrap mt-4 mb-4">
           <div className="flex justify-center items-center gap-[3px] m-2 p-2 rounded-xl bg-[#39DB4A]">
            <SiGnuprivacyguard/>
            <button className="text-white">Sign Up</button>
           </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
