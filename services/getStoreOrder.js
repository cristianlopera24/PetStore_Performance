import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as getStoreOrder from '../resources/services/store/getStoreOrder.js';

/**
 * Executes the createPet function.
 * @returns {Promise} A promise that resolves with the result of the createPet function.
 */
export const execute = () => {
    var url = `${general.baseUrl}${getStoreOrder.url}`;
    return http.get(url);
}