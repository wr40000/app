//存储token
export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};

//获取token
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};

//存储token
export const removeToken = () => {
  localStorage.removeItem("TOKEN");
};