//SUPER SUPER SKETCHY WIP LOGIN LOL
import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Hard-coded login details for demonstration purposes
        setAuthenticated(true);
        // if (username === 'username' && password === 'password') {
        //     setAuthenticated(true);
        //     console.log("here?")
        // }
        console.log(authenticated)
    }

    return (
            <form id="login" >
                {/* <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label> */}
                <button onClick={handleLogin} type="submit">Login</button>
            </form>
    );
}

export default Login;