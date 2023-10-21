"use server"

import axios from 'axios';
import { cookies } from "next/headers";
import { loginDataInterface } from './loginForm';

export async function loginPostData(data: loginDataInterface) {
    const dataSubmit = JSON.stringify(data);

    try {
        const response = await axios.post("http://138.68.69.149:8080/api/login", dataSubmit, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response Data:', response.data);

        if(response.status === 200) {
            const tokens = {
                jwtAccessToken: response.data.jwtAccessToken,
                jwtRefreshToken: response.data.jwtRefreshToken
            }

            cookies().set({
                name: 'jwtAccessToken',
                value: response.data.jwtAccessToken,
                httpOnly: true,
                path: '/',
              })
            cookies().set({
                name: 'jwtRefreshToken',
                value: response.data.jwtRefreshToken,
                httpOnly: true,
                path: '/',
            })
        }

        return response.status

    } catch (error) {
        console.error(`error msg - ${error.message}`);

        throw error;
    }
}