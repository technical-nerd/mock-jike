<template>
  <div class="container">
    <div class="title">未完成任务{{result.undone}}个，已完成任务{{result.finished}}个</div>
    <ul class="list-group">
      <li class="list-group-item enter">
        <input
          type="text"
          class="form-control"
          placeholder="回车输入"
          v-model="inputItem"
          @keydown.enter="onInput"
        />
      </li>
      <template v-for="(item,index) in undone" :key="index">
        <li class="list-group-item" @click="()=>item.checked=!item.checked">
          <div class="row">
            <div class="col-md-4">
              <input type="checkbox" v-model="item.checked" />
            </div>
            <div class="col-md-4">{{item.text}}</div>
            <div class="col-md-4">
              <button type="button" class="close" aria-label="Close" @click.stop="removeItem">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type TodoItem = { text: string; checked: boolean };

export default defineComponent({
  mounted() {},
  data() {
    return {
      inputItem: "",
      undone: <TodoItem[]>[],
    };
  },
  computed: {
    result():object {
      const undone = this.undone.filter((item) => !item.checked).length;
      return {
        undone,
        finished: this.undone.length - undone,
      };
    },
  },
  methods: {
    onInput() {
      if(this.inputItem.trim().length===0){
        return;
      }
      this.undone.push({ text: this.inputItem, checked: false });
      this.inputItem = "";
    },
    removeItem(index: number) {
      this.undone.splice(index, 1);
    },
  },
});
</script>
<style src="@/views/Todo.scss" lang="scss"></style>