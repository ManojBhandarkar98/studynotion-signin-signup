import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1,desc2, image, formType, setIsLoggedIn, }) => {
   
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-[12] mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading[1.625] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {
                formType==="signup"? <SignupForm setIsLoggedIn={setIsLoggedIn}/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className="w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-100 border border-richblack-700">
                <FcGoogle/>
                <p>Sign in with Google</p>
            </button>
        </div>
        <div className="relative w-11/12 max-w-[450px] mx-auto md:mx-0">
        <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy'/>
            <img className="absolute z-10 -top-4 right-4" src={image} alt='Students' width={558} height={490} loading='lazy'/>
        </div>
    </div>
  )
}

export default Template