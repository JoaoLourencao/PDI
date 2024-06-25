import Cookies from 'js-cookie';

export const removeAllCookies = () => {
  // Get all cookies
  const allCookies = Cookies.get();

  // Iterate through all cookies and remove each one
  for (let cookieName in allCookies) {
    if (allCookies.hasOwnProperty(cookieName)) {
      Cookies.remove(cookieName);
    }
  }
};
