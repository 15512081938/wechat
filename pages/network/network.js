// 将数据返回到视图里
import test from '../../models/Test.js';
Page({
  data: {
    tests: []
  },
  onLoad(options) {
    test.getTest().then(res => {
      this.setData({
        tests: res.data.data
      });
      console.log(this.data.tests);
    });
  }
})