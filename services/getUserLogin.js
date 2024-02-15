import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as getUserLogin from '../resources/services/user/getUserLogin.js';

export const execute = () => {
    var url = `${general.baseUrl}${getUserLogin.url}`;
    return http.get(url);
}
