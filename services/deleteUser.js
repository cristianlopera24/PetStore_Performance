import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as deleteUser from '../resources/services/user/deleteUser.js';

export const execute = () => {
    var url = `${general.baseUrl}${deleteUser.url}`;
    return http.del(url);
}