import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as createUser from '../resources/services/user/createUser.js';

const payload = JSON.stringify(createUser.body);

const params = {
    headers: createUser.headers
};

export const execute = () => {
    var url = `${general.baseUrl}${createUser.url}`;
    return http.post(url, payload, params);
}