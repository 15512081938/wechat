// 获取数据
import Http from '../utils/http.js';
import config from '../config/url.js';

class Test extends Http {
    getTest(page = 1) {
        return this.axios({
            url: config.url,
            data: { page },
            method: "GET"
        });
    }
}

export default new Test;