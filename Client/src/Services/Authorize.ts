export const authenticate = (token: string, next: { (): void; (): void }) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("Token", JSON.stringify(token));
  }
  next();
};

export const checkToken = () => {
  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("Token")) {
      return JSON.parse(sessionStorage.getItem("Token") || "");
    } else {
      return null;
    }
  }
};

export const logout = (next: { (): void }) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("Token");
  }
  next();
};
