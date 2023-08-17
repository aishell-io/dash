import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // authentication
    login: ({ email, username }) => {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
    },
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    checkAuth: () => {
      return localStorage.getItem("username")
        ? Promise.resolve()
        : Promise.reject();
    },
    logout: () => {
      localStorage.removeItem("username");
      return Promise.resolve();
    },
    //getIdentity: () => Promise.resolve(/* ... */),
    //handleCallback: () => Promise.resolve(/* ... */), // for third-party authentication only
    // authorization
    getPermissions: () => Promise.resolve(/* ... */),
};

//export default authProvider;


/*
// TypeScript users must reference the type: `AuthProvider`
export const authProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
*/