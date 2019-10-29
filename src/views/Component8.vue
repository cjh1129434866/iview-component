<template>
  <div class='' style="padding: 32px 64px;">
    <h1>DatePicker 设置仅当月可选</h1>
    <br><br>
    <DatePicker type="date" :options="options"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        disabledDate: (date) => {
          // 先判断本月得第一天
          const today = new Date()
          const year = today.getFullYear()
          const month = today.getMonth()
          // 得出本月得第一天得时间
          const firstTime = (new Date(year, month, 1)).getTime()
          // 再判断本月有多少天 判断思路是 得出下个月一号得时间 减去 一天 得出 本月得 总时间
          today.setMonth(month + 1)
          today.setDate('1')
          today.setDate(today.getDate() - 1)
          const days = today.getDate()
          // 再获取本月最后一天得时间
          const lastTime = firstTime + 86400000 * days
          const dateTime = date.valueOf()
          return dateTime < firstTime || dateTime >= lastTime
        }
      }
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

<style lang='scss' scoped>

</style>