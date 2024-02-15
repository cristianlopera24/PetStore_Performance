import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as createPet from '../resources/services/pet/createPet.js';

const payload = JSON.stringify(createPet.body);

const params = {
    headers: createPet.headers
};

/**
 * Executes the createPet function.
 * @returns {Promise} A promise that resolves with the result of the createPet function.
 */
export const execute = () => {
    var url = `${general.baseUrl}${createPet.url}`;
    return http.post(url, payload, params);
}