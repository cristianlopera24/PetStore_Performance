import * as deleteUserService from '../../services/deleteUser.js';
import { sleep, check } from 'k6';

/**
 * Options for the deleteUserTest script.
 * @type {Object}
 * @property {Array} stages - The stages of the test.
 * @property {Object} stages.duration - The duration of each stage.
 * @property {string} stages.duration - The duration in a human-readable format.
 * @property {number} stages.target - The target number of virtual users for each stage.
 */
export let options = {
    stages: [
        { duration: '1m', target: 140 },
        { duration: '20s', target: 180 },
        { duration: '1m30s', target: 180 }
    ]
};

/**
 * Deletes a user and checks if the response status is 200.
 */
export default function () {
    const response = deleteUserService.execute();
    check(response, {
        'Delete user Status is 200': (r) => r.status === 200,
    });
}