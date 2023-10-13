'use client'

import { useState } from 'react';
import Link from 'next/link';
import { signUp } from '../api/auth/login/signUp';

import './signUp.css';

export interface submitDataInterface {
    login: string,
    email: string,
    password: string
}

 export default function Registration(){

    const [formData, setFormData] = useState({
        login: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signUp(formData);
    }

    return (
        <div className="signUp__wrapper">
            <div className="signUp__wrap">
            <h1>Registration Page</h1>
            <form className="signUp__form" onSubmit={handleSubmit}>
                <div className="signUp__form__field">
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
                <div className="signUp__form__field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="signUp__form__field">
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
                <button type="submit">Sign Up</button>
            </form>
            <Link href="/">to login page</Link>
            </div>
        </div>
    )

}

// const UseClientRegistration = useClient(Registration)

// export default UseClientRegistration