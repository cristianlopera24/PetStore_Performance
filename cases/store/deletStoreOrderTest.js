import * as deleteStoreOrder from '../../services/deleteStoreOrder.js'
import { sleep, check } from 'k6';

/**
 * Represents the options for the store order deletion test.
 * @typedef {Object} Options
 * @property {Array} stages - The stages of the test.
 */

/**
 * The options for the store order deletion test.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '1m', target: 140 },
        { duration: '20s', target: 180 },
        { duration: '1m30s', target: 180 }
    ]
};

/**
 * Deletes a store order and checks if the response status is 200.
 */
export default function () {
    const response = deleteStoreOrder.execute();
    check(response, {
        'Delete store order Status is 200': (r) => r.status === 200,
    });
}