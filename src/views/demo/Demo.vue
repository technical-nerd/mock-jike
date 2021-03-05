<template>
  <h1>demo.vue</h1>
  <trend-list></trend-list>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import popBox from '/Views/components/pop-box.vue'
import TrendListComponent from '/Views/components/trend-list.vue'

export default defineComponent({
  name: "Demo",
  components: {
    'pop-box': popBox,
    'trend-list':TrendListComponent
  },
  data() {
    return {
      visible: false
    }
  }
})
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
  height: 100px;
  background-image: url('/Images/agree.svg');
}
</style>
