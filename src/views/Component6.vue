<template>
  <div class='' style="padding: 32px 64px;">
    <h1>在某个元素中展开 Drawer 组件（非全屏） 得方法</h1>
    <br><br>

    <div class="container">
      <Drawer title="Basic Drawer" v-model="value1" :transfer="false" inner scrollable>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Button type="primary" @click="value1 = !value1">open</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false
    };
  },
  computed: {},
  watch: {},
  methods: {

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

<style>
.container{
  position: relative;
  width: 500px;
  height: 300px;
  border: 1px solid #000;
}
body{
  height: 3000px;
}
</style>