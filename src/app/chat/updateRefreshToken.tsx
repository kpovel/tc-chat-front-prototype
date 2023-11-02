"use client";

import { useEffect } from "react";
import { regenerateAccessToken } from "./regenerateTokens";

export function RegenerateAccessToken() {
  useEffect(() => {
    (async () => {
      await regenerateAccessToken();
    })();
  }, []);

  return <></>;
}
