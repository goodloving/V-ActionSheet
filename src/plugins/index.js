import VActionSheet from "./VActionSheet/VActionSheet";
import objectAssign from "object-assign";

let $vm;
const mergeOptions = function($vm, options) {
  const defaults = {};
  for (let i in $vm.$options.props) {
    if (i !== "value") {
      defaults[i] = $vm.$options.props[i].default;
    }
  }
  const _options = objectAssign({}, defaults, options);
  for (let i in _options) {
    $vm[i] = _options[i];
  }
};
const plugin = {
  install(vue = {}) {
    const ActionSheet = vue.extend(VActionSheet);
    if (!$vm) {
      $vm = new ActionSheet({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }

    const actionsheet = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        if (typeof options === "object" && (options.onShow || options.onHide)) {
          options.onShow && options.onShow();
        }
        this.$watcher && this.$watcher();

        $vm.$off("sub-btn-clicked");
        $vm.$off("main-btn-clicked");

        $vm.$on("sub-btn-clicked", () => {
          options && options.onCancel && options.onCancel();
        });
        $vm.$on("main-btn-clicked", index => {
          options && options.onConfirm && options.onConfirm(index);
        });
        $vm.show();
      },
      hide() {
        $vm.hide();
      },
      isVisible() {
        return $vm.showAS;
      }
    };
    vue.$vactionsheet = actionsheet;

    vue.mixin({
      created: function() {
        this.$vactionsheet = vue.$vactionsheet;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
