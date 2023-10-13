import axios from 'axios';
import { SubmitLoginData } from '../../../loginForm/page';

export async function signIn(data: SubmitLoginData) {
    const dataSubmit = JSON.stringify(data)
    try {
        const response = await axios.post("http://138.68.69.149:8080/api/login",  dataSubmit,{
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status !== 200) {
            return null
        }

        const tokens = {
            accessToken: JSON.stringify(response.data.jwtAccessToken),
            refreshToken: JSON.stringify(response.data.jwtRefreshToken)
        }

        // console.log(tokens)

        return tokens;

    } catch (error) {
        console.error(`Erroooor ${error}`);
        return null
    }
}