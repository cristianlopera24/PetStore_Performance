import * as createUser from '../../services/createUser.js'
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 100 },
        { duration: '1m30s', target: 100 },
        { duration: '20s', target: 140 }
    ]
};

export default function () {
    const response = createUser.execute();
    check(response, {
        'Create user Status is 200': (r) => r.status === 200,
    });
}
