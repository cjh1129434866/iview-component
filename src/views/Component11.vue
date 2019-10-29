<template>
  <div class='' style="padding: 32px 64px;">
    <h1>组件通信</h1>
    <br><br>
    <ComponentA ref="comA"></ComponentA>
    <ComponentB ref="comB"></ComponentB>
  </div>
</template>

<script>
import ComponentA from '../components/Component-a'
import ComponentB from '../components/Component-b'
// iview组件库内置得一些方法
import { findComponentDownward, findComponentsDownward } from 'iview/src/utils/assist'
export default {
  name: 'componentParent',
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {
    // console.log(this.$refs.comA.value)
    // console.log('children==', this.$children)
    // console.log(findComponentDownward(this, 'componentA'))
    // console.log(findComponentsDownward(this, 'componentB'))
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { ComponentA, ComponentB },
}
</script>

<style lang='scss' scoped>

</style>