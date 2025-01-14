import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
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

    return (
        <div>
            <form>
                <label>
                    <p>Email Adderess<sup>*</sup></p>
                    <input type='email' name='email' value={forData.email} onChange={changeHandler} placeholder='enter email address' required />
                </label>

                <label>
                    <p>Password<sup>*</sup></p>
                    <input type={showPassword ? "text" : "password"} name='password' value={forData.password} onChange={changeHandler} placeholder='enter your password' required />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                    <Link to='#'>
                        <p>
                            Forgot Password
                        </p>
                    </Link>
                </label>

                <button>Sign-In</button>
            </form>
        </div >
    )
}

export default LoginForm