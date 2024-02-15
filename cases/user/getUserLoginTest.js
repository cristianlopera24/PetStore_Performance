import * as getUserService from '../../services/getUserLogin.js'
import { sleep, check } from 'k6';

/**
 * Options for the getUserLoginTest script.
 * @typedef {Object} Options
 * @property {Array} stages - The stages of the test.
 */

/**
 * The options for the getUserLoginTest script.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

/**
 * Function to test the getUserLogin functionality.
 */
export default function () {
    const response = getUserService.execute();
    check(response, {
        'Get user by Id Status is 200': (r) => r.status === 200,
    });
}
