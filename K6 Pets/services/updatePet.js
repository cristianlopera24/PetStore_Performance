import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as updatePet from '../resources/services/pet/updatePet.js';

const petId = 1;
const payload = JSON.stringify(updatePet.body);
const params = {
    headers: updatePet.headers
};

/**
 * Executes the updatePet function.
 * @returns {Promise} A promise that resolves with the result of the updatePet function.
 */
export const execute = () => {
    var url = `${general.baseUrl}${updatePet.url}${petId}`;
    return http.put(url, payload, params);
}