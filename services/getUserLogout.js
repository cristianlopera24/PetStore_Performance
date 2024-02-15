import http from 'k6/http';
import * as general from '../resources/services/general.js';
import * as getUserLogout from '../resources/services/user/getUserLogout.js';

export const execute = () => {
    var url = `${general.baseUrl}${getUserLogout.url}`;
    return http.get(url);
}
