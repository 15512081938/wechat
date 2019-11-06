import Http from './utils/http.js';
import config from './config/url.js';
import cache from './utils/cache.js';
const http = new Http;
App({
  onLaunch() {
    if (!cache.has('openid')) {
      wx.login({
        timeout: 10000,
        success: ({ code }) => {
          http.axios({
            url: config.login,
            data: { code },
          }).then(res => {
            cache.forever('openid', res.data.openid);
          });
        }
      })
    }
  }
})
