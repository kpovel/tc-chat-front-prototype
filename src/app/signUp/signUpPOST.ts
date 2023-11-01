"use server";

import { redirect } from "next/navigation";
import { signUpDataInterface } from "./signUpForm";

export async function signUpPostData(
  data: signUpDataInterface,
  origin: string,
): Promise<string> {
  const response = await fetch("http://138.68.69.149:8080/api/signup", {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Originating-Host": origin,
    },
  });

  if (response.ok) {
    redirect("/validate-email");
  }

  // Since an API will change soon, I will treat the response as text for simplicity.
  return await response.text();
}
