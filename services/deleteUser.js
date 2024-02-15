import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as deleteUser from '../resources/services/user/deleteUser.js';

/**
 * Executes the deleteUser service.
 * @returns {Promise} A promise that resolves with the result of the deleteUser service.
 */
export const execute = () => {
    var url = `${general.baseUrl}${deleteUser.url}`;
    return http.del(url);
}