<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: function () {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick: function (index) {
      // 1.改变currentIndex,被选中增添一个颜色
      this.currentIndex = index;

      // 2.发出事件
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 1rem;
  z-index: 9;
  background: #fff;
  margin-bottom: 15px;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: #ff8198;
}

.active span {
  border-bottom: 3px solid #ff8198;
}
</style>
