<template>
  <div id="wrapper2">
    <div id="hi" v-if="isLogged">
      <el-button type="text" icon="date" @click="logout()">886</el-button>
    </div>
    <div id="hi" v-else>
      <input type="password" name="code" value="" placeholder="你好啊"
        @keyup.enter.prevent="login()" v-model="info.password" >
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
        info: {
          password: ''
        },
        isLogged: false
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

          bus.$emit('login', that.isLogged);
        })
        .catch(function (response) {
          Message.error('登录失败');
          this.info.password = '';
        });
      },
      logout(){
        sessionStorage.clear();
        this.isLogged = false;
        this.info.password = '';
        Message.success('886');

        bus.$emit('login', this.isLogged);
      }
    }
  }
</script>
<style media="screen">
  #wrapper2{
    z-index: 97;
		bottom: 4em;
  }
  #hi input{
    font-size: 1.5rem;
    background: transparent;
    border:none;
    opacity:.6;
    outline-color: rgba(0,0,0,0);
    text-align: right;
    position:absolute;
    z-index:99;
    bottom:2em;
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

  #hi .el-button {
    color: #444444;
    font-size: 1.5rem;
    position:absolute;
    z-index:98;
    bottom:2em;
    right: 0em;
  }
  #hi .el-button:hover {
    color: #666666;
  }
</style>
