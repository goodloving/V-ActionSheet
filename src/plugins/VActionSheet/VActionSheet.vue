<template>
  <div v-if="showAS">
    <div class="v-actionsheet-cover" @click="_cancel"></div>
    <div class="v-actionsheet-page">
      <div
        :class="
          index === menusLength
            ? 'v-actionsheet-item-last'
            : 'v-actionsheet-item'
        "
        v-for="(item, index) in memusList"
        :key="index"
        @click.stop="_confirm(item)"
      >
        <span class="item-text">{{ item }}</span>
      </div>
    </div>
    <div class="v-actionsheet-cancel">
      <div class="v-actionsheet-cancle" @click.stop="_cancel">
        <span class="item-cancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showAS: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    memusList() {
      let menuList = [];
      for (var key in this.menus) {
        menuList.push(this.menus[key]);
      }
      return menuList;
    },
    menusLength() {
      return this.memusList.length - 1;
    }
  },
  methods: {
    show() {
      this.showAS = true;
    },
    hide() {
      this.showAS = false;
    },
    _confirm(index) {
      this.$emit("main-btn-clicked", index);
      this.hide();
    },
    _cancel() {
      this.$emit("sub-btn-clicked");
      this.hide();
    }
  }
};
</script>
<style lang="less" scoped>
.v-actionsheet-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(75, 75, 75, 0.5);
  z-index: 10000;
}
.v-actionsheet-page {
  position: fixed;
  bottom: 55px;
  right: 5%;
  left: 5%;
  width: 90%;
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  z-index: 19999;
  .v-actionsheet-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    border-bottom: 0.5px solid #e9e7e7;
  }
  .v-actionsheet-item-last {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
  .item-text {
    font-size: 17px;
  }
  .v-actionsheet-cancle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
}
.v-actionsheet-cancel {
  position: fixed;
  bottom: 5px;
  right: 5%;
  left: 5%;
  width: 90%;
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  z-index: 19999;
  .item-cancel {
    color: #3c86f5;
    font-size: 17px;
  }
  .v-actionsheet-cancle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
}
</style>
