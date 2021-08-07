<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addtodo" />
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter
          :clearAllTodo="clearAllTodo"
          :checkAllTodo="checkAllTodo"
          :todos="todos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List";
import MyFooter from "@/components/myFooter";
import MyHeader from "@/components/myHeader.vue";
export default {
  name: "App",
  // 注册组件
  components: {
    MyHeader,
    List,
    MyFooter,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    // 添加一个todo
    addtodo(todos) {
      this.todos.unshift(todos);
    },
    // 勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个待办事项
    deleteTodo(id) {
      this.todos = this.todos.filter((q) => q.id !== id);
    },
    // 全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    // 清除已完成
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
