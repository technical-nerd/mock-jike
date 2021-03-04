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
import { computed, defineComponent, ref } from "vue";

type TodoItem = { text: string; checked: boolean };

export default defineComponent({
  setup() {
    var inputItem = ref("");
    var undone = ref(<TodoItem[]>[]);

    return {
      inputItem:ref(""),
      undone:ref(<TodoItem[]>[]),
      result: computed(() => {
        const undoneCnt = undone.value.filter((item) => !item.checked).length;
        return {
          undone: undoneCnt,
          finished: undone.value.length - undoneCnt,
        };
      }),
      onInput() {
        if (inputItem.value.trim().length == 0) {
          return;
        }
        undone.value.push({ text: inputItem.value, checked: false });
        inputItem.value = "";
      },
      removeItem(index: number) {
        undone.value.splice(index, 1);
      },
    };
  },
});
</script>
<style src="/@/views/Todo.scss" lang="scss"></style>
