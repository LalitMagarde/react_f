import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const Signin = (props) => {
    const {toggler, settoggler,users} = props;
    const {register,handleSubmit,reset} = useForm();

  const submitHandler = (data) =>{
    const isUserExist = users.find(
      (user) =>  (user.email === data.email )
    )

    
    if (isUserExist) {
      toast.success("User already Exist");
    } else {
      toast.error("User not find");
    }

    reset()
  }


     
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-[40%] mx-auto border-white" >
        <h1 className="text-5xl font-black mb-7">Let's start the journey</h1>
         
         <input type="email"
         {...register('email')}
         placeholder="abc123@gmail.com"
         className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
         />
         <input type="password"
         {...register('password')}
         placeholder="password..."
         className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
         />
         <button className= " border  border-white rounded-[8px] mt-2 mb-1 pt-0.5 pb-0.5 pl-1.5 pr-1.5" >SignIn</button>
         <br />
        <small>
          Don't have an account ? 
          <button className="text-blue-500 pl-2" type="button" onClick={ () => {settoggler(!toggler)}} >SingUp</button>
        </small>
      </form>
  )
}