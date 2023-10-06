import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { AUTH_ROOT, UNAUTH_ROOT } from '../constants';

const access_token = localStorage.getItem('access_token');

// Authenticated API
const httpClientAuth = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Authorization', `Bearer ${access_token}`);
  return fetchUtils.fetchJson(url, options);
}

// Unauthenticated API
const httpClientUnAuth = (url: string, options: any = {}) => {
  const uuid = crypto.randomUUID();
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('x-request-id', uuid);
  return fetchUtils.fetchJson(url, options);
}

let url = UNAUTH_ROOT;
let httpClient = httpClientUnAuth;
if (access_token && access_token !== undefined && access_token.length > 10) {
  //url = AUTH_ROOT;
  //httpClient = httpClientAuth;
}

export const dataProvider = simpleRestProvider(url, httpClient);
