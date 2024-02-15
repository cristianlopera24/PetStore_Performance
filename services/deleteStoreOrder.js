import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as deleteStoreOrder from '../resources/services/store/deleteStoreOrder.js';

const StoreOrderId = 1;

export const execute = () => {
    var url = `${general.baseUrl}${deleteStoreOrder.url}${StoreOrderId}`;
    return http.del(url);
}