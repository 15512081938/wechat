import config from '../config/url.js'
import Http from '../utils/http.js'
class User extends Http {
    update(data) {
        return this.axios({
            url: config.user,
            data,
            method: 'PUT'
        });
    }
}
export default new User;