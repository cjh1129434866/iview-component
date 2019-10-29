<template>
  <div class='' style="padding: 32px 64px;">
    <h1>使用select组件 封装一个 省市区 联动选择器</h1>
    <br><br>
    <Select v-model="province" style="width: 150px;" placeholder="选择市/直辖市" @on-change="handleProvinceChange">
      <Option v-for="(item, index) in areaData['86']" :value="index" :key="index">{{item}}</Option>
    </Select>
    <Select v-model="city" style="width: 150px;" placeholder="选择市/区" :disabled="province === ''">
      <Option v-for="(item, key) in areaData[province]" :value="key" :key="key">{{item}}</Option>
    </Select>
  </div>
</template>

<script>
import areaData from '../libs/area-data.js'
export default {
  data() {
    return {
      areaData: areaData,
      province: '',
      city: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleProvinceChange () {
      this.city = Object.keys(this.areaData[this.province])[0]
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