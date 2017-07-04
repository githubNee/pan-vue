<template>
  <div class="">
    <!-- <div id="wrapper">
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
    </div> -->

    <div id="heading" style="margin:10% 0 7% 0;text-align:center">
      <div style="font-size:45px;color:#444444;font-weight:bold;">老司机 带带我</div>
      <div style="font-size:18px;color:#bbbbbb;letter-spacing:2px;">啊嘞啊嘞嘞</div>
    </div>

    <div id="container" style="margin:0 0">
      <el-table
        :data="tableData"
        :row-style="{
          'background':'rgba(0,0,0,0)',
          'height':'45px',
        }"
        style="background:rgba(240,240,240,0.5);border-style: hidden hidden;width: 70%;text-align:left;margin:0 auto;"
        >
        <el-table-column
          label="文件名"
          min-width="450">
          <template scope="scope">
            <a target="_blank" :href=scope.row.link style="color:#000000;text-decoration:none;">{{scope.row.key}}</a>
          </template>
        </el-table-column>
        <el-table-column
         prop="putTime"
         label="上传日期"
         sortable
         width="220"
         >
          <template scope="scope">
            <span>{{ scope.row.putTime }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="fsize"
          label="文件大小"
          sortable
          width="220">
        </el-table-column>

        <el-table-column label="下载文件" align="center" width="150">
          <template scope="scope">
            <input type="image" width="18px" align="center" src="static/image/down.png"
                  @click="Download(scope.$index, scope.row, scope.row.link)">
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import server from '../../config/index';
  import router from '../router/index.js';
  export default {
    data() {
      return {
        url: server.url + '/pan/public',
        tableData: []
      }
    },
    created () {
      var that = this;
      axios.get (this.url)
      .then(function(response) {
        if(response.status == 200){
          var temp = response.data.items;
          for (var index = 0;index<temp.length;index ++){
            var newDate = new Date();
            newDate.setTime(temp[index].putTime / 10000);
            temp[index].putTime = newDate.toLocaleDateString().split('T')[0];
          }
          that.tableData = temp;
        } else {
          console.log(response.status);
        }

      }).catch(function (error) {
        console.log(error);
      });
    },
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
      Download(index, row, link) {
        var Durl = link + '?attname='
        window.open(Durl);
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
