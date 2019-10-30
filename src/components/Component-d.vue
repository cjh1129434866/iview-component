<template>
  <div class=''>
    组件d
    <div>{{app.userInfo.name}}</div>
    <Button @click="changeApp">change</Button>
  </div>
</template>

<script>
export default {
  inject: ['app'],
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    changeApp () {
      this.app.changeUserInfo()
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