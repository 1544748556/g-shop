<template>
  <div class="back-top">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    // topClick: function () {
    //   this.$emit("backTop");
    // },
  },
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.back-top img {
  width: 50px;
  height: 50px;
}
</style>
