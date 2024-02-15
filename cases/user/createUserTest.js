import * as createUser from '../../services/createUser.js'
import { sleep, check } from 'k6';

/**
 * Options for creating a user test.
 * @typedef {Object} UserTestOptions
 * @property {Array<Object>} stages - The stages of the test.
 */

/**
 * The options for creating a user test.
 * @type {UserTestOptions}
 */
export let options = {
    stages: [
        { duration: '30s', target: 100 },
        { duration: '1m30s', target: 100 },
        { duration: '20s', target: 140 }
    ]
};

/**
 * Creates a user and checks if the response status is 200.
 */
export default function () {
    const response = createUser.execute();
    check(response, {
        'Create user Status is 200': (r) => r.status === 200,
    });
}
