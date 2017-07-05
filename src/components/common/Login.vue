<template>
  <div id="wrapper">
    <template  v-if="getToken()">
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="loginout()">登出</el-menu-item>
      </el-menu>
    </template>
    <template v-else>
      <el-menu  class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><el-button type="text" @click="open1">登录</el-button></el-menu-item>
      </el-menu>
    </template>
    <div id="hi">
      <input type="password" name="code" value="" placeholder="你好啊">
      <div class="line"></div>
    </div>
  </div>

</template>

<script>
  export default {
    methods: {
      loginout(){
        sessionStorage.clear();
      },
      getToken() {
        if (sessionStorage.getItem('token') != null)
          return true;
        else
          return false;
      },
      open1() {
        this.$prompt('请输入密钥', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '登录成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>
<style media="screen">
  #hi input{
    background: transparent;
    border:none;
    opacity:.6;
    outline-color: rgba(0,0,0,0);
    text-align: center;
    position:absolute;
    z-index:99;
    top:10em;
    right: 0em;
    line-height: 2em;
    color: #1eb8d9;
  }
  #hi input:hover{
    opacity: .9;
  }
  #hi input:focus{
    outline:none;
    border-bottom: 1px solid #1eb8d9;
  }

</style>
