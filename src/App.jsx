import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import auth from './firebase.config';

const App = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email, password})
    setRegisterError("")
    setSuccess("")
    if(password.length < 6){
      setRegisterError("Must be 6 character")
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError("must be a one upper case character")
      return;
    }
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      console.log(result.user)
      setSuccess("user is created")
    })
    .catch((error)=>{
      console.log(error)
      setRegisterError(error.message)
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
           type={ showPassword? "text" : "password"}
            name='password' 
            placeholder="password" className="input input-bordered relative" required />
          <span className='absolute right-12 top-44 cursor-pointer text-xl font-bold' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEye />:<FaRegEyeSlash />}</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        registerError && <p className='text-red-500 text-center mb-4'>{registerError}</p>
      }
      {
        success && <p className='text-green-500 text-center mb-4'>{success}</p>
      }
    </div>
  </div>
</div>
    </div>
  )
}

export default App