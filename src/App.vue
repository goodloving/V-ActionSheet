<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>基于Vue框架的ActionSheet插件</h2>
    <button class="btn-style" @click="onClickVActionSheet">
      V-ActionSheet
    </button>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      menus: {
        "1": "百度",
        "2": "阿里",
        "3": "腾讯"
      }
    };
  },
  methods: {
    onClickVActionSheet() {
      this.$vactionsheet.show({
        menus: this.menus,
        onConfirm: item => this.onConfirm(item),
        onCancel: () => this.OnCancel()
      });
    },
    onConfirm(item) {
      alert(item);
    },
    onCancel() {
      this.$vactionsheet.hide();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-style {
  border: 1px solid #000;
  background: #ffffff;
  border-radius: 5px;
}
</style>
