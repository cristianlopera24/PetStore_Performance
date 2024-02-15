import { sleep, check } from 'k6';
import * as createPetTest from '../services/createPet.js';
import * as getPetTest from '../services/getPet.js';
import * as updatePetTest from '../services/updatePet.js';
import * as deletePetTest from '../services/deletePet.js';
import * as getStoreOrderTest from '../services/getStoreOrder.js';
import * as postStoreOrderTest from '../services/postStoreOrder.js';
import * as storeInventoryTest from '../services/storeInventory.js';
import * as deleteStoreOrderTest from '../services/deleteStoreOrder.js';
import * as createUserTest from '../services/createUser.js';
import * as getUserLoginTest from '../services/getUserLogin.js';
import * as getUserLogoutTest from '../services/getUserLogout.js';
import * as deleteUserTest from '../services/deleteUser.js';

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
        { duration: '3s', target: 10 },
        { duration: '3s', target: 10 },
        { duration: '2s', target: 14 },
        { duration: '1s', target: 14 },
        { duration: '2s', target: 18 },
        { duration: '1s', target: 18 },
        { duration: '3s', target: 0 },
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
    //Pet
    createPetTest.execute();
    sleep(1);
    getPetTest.execute();
    sleep(1);
    updatePetTest.execute();
    sleep(1);
    deletePetTest.execute();

    //store
    getStoreOrderTest.execute();
    sleep(1);
    postStoreOrderTest.execute();
    sleep(1);
    storeInventoryTest.execute();
    sleep(1);
    deleteStoreOrderTest.execute();
    sleep(1);

    //user
    createUserTest.execute();
    sleep(1);
    getUserLoginTest.execute();
    sleep(1);
    getUserLogoutTest.execute();
    sleep(1);
    deleteUserTest.execute();
    //we can execute the same test multiple times
}
