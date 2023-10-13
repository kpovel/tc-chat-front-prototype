'use client'
import { useState } from 'react';
import { signIn } from '../api/auth/login/signIn';
import { useRouter } from 'next/navigation';
import './login.css';
import Link from 'next/link';
import { sign } from 'jsonwebtoken';

export interface SubmitLoginData {
    login: string,
    password: string
}

export default function LoginForm () {

    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const { push } = useRouter();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const tokens = await signIn(formData)

        if (tokens) {
            console.log(tokens);
            push('/mainPage');
          } else {
            console.log('Login failed');
          }
    }

    return (
        <div className="signIn__wrapper">
            <div className="signIn__wrap">
            <h1>Login form</h1>
            <form className="signIn__form" onSubmit={handleSubmit}>
                <div className="signIn__form__field">
                    <label htmlFor="login">Login</label>
                    <input 
                        type="text" 
                        name="login" 
                        id="login"  
                        placeholder="login"
                        value={formData.login}
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="signIn__form__field">
                    <label htmlFor="email">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required/>
                </div>
                <button type="submit">Sign In</button>
            </form>

            </div>
            <Link href='/registration'>Sign up</Link>
        </div>
    )
}