<template>
  <div style="padding: 32px 64px;">
    <h1>上传组件， upload-手动上传</h1>
    <br><br>
    <Upload 
      action="//jsonplaceholder.typicode.com/posts/"
      ref="upload"
      :before-upload="handleUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <br><br>
    <Button type="primary" @click="upload" :loading="loadingStatus">
      {{loadingStatus ? '上传中' : '上传'}}
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      loadingStatus: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleUpload (file) {
      this.file = file
      return false
    },
    handleSuccess () {
      this.file = null
      this.loadingStatus = false
      this.$Message.success('上传成功')
    },
    handleError () {
      this.file = null
      this.loadingStatus = false
      this.$Message.error('上传失败')
    },
    upload () {
      this.loadingStatus = true
      this.$refs.upload.post(this.file)
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

<style scoped>
.count{
  font-size: 24px;
}
</style>
