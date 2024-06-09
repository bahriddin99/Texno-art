import Cookies from "js-cookie";

export const getDataFromCookie = (title: string) => {
  return Cookies.get(title);
};

export const setDataToCookie = (title: string, data: string) => {
  Cookies.set(title, data);
};
export const setCookies = (title:string, value:string) => {
  return Cookies.set(title, value)
}

export const removeCookies = (title: string) => {
  return Cookies.remove(title);
};
