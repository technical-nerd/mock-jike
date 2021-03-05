<template>
  <div class="pop-box" v-show="visible" @click.stop>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "pop-box",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // console.log(this.$refs['sb'])
    // document.body.onclick = (ev) => {
    //   if (ev.target !== this.$refs['pop-box']) {
    //     this.visible = false;
    //   }
    // };
  },
})
</script>

<style scoped lang="scss">
.pop-box {
  min-height: 20px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 2px 15px;
}
</style>
<style lang="scss">
.pop-box .hover-item:hover {
  background-color: rgb(242, 245, 248);
}
</style>
