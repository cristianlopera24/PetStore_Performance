import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as postStoreOrder from '../resources/services/store/postStoreOrder.js';

const payload = JSON.stringify(postStoreOrder.body);

const params = {
    headers: postStoreOrder.headers
};

/**
 * Executes the postStoreOrder function.
 * @returns {Promise} A promise that resolves with the result of the createPet function.
 */
export const execute = () => {
    var url = `${general.baseUrl}${postStoreOrder.url}`;
    return http.post(url, payload, params);
}