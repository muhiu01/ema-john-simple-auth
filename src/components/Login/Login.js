import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'
const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate =  useNavigate()
    const location =  useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, {replace : true})
            })
            .catch(error => {
                console.error(error)
            })
            
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log in</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema John? <Link to={'/signup'}>create an account</Link></p>
        </div>
    );
};

export default Login;