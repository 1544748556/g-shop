<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="item.done"
          @click="handleCheck(item.id)"
        />
        <span>{{ item.title }}</span>
      </label>
      <button @click="handleDelete(item.id)" class="btn btn-danger">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  //   接受item对象
  props: ["item", "checkTodo", "deleteTodo"],
  components: {},
  mounted() {},
  methods: {
    handleCheck(id) {
      // 通知app组件;
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style  scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>