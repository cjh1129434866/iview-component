<template>
  <div class=''>
    <ComponentC></ComponentC>  
    <Divider></Divider> 
    <ComponentD></ComponentD> 

    <Divider></Divider>

    <div v-clickoutside="handleClose">
      <Button @click="show = true">打开一个卡片</Button>
      <Card title="卡片标题" v-show="show">
        <Button>卡片内得按钮</Button>
        <p>一些文本</p>
        <p>一些文本</p>
        <p>一些文本</p>
        <p>一些文本</p>
      </Card>
    </div>

    <Divider></Divider>
    <div class="transfer" v-transferDom :data-transfer="true">
      <p>p标签</p>
      <p>p标签</p>
      <p>p标签</p>
    </div>
  </div>
</template>

<script>
import ComponentC from '../components/Component-c'
import ComponentD from '../components/Component-d'
import clickoutside from 'iview/src/directives/clickoutside'
import transferDom from 'iview/src/directives/transfer-dom'

// 适用于ssr模式下 得 绑定事件 和 解绑事件 
import { on, off } from 'iview/src/utils/dom'

export default {
  // provide: {
  //   name: 'panghu'
  // },
  provide () {
    return {
      name: this.name
    }
  },
  directives: { clickoutside, transferDom },
  data() {
    return {
      name: 'panghu',
      show: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleClose () {
      this.show = false
    }
  },
  created() {

  },
  mounted() {
    // document.addEventListener('click', this.handleClose)
    // 在服务端编译得时候，document会报undefined；用iview得on 和 off 绑定 解绑 事件 是 不会出现这个  问题得。
    on('click', this.handleClose)
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {
    off('click', this.handleClose)
  },
  activated() {},
  components: { ComponentC, ComponentD },
}
</script>

<style lang='scss' scoped>

</style>