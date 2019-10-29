<template>
  <div class='' style="padding: 32px 64px;">
    <h1>上传组件 Upload -与七牛云 CDN 得结合</h1>
    <br><br>
    <Upload
      action="https://up.qbox.me"
      :format="['jpg', 'jpeg', 'png', 'gif']"
      :max-size="5120"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="beforeUpload"
      :data="uploadFormData"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
    >
      <Button icon="ios-cloud-upload-outline">上传图片</Button>
    </Upload>
    <img :src="'https://xxxx.com' + img" alt="" v-if="img">
  </div>
</template>

<script>
import $ from '../libs/utils'
export default {
  data() {
    return {
      uploadFormData: {},
      img: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '您上传得文件' + file.name + '格式不符合要求',
        duration: 6
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '文件过大',
        desc: '您上传得文件' + file.name + '体积过大，请上传不超过5M得文件',
        duration: 6
      })
    },
    beforeUpload (file) {
      return $.ajax({
        method: 'post',
        url: '/v1/file/gettoken',
        data: {
          token: 'vdqszheLO68LAP5opLHRKjg4BGb80OXA'
        }
      }).then(res => {
        this.uploadFormData = {
          token: res.data.data.token,
          key: res.data.data.key
        }
      })
    },
    handleProgress (event) {
      console.log(parseInt(event.percent))
    },
    handleSuccess (res) {
      this.$Message.success('上传成功')
      this.img = res.key
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