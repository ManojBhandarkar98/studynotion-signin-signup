import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const SignupForm = () => {
  const [showpassword, setShowPassword] = useState(false);
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
  return (
    <div>
      {/* student - instructor tab */}
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form>
        {/* Firstname and lastname */}
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              type='text'
              name='firstName'
              onClick={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              required></input>
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              type='text'
              name='lastName'
              onClick={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              required></input>
          </label>

        </div>
        {/* Email Address */}
        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            type='email'
            name='email'
            onClick={changeHandler}
            placeholder='Enter email address'
            value={formData.email}
          ></input>
        </label>
        <div>
          {/* Create password and confirmpassword */}
          <label>
            <p>Create Password<sup>*</sup></p>
            <input
              type={showpassword ? "text" : "password"}
              name='password'
              onClick={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
              required></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>

          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              type={showpassword}
              name='confirmPassword'
              onClick={changeHandler}
              placeholder='Enter Confirm Password'
              value={formData.confirmPassword}
              required></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
        </div>

        <button>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm