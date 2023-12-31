import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

type ValidateResponse = {
  type: string;
  jwtAccessToken: string;
  jwtRefreshToken: string;
};

export async function GET(
  _request: NextRequest,
  context: { params: { code: string } },
) {
  const response = await fetch(
    `${process.env.SERVER_HOST}/api/validate-email/${context.params.code}`,
    {
      method: "PUT",
      cache: "no-store",
    },
  );

  if (response.ok) {
    const json = (await response.json()) as ValidateResponse;
    cookies().set("jwtAccessToken", json.jwtAccessToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 150, // 150d
    });
    cookies().set("jwtRefreshToken", json.jwtRefreshToken, {
      path: "/",
      maxAge: 60 * 15, // 15m
    });
    redirect("/chat");
  }

  const error = await response.text();
  return NextResponse.json(error);
}
