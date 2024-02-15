import * as postStoreOrder from '../../services/postStoreOrder.js'
import { sleep, check } from 'k6';

/**
 * Represents the options for the store order test.
 * @type {Object}
 * @property {Array} stages - The stages of the test.
 * @property {Object} stages.duration - The duration of each stage.
 * @property {string} stages.duration - The duration of each stage in seconds or minutes.
 * @property {number} stages.target - The target number of requests per second for each stage.
 */
export let options = {
    stages: [
        { duration: '30s', target: 100 },
        { duration: '1m30s', target: 100 },
        { duration: '20s', target: 140 }
    ]
};

/**
 * Executes a test for creating a store order.
 */
export default function () {
    const response = postStoreOrder.execute();
    check(response, {
        'Create store order Status is 200': (r) => r.status === 200,
    });
}