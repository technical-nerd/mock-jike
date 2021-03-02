<template ref="modal">

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "modal",
  props:{
    autoclose:{
      type:Boolean,
      default:true
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    document.body.onclick = (ev) => {
      if (ev.target !== this.$refs['modal']) {
        this.visible = false;
      }
    };
  },
})
</script>

<style scoped lang="scss">

</style>
