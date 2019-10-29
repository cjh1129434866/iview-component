<template>
  <div class='' style="padding: 32px 64px;">
    <h1>上传组件-选择文件后， 上传前显示缩略图</h1>
    <br><br>
    <Upload 
      action="//jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeUpload"
    >
      <Button icon="ios-cloud-upload-outline">上传图片</Button>
    </Upload>
    <!-- <img :src="img" alt=""> -->
    <div class="img" :style="{'background-image': 'url('+ img +')'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    beforeUpload (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.img = reader.result
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

<style>
  .img{
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>