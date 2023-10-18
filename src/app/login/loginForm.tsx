'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginPostData } from './loginPOST';

export interface loginDataInterface {
    login: string,
    password: string
}

export default function LoginForm() {

    const { push } = useRouter();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataSubmit = { login, password};

        const submitResponse = await loginPostData(formDataSubmit)

        if(submitResponse === 200) {
            push('/chat');
        }
    }

    return (
        <div className="form__wrapper login__form__wrapper">
            <h1>Login to our chat 💬 ️️️️</h1>
            <form onSubmit={handleSubmit} className="login__form">
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
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}