"use server";

import { RegenerateAccessToken } from "./updateRefreshToken";

export async function ChatList() {
  return (
    <>
      <RegenerateAccessToken />
      <h1>welcome to our chat page</h1>
    </>
  );
}
