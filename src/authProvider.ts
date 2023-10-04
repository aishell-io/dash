import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // authentication
    login: ({ username, password }) => {
      const url = 'https://packdir.com/api/v1/login';
      console.log('dadfadf')
      console.log('username: ', username)
      console.log('password: ', password)
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });

      return fetch(request)
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(({ token }) => {
          localStorage.setItem('access_token', token);
        })
        .catch(() => {
          throw new Error('Network error')
        });
      //localStorage.setItem("username", username);
      //return Promise.resolve();
    },
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        return Promise.reject();
      }
      return Promise.resolve();
    },

    checkAuth: () => {
      const access_token = localStorage.getItem('access_token');
      const isLogged = (access_token && access_token.length > 10) ? true : false;
      return isLogged ? Promise.resolve() : Promise.reject();
    },

    logout: () => {
      //localStorage.removeItem("username");
      localStorage.removeItem("access_token");
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