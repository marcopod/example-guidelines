let token: string | null = null;
let userUUID: string | null = null;

export const setToken = (newToken: string) => {
  token = `bearer ${newToken}`;
};

export const setUserUUID = (newUserUUID: string) => {
  userUUID = newUserUUID;
};

export const getToken = () => {
  return token;
};

export const getUserUUID = () => {
  return userUUID;
};
