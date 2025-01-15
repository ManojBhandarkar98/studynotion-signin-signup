import React from 'react'
import signupImg from "../assets/signup.png"

export const Signup = () => {
  return (
    <template
      title='Joins the millions learning to code with StudyNotion for free'
      desc1='Build skills for today, tommarow, and beyond.'
      desc2='Education to future-proof your career.'
      image={signupImg}
      formType='signup'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
