<template>
<div id="wrapper">
  <template  v-if="getToken()">
    <el-menu class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="1" @click="loginout()">登出</el-menu-item>
    </el-menu>
  </template>
  <template v-else>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><el-button type="text" @click="open1">登录</el-button></el-menu-item>
    </el-menu>
  </template>

  <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
  </div>
</div>
</template>

<script>
export default {
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrapper {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      font-size: 22px;
      line-height: 70px;
      color: #fff;
  }
  #wrapper .logo{
      float: left;
      width:250px;
      text-align: center;
  }
  #wrapper .market{
    float: left;
    width:250px;

  }
  .user-info {
      float: right;
      padding-right: 50px;
      font-size: 16px;
      color: #fff;
  }
  .user-info .el-dropdown-link{
      position: relative;
      display: inline-block;
      padding-left: 50px;
      color: #fff;
      cursor: pointer;
      vertical-align: middle;
  }
  .user-info .user-logo{
      position: absolute;
      left:0;
      top:15px;
      width:40px;
      height:40px;
      border-radius: 50%;
  }
  .el-dropdown-menu__item{
      text-align: center;
  }
</style>
