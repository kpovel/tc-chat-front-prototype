"use server";

import axios from 'axios';
import { signUpDataInterface } from './signUpForm';

export async function signUpPostData(data: signUpDataInterface) {
    const dataSubmit = JSON.stringify(data);

    try {
        const response = await axios.post("http://138.68.69.149:8080/api/signup", dataSubmit, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response Data:', response.data);

        const res = {
            res: response.data,
            status: response.status
        }

        return res
        
      } catch (error) {
        console.error(`error msg - ${error.message}`);

        throw error;
      }
}

