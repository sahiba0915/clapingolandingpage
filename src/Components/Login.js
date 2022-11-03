import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
        alert("Logged In")
    };

    const [username, setUsername] = useState(() => {
        const saved = localStorage.getItem("username");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [password, setPassword] = useState( () =>{
        const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || "";});

    useEffect(() => {
        // storing input name
        localStorage.setItem("username", JSON.stringify(username));
    }, [username]);

    useEffect(() => {
        // storing password name
        localStorage.setItem("password", JSON.stringify(password));
    }, [password]);

    return (
        <>
            <div className="form-section">
                <div className="form-container">
                    <div className="form-header">
                        <h2 className='text-center'>Login</h2>
                    </div>
                    <form id="form" className="form">
                        <div className="form-control">
                            <label for="username">Username</label>
                            <input type="text"
                                placeholder="Enter your username"
                                id="username"
                                value={username}
                                onChange={({ target }) => setUsername(target.value)} />
                        </div>
                        <div className="form-control">
                            <label for="username">Password</label>
                            <input type="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)} />
                        </div>
                        <button onClick={navigateToHome}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login