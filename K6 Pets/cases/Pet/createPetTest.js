import * as petService from '../../services/createPet.js'
import { sleep, check } from 'k6';

/**
 * Options for creating a pet test.
 * @typedef {Object} CreatePetTestOptions
 * @property {Array<Object>} stages - The stages of the test.
 */

/**
 * The options for creating a pet test.
 * @type {CreatePetTestOptions}
 */
export let options = {
    stages: [
        { duration: '30s', target: 100 },
        { duration: '1m30s', target: 100 },
        { duration: '20s', target: 140 }
    ]
};

/**
 * Function to create a pet and check the response status.
 */
export default function () {
    const response = petService.execute();
    check(response, {
        'Create Pet Status is 200': (r) => r.status === 200,
    });
}
