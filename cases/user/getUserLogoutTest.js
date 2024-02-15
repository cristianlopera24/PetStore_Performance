import * as getUserLogoutService from '../../services/getUserLogout.js'
import { sleep, check } from 'k6';

/**
 * Options for the getUserLogoutTest script.
 * @typedef {Object} Options
 * @property {Array} stages - The stages configuration for the script.
 */

/**
 * The options for the getUserLogoutTest script.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

/**
 * Performs a test for user logout.
 */
export default function () {
    const response = getUserLogoutService.execute();
    check(response, {
        'Get user logout by Id Status is 200': (r) => r.status === 200,
    });
}
