import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [forData, setFormData] = useState({
        email: "",
        password: ""
    });

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success('Logged In Succesfully');
        navigate("/dashboard");
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='w-full flex flex-col gap-y-4 mt-6'>
                <label className="w-full">
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Email Adderess <sup className="text-pink-200">*</sup></p>
                    <input type='email' name='email' value={forData.email} onChange={changeHandler} placeholder='Enter email address' required className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full" />
                </label>

                <label className='w-full relative'>
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">Password <sup className="text-pink-200">*</sup></p>
                    <input type={showPassword ? "text" : "password"} name='password' value={forData.password} onChange={changeHandler} placeholder='Enter your password' required className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full" />
                   
                    <span className="absolute right-3 top-[38px] z-[10] cursor-pointer" 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                    <Link to='#'>
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" type='submit'>Sign-In</button>
            </form>
        </div >
    )
}

export default LoginForm