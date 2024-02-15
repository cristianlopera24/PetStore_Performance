import * as storeGetService from '../../services/storeInventory.js'
import { sleep, check } from 'k6';


/**
 * Represents the options for the store inventory test.
 * @typedef {Object} StoreInventoryOptions
 * @property {Array} stages - The stages for the test.
 */

/**
 * The options for the store inventory test.
 * @type {StoreInventoryOptions}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};


/**
 * Function to test the store inventory retrieval by Id.
 */
export default function () {
    const response = storeGetService.execute();
    check(response, {
        'Get store inventory by Id Status is 200': (r) => r.status === 200,
    });
}