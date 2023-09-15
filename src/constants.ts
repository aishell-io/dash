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
