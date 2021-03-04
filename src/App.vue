<template>
  <global-header></global-header>
  <div class="content">
    <div class="content__inner">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import GlobalHeader from '/@/views/components/global-header/global-header.vue'

export default defineComponent({
  components: {
    'global-header': GlobalHeader
  },
  methods: {}
})
</script>
<style lang="scss" src="./views/public.scss"></style>
<style lang="scss" scoped>
.content {
  &__inner {
    max-width: 900px;
    margin: 10px auto 0;
  }
}
</style>
