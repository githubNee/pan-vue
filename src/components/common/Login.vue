<template>
  <div id="wrapper">
    <template v-if="getToken()">
      <div id="hi">
        <el-button type="text" icon="date">886</el-button>
      </div>
    </template>
    <template v-else>
      <div id="hi">
        <form>
          <input type="password" name="code" value="" placeholder="你好啊">
          <div class="line"></div>
        </form>
      </div>
    </template>
  </div>

</template>

<script>

  export default {
    methods: {
      logout(){
        alert(1)
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
    text-align: left;
    position:absolute;
    z-index:99;
    top:8em;
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

  .el-button {
    color: #444444;
    font-size: 16px;
    position:absolute;
    z-index:98;
    top:10em;
    right: 0em;
  }
  .el-button:hover {
    color: #666666;
  }
</style>
