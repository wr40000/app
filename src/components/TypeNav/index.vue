<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex()">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <!-- 添加可以根据currentIndex的值，而决定元素是否有.cur这个属性   :class="{cur:currentIndex==index}" -->
            <div
              class="item"
              v-for="(c1, index) in categoryList.slice(0, 16)"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  href="javascript:"
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.category1Id"
                  >{{ c1.categoryName }}</a
                >
                <!-- 为每一个a标签绑定godearch同样也很麻烦 -->
                <!-- <a @click="gosearch">{{ c1.categoryName }}</a> -->
                <!-- router-link太消耗内存，不建议使用
                <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        href="javascript:"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.category2Id"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          href="javascript:"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.category3Id"
                          >{{ c3.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
//计算属性简写
import { mapState } from "vuex";
//按需引入  因为是默认暴露，所以不予要加上{throttle}
import throttle from "lodash";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  mounted() {
    this.$store.dispatch("categoryList");
    // console.log(this.$store);
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        // console.log(state.home.categoryList);
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    // changeIndex(index) {
    //   console.log(index);
    //   this.currentIndex = index;
    // },
    changeIndex: _.throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = 100;
    },
    goSearch(event) {
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      console.log(event.target.dataset);
      // console.log(categoryname);

      if (categoryname) {
        console.log(categoryname);
        var location = { name: "search" };
        var query = { categoryName: categoryname };
      }

      if (category1id) {
        console.log(category1id);
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else if (category3id) {
        query.category3Id = category3id;
      }

      location.query = query;
      this.$router.push(location);
    },
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          //css完成二三级菜单显示和隐藏
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>