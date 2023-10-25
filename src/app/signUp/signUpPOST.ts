"use server";

import { signUpDataInterface } from "./signUpForm";

export async function signUpPostData(
  data: signUpDataInterface,
  origin: string,
) {
  try {
    const response = await fetch("http://138.68.69.149:8080/api/signup", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Originating-Host": origin,
      },
    });

    console.log(response.json());
    // todo: if ok, redirect to /validate-email page

  } catch (error) {
    console.error(`error msg - ${error}`);

    throw error;
  }
}
