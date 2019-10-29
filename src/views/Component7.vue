<template>
  <div class='' style="padding: 32px 64px;">
    <h1>模态框组件 Modal-异步提交不关闭</h1>
    <br><br>

    <Modal v-model="modal" title="异步提交数据" :loading="loading" @on-ok="handleOk">
      <p>这是内荣</p>
      <p>这是内荣</p>
      <p>这是内荣</p>
      <p>这是内荣</p>
    </Modal>
    <Button @click="modal = !modal">open</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      loading: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleOk () {
      setTimeout(() => {
        this.loading = false
        this.$nextTick(() => {
          this.loading = true
        })
      }, 2000)
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