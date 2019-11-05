// http请求类
export default class Http {
    axios({ url, data = {}, method = 'GET' }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                method,
                success: res => resolve(res),
                fail: err => reject(err)
            });
        })
    }
}