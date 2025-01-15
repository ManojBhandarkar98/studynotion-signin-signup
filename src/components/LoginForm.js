import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate} from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
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
            <form onSubmit={submitHandler}>
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