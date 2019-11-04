// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/106338/8/1503/237140/5dbfdb5aE004fdc00/6d480a02a7fb3af7.jpg!q80.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/84665/22/15023/127066/5dbfdb68Ec08dab4e/2862b3dc3dc39933.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/62430/22/14242/272666/5dba900dE4c78786e/89994764bd855192.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/58382/1/14765/190442/5dba9010E204ef230/85ffb23daf13f59c.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/76223/21/14135/179901/5dba9011E8d37ff9a/6da030daf36d47db.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/81323/35/14193/241492/5dba9012Ebdc70e2d/370582542375435f.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/49058/10/14727/305761/5dba900eEbfb16310/2cd0f62890f458b9.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/61833/27/14269/239884/5dba900fEae517e92/01695f810dee1b3b.jpg!q70.dpg.webp"
    ],
    current: 1,
    id:'',
    jdzy:'',
    logo:'',
    price:'',
    title:''
  },

  change(e) {
    this.setData({
      current: e.detail.current + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.data.id=options.id,
    this.data.jdzy=options.jdzy,
    this.data.logo=options.logo,
    this.data.price=options.price,
    this.data.title=options.title
    this.setData({
      id:options.id,
      jdzy:options.jdzy,
      logo:options.logo,
      price:options.price,
      title:options.title
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  // wepy.
  onShareAppMessage() {
    return {
      title: '分享到小贝贝',
      path: '/pages/details/details',
      imageUrl: 'https://wx.1314000.cn/share.png',
    };
  }
})