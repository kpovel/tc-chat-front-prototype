"use server";
import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from "@/utils/cookiesName";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SuccessAccessTokenRegeneration = {
  type: "Bearer";
  jwtAccessToken: string;
  jwtRefreshToken: null;
};

export async function regenerateAccessToken() {
  const refreshToken = cookies().get(JWT_REFRESH_TOKEN);

  if (!refreshToken?.value) {
    redirect("/");
  }

  const response = await fetch(
    `${process.env.SERVER_HOST}/api/refresh/access-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwtRefreshToken: refreshToken.value }),
    },
  );

  if (!response.ok) {
    redirect("/");
  }

  const json = (await response.json()) as SuccessAccessTokenRegeneration;
  cookies().set({
    name: JWT_ACCESS_TOKEN,
    value: json.jwtAccessToken,
    maxAge: 60 * 15, // 15m
    httpOnly: true,
  });
}
