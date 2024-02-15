import * as updateService from '../../services/updatePet.js'
import { sleep, check } from 'k6';

/**
 * Represents the options for updating a pet.
 * @typedef {Object} UpdatePetOptions
 * @property {Array<Object>} stages - The stages for the update operation.
 */

/**
 * The options for updating a pet.
 * @type {UpdatePetOptions}
 */
export let options = {
    stages: [
        { duration: '1m', target: 140 },
        { duration: '20s', target: 180 },
        { duration: '1m30s', target: 180 }
    ]
};

/**
 * Updates a pet and checks if the status is 200.
 */
export default function () {
    const response = updateService.execute();
    check(response, {
        'Update Pet Status is 200': (r) => r.status === 200,
    });
}