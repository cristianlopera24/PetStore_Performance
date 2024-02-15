import * as deleteService from '../../services/deletePet.js'
import { sleep, check } from 'k6';

/**
 * @fileoverview This file contains the options for the deletePetTest script.
 * @module deletePetTest
 */
export let options = {
    stages: [
        { duration: '1m', target: 140 },
        { duration: '20s', target: 180 },
        { duration: '1m30s', target: 180 }
    ]
};

/**
 * Deletes a pet and checks if the delete operation returns a status code of 200.
 */
export default function () {
    const response = deleteService.execute();
    check(response, {
        'Delete Pet Status is 200': (r) => r.status === 200,
    });
}