import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const [showpassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

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
    navigate("/dashboard");
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

      <form onSubmit={submitHandler}>
        {/* Firstname and lastname */}
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              type='text'
              name='firstName'
              onClick={changeHandler}
              placeholder='Enter First Name'
              defaultValue={formData.firstName}
              required />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              type='text'
              name='lastName'
              onClick={changeHandler}
              placeholder='Enter Last Name'
              defaultValue={formData.lastName}
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
            defaultValue={formData.email}
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
              defaultValue={formData.password}
              required></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>

          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name='confirmPassword'
              onClick={changeHandler}
              placeholder='Enter Confirm Password'
              defaultValue={formData.confirmPassword}
              required></input>
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
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