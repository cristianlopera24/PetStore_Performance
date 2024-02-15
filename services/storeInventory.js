import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as storeInventory from '../resources/services/store/storeInventory.js';

/**
 * Executes the createPet function.
 * @returns {Promise} A promise that resolves with the result of the createPet function.
 */
export const execute = () => {
    var url = `${general.baseUrl}${storeInventory.url}`;
    return http.get(url);
}