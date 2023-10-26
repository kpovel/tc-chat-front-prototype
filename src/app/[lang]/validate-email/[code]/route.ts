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
    `http://138.68.69.149:8080/api/validate-email/${context.params.code}`,
    {
      method: "PUT",
    },
  );

  if (response.ok) {
    const json = (await response.json()) as ValidateResponse;
    cookies().set("jwtAccessToken", json.jwtAccessToken);
    cookies().set("jwtRefreshToken", json.jwtRefreshToken);
    redirect("/chat");
  }

  const error = response.text();
  return NextResponse.json(error);
}
