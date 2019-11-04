// pages/e/e.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showtime: 0,
    starttimer: 0,

    itemse: [
      { title: "我是第一", intro: "我是第一" },
      { title: "我是第二", intro: "我是第二" },
      { title: "我是第三", intro: "我是第三" }
    ],
    shownow: ['now', '', ''],
    hideintro: [false, true, true],
    background:['blue','green','pink'],
    current:0,

    scroll:[],
    topnum:0,
    show:'hide',

    richtext:`<div class="show-content-free">
    <blockquote><p>一、获取<br></p></blockquote><p></p><div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 336px;">
<div class="image-container-fill" style="padding-bottom: 36.13%;"></div>
<div class="image-view" data-width="930" data-height="336"><img data-original-src="//upload-images.jianshu.io/upload_images/1400752-3dee8474fe14c234.png" data-original-width="930" data-original-height="336" data-original-format="image/png" data-original-filesize="24563"></div>
</div>
<div class="image-caption"></div>
</div><p>CURL方法：<br></p><div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 260px;">
<div class="image-container-fill" style="padding-bottom: 32.42%;"></div>
<div class="image-view" data-width="802" data-height="260"><img data-original-src="//upload-images.jianshu.io/upload_images/1400752-1803a2c0a09a950a.png" data-original-width="802" data-original-height="260" data-original-format="image/png" data-original-filesize="17001"></div>
</div>
<div class="image-caption"></div>
</div><p>file_get_contents方法：</p><div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 211px;">
<div class="image-container-fill" style="padding-bottom: 26.150000000000002%;"></div>
<div class="image-view" data-width="807" data-height="211"><img data-original-src="//upload-images.jianshu.io/upload_images/1400752-fcda7f0b824ffcc7.png" data-original-width="807" data-original-height="211" data-original-format="image/png" data-original-filesize="13436"></div>
</div>
<div class="image-caption"></div>
</div><p></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p></p>
  </div>`,

    list:['a','aa','aaa','b','bb','bbb'],
    inputdata:[],
    timer:null,

    date:''
  },
  onShareAppMessage(){
    return {
      title:'小宝',
      imageUrl:'https://wx.1314000.cn/banner1.png',
      path:'/pages/e/e'
    }
  },

  bindDateChange(e){
    this.setData({
      date:e.detail.value
    })
  },

  formSubmit(e){
    console.log(e.detail.value)
  },

  inputfn(e){
    clearTimeout(this.data.timer);
    let keyword = e.detail.value;
    let inputdata = [];
    this.data.timer= setTimeout(()=>{
      let reg = new RegExp(keyword);
      inputdata = this.data.list.filter(value => reg.test(value));
      this.setData({
        inputdata
      })
    },600);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let scroll = [];
    for(let i=0 ;i<100 ;i++){
      scroll.push(`您的id为${i}`);
    }
    this.setData({
      scroll
    })
  },

  gotop(){
    this.setData({
      topnum:0
    })
  },

  scroll(e){
    let topnum = e.detail.scrollTop;
    console.log(topnum);
    
    let show = 'hide';
    if(topnum >= 200){
      show = 'show'
    }
    this.setData({
      show
    })
  },

  // onPullDownRefresh(){
  //   console.log('下拉了');
  // },

  // upper(e){
  //   console.log(e);
  // },
  
  // lower(e){
  //   console.log('底部')
  // },


  // change(e){
  //   this.setData({
  //     current:e.detail.current+1
  //   })
  // },   // 实现备注下面代码 并current:1

  changes(e){
    let i = e.detail.current;
    this.swiperfn(i);
  },

  shownavs(e){
    let i = e.target.dataset.index;
    this.swiperfn(i);
  },

  swiperfn(current){
    let shownow = this.data.shownow.map(value => '');
    shownow[current] = 'now';
    this.setData({
      shownow,
      current
    });
  },

  shownav(e) {
    let i = e.target.dataset.index;
    let shownow = this.data.shownow.map(value => '');
    let hideintro = this.data.hideintro.map(value => true);
    shownow[i] = 'now';
    hideintro[i] = false;
    this.setData({
      shownow,
      hideintro
    })
  },

  click(e) {
    console.log(e);
  },

  starttime(e) {
    this.data.starttimer = new Date().getTime();
  },

  endtime(e) {
    let endtimer = new Date().getTime();
    this.setData({
      showtime: (endtimer - this.data.starttimer) / 1000
    })
  },

  eventfn(e) {
    let { id, name } = e.target.dataset;
    console.log(e.target.dataset);
    console.log(`${id} -- ${name}`);
  },

  typefn(e) {
    let { id } = e.target.dataset;
    if (id instanceof Array) {
      console.log('Array');
    } else {
      console.log(typeof id);
    }
  },


})