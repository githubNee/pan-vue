<template>
  <div id="wrapper">
    <template v-if="getToken()">
      <div id="hi">
        <el-button type="text" icon="date" @click="logout()">886</el-button>
      </div>
    </template>
    <template v-else>
      <div id="hi">
        <input type="password" name="code" value="" placeholder="你好啊"
          v-on:keyup.enter.prevent="login()" v-model="info.password">
        <div class="line"></div>
      </div>
    </template>
  </div>

</template>

<script>
  import axios from 'axios';
  import { Message } from 'element-ui';
  import router from '../../router/index.js';

  var root = process.env.API_ROOT;

  export default {
    data() {
      return {
        url: root + '/account/login',
        info: {
          password: ''
        }
      }
    },
    methods: {
      login() {
        axios.post(this.url, this.info)
        .then(function(response) {
          sessionStorage.setItem('token', response.data)
          Message.success('登录成功');
          router.go(0);
        })
        .catch(function (response) {
          Message.error('登录失败');
        })
      },
      logout(){
        sessionStorage.clear();
        router.go(0);
      },
      getToken() {
        sessionStorage.getItem('token');
        if (sessionStorage.getItem('token') != null)
          return true;
        else
          return false;
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
