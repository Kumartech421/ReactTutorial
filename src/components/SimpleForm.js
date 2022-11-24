import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function SimpleForm (){
    const navigate = useNavigate();
    const [email,setEmail] = useState(' ');
    const [password,setpassword] = useState('');

    const CustomerData = () => {
        console.log(email,password);
        if(email === "admin" && password === "admin123"){
            navigate('/dashboard')
        }else{
            setpassword('')
            notify();
        }
    }
    const notify = () => toast("UserName or Password is Wrong!");

    return (
        <div className="container">
            <h2>Login</h2>
            <form className="form-inline">
                <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="UserName" required />
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }}  placeholder="Password" required />
                </div>
                <br />
                <button type="button" onClick={CustomerData} className="btn btn-primary">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SimpleForm;