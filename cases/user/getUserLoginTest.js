import * as getUserService from '../../services/getUserLogin.js'
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

export default function () {
    const response = getUserService.execute();
    check(response, {
        'Get user by Id Status is 200': (r) => r.status === 200,
    });
}
