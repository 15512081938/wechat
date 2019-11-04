// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listdata:[
      {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },{
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    }
    ,
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    },
    {
      left:"https://img10.360buyimg.com/n2/s240x240_jfs/t1/104486/29/1312/156174/5dbd89f3E432676b8/83fea7f98979795e.jpg!q70.jpg",
      logo:"https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png",
      title:"vivo iQOO Neo 855版 6GB+128GB 电光紫 骁龙855处理器 33W超快闪充 4500mAh大电池游戏手机 全网通4G手机",
      price:"2298",
      jdzy:"https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",
      intro:"3400+评价  好评率96%",
      qjd:"vivo京东自营官方旗舰店"
    }
  ],
  topnum:0,
  show:'hide'
  },

  gotop(){
    this.setData({
      topnum:0
    })
  },

  scroll(e){
    let scrollTop =e.detail.scrollTop;
    console.log(scrollTop);
    let show ='hide';
    if(scrollTop >=100){
      show='show'
    }
    this.setData({
      show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onShareAppMessage() {
    return {
      title: '分享到小贝贝',
      path: '/pages/detail/detail',
      imageUrl: 'https://wx.1314000.cn/share.png',
    };
  }
})