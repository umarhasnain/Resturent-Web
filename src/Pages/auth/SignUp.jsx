import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className=" flex justify-center  items-center h-[100%]  bg-blue-200">
      <div className="flex items-center justify-center flex-col h-[550px] bg-white">
      <form className="flex flex-col h-[250px] bg-red-200" onSubmit={handleSubmit(onSubmit)}>
      <input className="border-2 border-black rounded-lg h-8 w-72 p-4 m-4" type="email"{...register("example")} />
      
      <input className="border-2 border-black rounded-lg h-8 w-72 p-4 m-4" type="password"{...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
      </div>
    </div>
  );
}

export default SignUp;