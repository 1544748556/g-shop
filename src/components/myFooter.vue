<template>
  <div>
    <div v-if="total" class="todo-footer">
      <label>
        <input @click="checkAll" :checked="isAll" type="checkbox" />
      </label>
      <span>
        <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
      </span>
      <button @click="clearAll" class="btn btn-danger">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  data() {
    return {};
  },
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  components: {},
  mounted() {},
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      this.clearAllTodo();
    },
  },
  computed: {
    // 全部
    total() {
      return this.todos.length;
    },
    // 已完成
    doneTotal() {
      let i = 0;
      this.todos.forEach((todo) => {
        if (todo.done) i++;
      });
      return i;
    },
    // 全选
    isAll() {
      return this.doneTotal === this.total && this.total > 0;
    },
  },
};
</script>

<style  scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>