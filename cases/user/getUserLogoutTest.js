import * as getUserLogoutService from '../../services/getUserLogout.js'
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

export default function () {
    const response = getUserLogoutService.execute();
    check(response, {
        'Get user logout by Id Status is 200': (r) => r.status === 200,
    });
}
