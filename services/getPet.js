import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as getPet from '../resources/services/pet/getPet.js';

const petId = 1;

/**
 * Executes the getPet function.
 * @returns {Promise} A promise that resolves with the result of the HTTP GET request.
 */
export const execute = () => {
    var url = `${general.baseUrl}${getPet.url}${petId}`;
    return http.get(url);
}
