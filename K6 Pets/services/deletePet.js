import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as deletePet from '../resources/services/pet/deletePet.js';

const petId = 1;

/**
 * Executes the deletion of a pet.
 * @returns {Promise} A promise that resolves with the result of the deletion.
 */
export const execute = () => {
    var url = `${general.baseUrl}${deletePet.url}${petId}`;
    return http.del(url);
}