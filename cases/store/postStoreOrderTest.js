import * as postStoreOrder from '../../services/postStoreOrder.js'
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 100 },
        { duration: '1m30s', target: 100 },
        { duration: '20s', target: 140 }
    ]
};

export default function () {
    const response = postStoreOrder.execute();
    check(response, {
        'Create store order Status is 200': (r) => r.status === 200,
    });
}