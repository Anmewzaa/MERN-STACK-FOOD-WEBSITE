export const authenticate = (token, next) => {
  if (window !== "undefined") {
    sessionStorage.setItem("Token", JSON.stringify(token));
  }
};
