<!--
 * @Description : 
 * @Date        : 2021-11-22 04:33:17 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-22 06:00:08 +0800
 * @LastEditors : JackChou
-->
<template>
  <div>
    <span class="rating">{{ msg }}</span>
    <my-rating
      ref="myRating"
      :max-value="maxValue"
      :value="value"
      is-show
      :person.prop="{ name: 'jack' }"
      :personArray.prop="persons"
      @ratingChange="ratingChange"
      :methodFromParent.prop="methodFromParent"
    />
    <button @click="changeRating">changeRating</button>
  </div>
</template>

<script>
export default {
  name: "TestStencil",
  data() {
    return {
      msg: "Hello web components in stencil!",
      maxValue: 5,
      value: 2,
      persons: [{ name: "jack", age: 30 }],
    };
  },
  mounted() {
    console.log("Home mounted");
    const myRatingComponent = document.querySelector("my-rating");
    setTimeout(() => {
      // myRatingComponent.value = 4;
      myRatingComponent.setAttribute("value", 4);
      console.log("set value");
      this.maxValue = 10;
      myRatingComponent.getValue({ maxValue: 10, value: 5 }).then((value) => {
        console.log("get value", value);
      });
      console.log(this.$refs.myRating);
    }, 2000);

    // myRatingComponent.addEventListener('ratingChange', ({ detail }) => {
    //   console.log('rating changed', detail)
    //   // alert(`rating change ${detail.value}`)
    // })
  },
  methods: {
    showConfirm() {
      // TODO如何知道用户点了确定或者取消？
      this.$myConfirm("删除后不能恢复", "确定删除吗？");
    },
    changeRating() {
      this.value = Math.floor(Math.random() * this.maxValue);
      this.persons.push({ age: 30 * Math.random() });
    },
    ratingChange({ detail }) {
      console.log("rating changed", detail);
      // alert(`rating change ${detail.value}`);
    },
    methodFromParent(value, person, maxValue) {
      console.log(value, person, maxValue);
      return Math.min(value + Math.random(), person.age || 0, maxValue);
    },
  },
};
</script>

<style></style>
