'use client'

import { useState } from 'react';
import { signUpPostData } from './signUpPOST';
import { useRouter } from 'next/navigation';

export interface signUpDataInterface {
    login: string,
    email: string,
    password: string,
}

export default function SignUpForm() {

    const { push } = useRouter();

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataSubmit = {
            login,
            email,
            password
        }

        const submitResponse = await signUpPostData(formDataSubmit);

        console.log(submitResponse)

        if(submitResponse.status === 200) {
            alert(submitResponse.res)
            push('/');
        }
    }


    return (
        <div className="form__wrapper signUp__form__wrapper">
            <h1>Create your account</h1>
            <form onSubmit={handleSubmit} className="signUp__form">
                <div className="form__field">
                    <label htmlFor="login">Login</label>
                    <input 
                        type="text" 
                        name="login" 
                        id="login"  
                        placeholder="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required/>
                </div>
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div className="form__field">
                    <label htmlFor="email">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}