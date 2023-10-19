'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function checkCookie() {
    const cookieStore = cookies()
    const tokens = cookieStore.get('jwtAccessToken')
    console.log(tokens)

    if(!tokens) redirect('/');

    // const response = await fetch('', {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': 'Bearer YOUR_TOKEN',
    //     },
    //   });
      
    //   const data = await response.json();
      
    //   if (data && data.token) {
    //     console.log('Token:', data.token);
    //   } else {
    //     console.log('Token not found in response data');
    //   }

}