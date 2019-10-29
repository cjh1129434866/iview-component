<template>
  <div class='' style="padding: 32px 64px;">
    <h1>Tabs 标签页关闭前得二次确认</h1>
    <br><br>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove" :beforeRemove="handleBeforeRemove">
      <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
      <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
      <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
      </Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    },
    handleBeforeRemove (index) {
      return new Promise((resolve, reject) => {
        this.$Modal.confirm({
          title: '关闭确认',
          content: '<p>您确认要关闭标签' + (index + 1) + '吗？</p>',
          onOk: () => {
            resolve()
          },
          onCancel: () => {
            reject()
          }
        })
      })  
    }
  },
  created() {

  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
}
</script>

<style lang='scss' scoped>

</style>