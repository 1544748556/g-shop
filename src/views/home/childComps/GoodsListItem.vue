<template>
  <div class="goods">
    <!-- <div
      class="goods"
      v-for="(item, index) in goods"
      :key="index"
      @click="goToDetail"
    > -->
    <img :src="goods.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">¥{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {},
    },
  },
  mounted: function () {
    //   console.log(this.goods);
  },
  methods: {
    goToDetail: function () {
      // 1.获取iid
      let iid = this.goods.iid;

      // 2.跳转到详情页面
      this.$router.push({ path: "/detail", query: { iid } });
    },
  },
  computed: {
    getImg() {
      return this.goods.img || this.goods.image || this.goods.show.img;
    },
  },
};
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  width: 45%;
  position: relative;
  margin-bottom: 15px;
  font-size: 18px;
  background-color: rgb(255, 129, 152 0.9);
  border-bottom-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
  border: 1px solid silver;
}
.goods img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
}
.goods-info {
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  text-indent: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
