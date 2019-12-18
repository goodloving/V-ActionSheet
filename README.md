### VActionSheet
#### 引入方式：
  import {VActionSheet} from 'v-actionsheet'
  Vue.use(VActionSheet) 

#### 属性：
---------------------------
属性名    | 类型     | 描述
-------- | ------- | ------
menus | Objiect | menus: {
                    gaodeMap: "高德地图",
                    baiduMap: "百度地图",
                    iosMap: "苹果地图"
                  }
onConfirm  | Function | 接受点击的item的值，根据值进行具体操作，完成后隐藏隐藏ActionSheet和蒙层区
onCancel  | Function | 点击蒙层区和“取消”隐藏ActionSheet和蒙层区

#### 使用：
    this.$actionSheet.show({
      menus: this.menus,
      onConfirm: index => this.onConfirm(index),
      onCancel: () => this.onCancel()
    });

##### onConfirm和onCancel函数：
    onCancel() {
      this.$actionSheet.hide();  //隐藏
    },
    onConfirm(index) {
      alert(index);  //具体操作
    }