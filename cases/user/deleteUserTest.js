import * as deleteUserService from '../../services/deleteUser.js';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 140 },
        { duration: '20s', target: 180 },
        { duration: '1m30s', target: 180 }
    ]
};

export default function () {
    const response = deleteUserService.execute();
    check(response, {
        'Delete user Status is 200': (r) => r.status === 200,
    });
}