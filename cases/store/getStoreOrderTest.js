import * as storeOrderGetService from '../../services/getStoreOrder.js'
import { sleep, check } from 'k6';

/**
 * Represents the options for the getStoreOrderTest.
 * @typedef {Object} Options
 * @property {Array} stages - The stages for the test.
 */

/**
 * The options for the getStoreOrderTest.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

/**
 * Retrieves a store order by Id and checks if the response status is 200.
 */
export default function () {
    const response = storeOrderGetService.execute();
    check(response, {
        'Get store order by Id Status is 200': (r) => r.status === 200,
    });
}