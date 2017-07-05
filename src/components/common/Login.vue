<template>
  <div id="wrapper">
    <template  v-if="getToken()">
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="loginout()">登出</el-menu-item>
      </el-menu>
    </template>
    <template v-else>
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><el-button type="text" @click="open1">登录</el-button></el-menu-item>
      </el-menu>
    </template>
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