import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();   

    const navigateToHome = () => {
        navigate('/');
      };
  return (
    <>
    <div className="form-section">
    <div className="form-container">
        <div className="form-header">
            <h2 className='text-center'><i className="fas fa-user"></i>Login</h2>
        </div>
        <form id="form" className="form">
            <div className="form-control">
                <label for="username">Username</label>
                <input type="text" placeholder="Enter your name" id="username" />
            </div>
            <div className="form-control">
                <label for="username">Password</label>
                <input type="password" placeholder="Password" id="password"/>
                </div>
            <button onClick={navigateToHome}>Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login