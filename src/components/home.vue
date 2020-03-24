<template>
  <div class="">
   <div>
       <el-button type="info" @click=logout>退出</el-button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods:{
      logout(){
          window.sessionStorage.clear();
          this.$router.push('/login')
      }
  }
}
</script>

<style lang='less' scoped>

</style>
