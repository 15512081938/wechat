// components/cp/cp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:String,
      value:"cp"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      this.triggerEvent('myfn',{ value:this.properties.value })
    }
  }
})
