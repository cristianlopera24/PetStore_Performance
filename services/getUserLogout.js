import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as getUserLogout from '../resources/services/user/getUserLogout.js';

/**
 * Executes the user logout request.
 * @returns {Promise} A promise that resolves with the response from the server.
 */
export const execute = () => {
    var url = `${general.baseUrl}${getUserLogout.url}`;
    return http.get(url);
}
