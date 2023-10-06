// src/constants.ts

/**
 * API base URL
 * @type {string}
 */
export const API_ROOT: string = 'https://packdir.com/api/aishellio/';

/**
 * API: register
 * @type {string}
 */
export const API_REGISTER: string = API_ROOT + 'register';

// Authenticated API

/**
 * API base URL for authenticated users.
 * @type {string}
 */
export const AUTH_ROOT: string = 'https://packdir.com/api/dashaishell';

// Unauthenticated API

/**
 * API base URL for unauthenticated users.
 * @type {string}
 */
export const UNAUTH_ROOT: string = 'https://packdir.com/api/dashanony';

// Status codes

/**
 * Status code: Success
 * @type {number}
 */
export const S_SUCCESS: number = 0;

/**
 * Status code: Email already exists
 * @type {number}
 */
export const S_EMAIL_EXISTS: number = 2;
