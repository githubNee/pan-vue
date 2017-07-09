<template>
  <div id="wrapper">
    <template v-if="getToken()">
      <div id="hi">
        <el-button type="text" icon="date" @click="logout()">886</el-button>
      </div>
    </template>
    <template v-else>
      <div id="hi">
        <form>
          <input type="password" name="code" value="" placeholder="你好啊"
            @keyup.enter.prevent="login()" v-model="info.password" >
          <div class="line"></div>
        </form>
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
    data () {
      return {
        url: root + '/account/login',
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
    font-size: 1.5rem;
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
    top:8em;
    right: 0em;
  }
  .el-button:hover {
    color: #666666;
  }
</style>
