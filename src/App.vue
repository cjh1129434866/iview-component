<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      userInfo: {
        name: '这事name'
      }
    }
  },
  methods: {
    changeUserInfo () {
      this.userInfo.name = '改变了name得值'
    }
  }
}
</script>

<style>

</style>
