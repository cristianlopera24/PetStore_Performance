import * as storeOrderGetService from '../../services/getStoreOrder.js'
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 }
    ]
};

export default function () {
    const response = storeOrderGetService.execute();
    check(response, {
        'Get store order by Id Status is 200': (r) => r.status === 200,
    });
}