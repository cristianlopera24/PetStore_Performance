import * as getService from '../../services/getPet.js'
import { sleep, check } from 'k6';

/**
 * Options for the getPetTest script.
 * @typedef {Object} Options
 * @property {Array} stages - The stages for the load test.
 */

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
    const response = getService.execute();
    check(response, {
        'Get Pet by Id Status is 200': (r) => r.status === 200,
    });
}
