<template>
  <div class='' style="padding: 32px 64px;">
    组件A
    <ComponentA></ComponentA>
    <div ref="div" style="width: 200px;">这事div</div>
  </div>
</template>

<script>
import ComponentA from './Component-b'
// iview组件库内置得一些函数 
// deepCopy  iview得深拷贝得方法  getStyle 获取元素得样式
import { findComponentUpward, findBrothersComponents, deepCopy, getStyle } from 'iview/src/utils/assist'
import { get } from 'https';
export default {
  name: 'componentA',
  data() {
    return {
      value: 'a'
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {
    // console.log('parent===', this.$parent)
    // console.log(findComponentUpward(this, 'componentParent'))
    // console.log(findBrothersComponents(this, 'componentB', false)) // 第三个参数 决定 是否 包含自身
    let obj = { a: 1 }
    let obj2 = deepCopy(obj)
    obj2.a = 2
    console.log(obj.a)
    console.log(getStyle(this.$refs.div, 'width'))
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { ComponentA },
}
</script>

<style lang='scss' scoped>

</style>