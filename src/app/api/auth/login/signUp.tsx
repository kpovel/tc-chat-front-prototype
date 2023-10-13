import axios from 'axios';
import { submitDataInterface } from '../../../registration/page';

export async function signUp(data: submitDataInterface) {

    const dataSubmit = JSON.stringify(data)
        try {
          const response = await axios.post("http://138.68.69.149:8080/api/signup", dataSubmit, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response Data:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
  }
