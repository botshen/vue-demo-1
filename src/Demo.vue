<template>
  <div class="red">
<!--    {{ n }}-->
<!--    <button @click="add">+1</button>-->
    这里是Demo的内部
    {{message}}
    <button @click="fn">call fn</button>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     n: 0,
  //     array: [1, 2, 3, 4, 5, 6, 7, 8]
  //   }
  // },
  // created() {
  //   console.log("我还没出现在页面中")
  // },
  // mounted() {
  //   // debugger
  //   console.log("我已经出现在页面中")
  // },
  // updated() {
  //   console.log("更新了")
  //   console.log(this.n)
  // },
  // destroyed() {
  //   console.log("已经消亡了")
  // },
  // methods: {
  //   add() {
  //     this.n += 1
  //   },
  // },
  props:['message','fn']
}
</script>

<style scoped >
.red{
  color: red;
  border: 1px solid red;
}
</style>