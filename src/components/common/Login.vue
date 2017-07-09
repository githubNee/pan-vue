<template>
  <div id="wrapper">
    <div id="hi" v-if="isLogged">
      <el-button type="text" icon="date" @click="logout()">886</el-button>
    </div>
    <div id="hi" v-else>
      <input type="password" name="code" value="" placeholder="你好啊"
        v-on:keyup.enter.prevent="login()" v-model="info.password">
      <div class="line"></div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import { Message } from 'element-ui';
  import router from '../../router/index.js';
  import bus from './bus.js';

  var root = process.env.API_ROOT;

  export default {
    data () {
      return {
        url: root + '/account/login',
        isLogged: false,
        info: {
          password: ''
        }
      }
    },
    methods: {
      login: function () {
        var that = this;

        axios.post(this.url, this.info)
        .then(function(response) {
          sessionStorage.setItem('token', response.data);
          that.isLogged = true;
          Message.success('登录成功');
        })
        .catch(function (response) {
          this.info.password = '';
          Message.error('登录失败');
        })
      },
      logout(){
        sessionStorage.clear();
        this.isLogged = false;
        this.info.password = '';
        Message.success('886');
      }
    },
    created() {
      if (sessionStorage.getItem('token'))
        this.isLogged = true;
      else
        this.isLogged = false
    }
  }
</script>
<style media="screen">
  #hi input{
    background: transparent;
    border:none;
    opacity:.6;
    outline-color: rgba(0,0,0,0);
    text-align: right;
    position:absolute;
    z-index:99;
    top:8em;
    right: 0em;
    line-height: 2em;
    color: #1eb8d9;
    font-size: 1.5rem;
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
    font-size: 1.5rem;
    position:absolute;
    z-index:98;
    top:10em;
    right: 0em;
  }
  .el-button:hover {
    color: #666666;
  }
</style>
