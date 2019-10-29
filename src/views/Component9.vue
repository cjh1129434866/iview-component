<template>
  <div class='' style="padding: 32px 64px;">
    <h1>多个DatePicker 联动得用法 （联动禁用）</h1>
    <br><br>
    <DatePicker v-model="startTime" @on-change="handleChange"></DatePicker>
    <DatePicker v-model="endTime" :disabled="startTime === ''" :options="options" ref="endTime"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
      options: {
        disabledDate: (date) => {
          return this.startTime >= date
        }
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleChange () {
      if (this.startTime !== '') {
        this.$refs.endTime.handleFocus() // 自动打开 第二个datePicker
        if (this.startTime > this.endTime) {
          this.endTime = ''
        }
      } else {
        this.endTime = ''
      }
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