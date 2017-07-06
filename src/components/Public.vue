<template>
  <div class="">

    <my-title></my-title>

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

    <my-login></my-login>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router/index.js';
  import myTitle from './common/Title.vue';
  import myLogin from './common/Login.vue';

  export default {
    data() {
      return {
        url: '/api/pan/public',
        tableData: []
      }
    },
    components: {
      myTitle, myLogin
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .el-dropdown-menu__item{
      text-align: center;
  }
</style>
