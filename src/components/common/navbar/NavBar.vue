<template>
  <div id="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center">标题</slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav-bar {
  position: relative;
  width: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.08);
  background-color: var(--color-tint);
  color: #fff;
}

.nav-left {
  width: 60px;
}

.nav-center {
  flex: 1;
}

.nav-right {
  width: 60px;
}
</style>
