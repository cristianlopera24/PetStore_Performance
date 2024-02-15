import * as storeGetService from '../../services/storeInventory.js'
import { sleep, check } from 'k6';

/**
 * The options for the getPetTest script.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

/**
 * Function to test the retrieval of a pet by its ID.
 */
export default function () {
    const response = storeGetService.execute();
    check(response, {
        'Get store inventory by Id Status is 200': (r) => r.status === 200,
    });
}