// http请求类
export default class Http {
    axios({ url, data = {}, method = 'GET' }) {
        wx.showLoading({
            title: 'Loading...',
            mask: true
        });
        url = "http://www.jackbao.com/api/v1" + url;
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                method,
                success: res => resolve(res),
                fail: err => reject(err),
                complete: () => {
                    wx.hideLoading();
                }
            });
        })
    }
}