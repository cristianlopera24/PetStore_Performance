import { sleep, check } from 'k6';
import * as createPetTest from '../services/createPet.js';
import * as getPetTest from '../services/getPet.js';
import * as updatePetTest from '../services/updatePet.js';
import * as deletePetTest from '../services/deletePet.js';

/**
 * Options object for load testing.
 * @typedef {Object} Options
 * @property {Array} stages - An array of stages for load testing.
 */

/**
 * Represents the load testing options.
 * @type {Options}
 */
export let options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 14 },
        { duration: '1m', target: 14 },
        { duration: '20s', target: 18 },
        { duration: '1m30s', target: 18 },
        { duration: '30s', target: 0 },
    ]
};

/**
 * Sets up the test environment.
 */
export function setup() {
}

/**
 * Executes a series of tests for creating, retrieving, updating, and deleting a pet.
 */
export default function () {
    createPetTest.execute();
    sleep(1);
    getPetTest.execute();
    sleep(1);
    updatePetTest.execute();
    sleep(1);
    deletePetTest.execute();
}
