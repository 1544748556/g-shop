<template>
  <div class="goodlist">
    <!-- <grid-view> -->
    <goods-list-item
      v-for="(item, index) in GoodsList"
      :key="index"
      :goods="item"
    ></goods-list-item>
    <!-- </grid-view> -->
  </div>
</template>

<script>
// import GridView from "common/gridView/GridView";
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    // GridView,
    GoodsListItem,
  },
  props: {
    GoodsList: {
      // type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.goodlist {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
