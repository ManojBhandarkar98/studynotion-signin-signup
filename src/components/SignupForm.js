import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const [showpassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('student');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success('Account Created is successfully');

    const accountData = {
      ...formData
    }
    const finalData = {
      ...accountData,
      accountType
    }

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student - instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max' >
        <button
          className={`${accountType === 'student' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>
        <button
          className={`${accountType === 'instructor' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* Firstname and lastname */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">First Name <sup className="text-pink-200">*</sup></p>
            <input
              type='text'
              name='firstName'
              onClick={changeHandler}
              placeholder='Enter First Name'
              defaultValue={formData.firstName}
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full"
              required />
          </label>

          <label className='w-full'>
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Last Name <sup className="text-pink-200">*</sup></p>
            <input
              type='text'
              name='lastName'
              onClick={changeHandler}
              placeholder='Enter Last Name'
              defaultValue={formData.lastName}
              required
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full"
            ></input>
          </label>

        </div>
        {/* Email Address */}
        <div className='mt-[20px]'>
          <label className='w-full '>
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Email Address <sup className="text-pink-200">*</sup></p>
            <input
              type='email'
              name='email'
              onClick={changeHandler}
              placeholder='Enter email address'
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full"
              defaultValue={formData.email}
            ></input>
          </label>
        </div>
        {/* Create password and confirmpassword */}
        <div className='flex gap-x-4 w-full mt-[20px]'>
          <label className='relative w-full'>
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Create Password <sup className="text-pink-200">*</sup></p>
            <input
              type={showpassword ? "text" : "password"}
              name='password'
              onClick={changeHandler}
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full"
              placeholder='Enter Password'
              defaultValue={formData.password}
              required></input>
            <span className="absolute right-3 top-[38px] z-[10] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
              {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>

          <label className='relative w-full'>
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Confirm Password <sup className="text-pink-200">*</sup></p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name='confirmPassword'
              onClick={changeHandler}
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full"
              placeholder='Enter Confirm Password'
              defaultValue={formData.confirmPassword}
              required></input>
            <span className="absolute right-3 top-[38px] z-[10] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm