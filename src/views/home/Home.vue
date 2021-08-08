<template>
  <div id="home">
    <!-- 头部 -->
    <NavBar
      ><div slot="center">购物街</div>
      <div slot="left">
        <img class="logo" src="../../assets/img/home/gouwu.png" alt="" /></div
    ></NavBar>
    <TabControl
      v-show="isTabFixed"
      class="fixed"
      @itemClick="tabClick"
      :titles="['流行', '新款', '精选']"
    ></TabControl>
    <!-- 滚动组件 -->
    <Scroll
      class="content"
      ref="Scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showGoodsList"
      :pull-up-load="true"
      :probe-type="3"
    >
      <div>
        <!-- 轮播图  -->
        <HomeSwiper :banners="banners" ref="hSwiper"></HomeSwiper>
        <!-- 十点抢券，好物特卖，内购福利，初秋上新 -->
        <FeatureView :features="recommends"></FeatureView>
        <!-- 本周流行 -->
        <RecommendView></RecommendView>
        <!-- 流行，新款，精选 -->
        <TabControl
          @itemClick="tabClick"
          :titles="['流行', '新款', '精选']"
          ref="tabControl"
          class="tabControl"
        ></TabControl>
        <!-- 具体的商品的展示 -->
        <GoodsList :GoodsList="showGoodsList"></GoodsList>
      </div>
    </Scroll>
    <BackTop @click.native="backTop" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="" />
    </BackTop>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import RecommendView from "./childComps/RecommendView";
import TabControl from "content/tabControl/TabControl";
import GoodsList from "./childComps/GoodsList.vue";
import Scroll from "common/scroll/Scroll";
import BackTop from "content/backTop/BackTop";
import { getHomeMultidata, getHomeData, RECOMMEND, BANNER } from "network/home";
import { NEW, POP, SELL, BACKTOP_DISTANCE } from "@/common/const";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    BackTop,
    HomeSwiper,
    FeatureView,
    RecommendView,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: POP,
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: false,
    };
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getMultiData();
    // 2.请求首页商品数据
    this.getHomeProducts(POP);
    this.getHomeProducts(NEW);
    this.getHomeProducts(SELL);
  },
  activated: function () {
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function () {
    this.$refs.hSwiper.stopTimer();
  },
  // updated() {
  //   // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  //   // console.log(this.tabOffsetTop);
  // },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
    },
    contentScroll(position) {
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop;

      // 2.决定backTop是否显示
      this.showBackTop = position.y < -BACKTOP_DISTANCE;
    },
    loadMore() {
      this.getHomeProducts(this.currentType);
    },
    backTop() {
      this.$refs.Scroll.scrollTo(0, 0, 500);
    },
    /**
     * 网络请求相关方法
     */
    getMultiData() {
      getHomeMultidata().then((res) => {
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        this.$nextTick(() => {
          this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        });
      });
    },
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
        this.$refs.Scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.logo {
  width: 35px;
  height: 35px;
  margin: 4px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.fixed {
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
}
</style>
