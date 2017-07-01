<template>
  <div id="container">
    <el-table
    :data="tableData"
    border
    style="width: 60%;text-align:left;margin:20px auto;"
    >
    <!-- <el-table-column
       type="selection"
       width="55">
     </el-table-column> -->
   <el-table-column
     prop="key"
     label="文件名"
     sortable
     width="400">
   </el-table-column>
    <el-table-column
     prop="putTime"
     label="日期"
     sortable
     width="220"
     >
     <template scope="scope">
       <el-icon name="time"></el-icon>
       <span style="margin-left: 10px" >{{ scope.row.putTime }}</span>
     </template>
   </el-table-column>

   <el-table-column
     prop="fsize"
     label="文件大小"
     sortable
     width="220">
   </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="Download(scope.$index, scope.row, scope.row.link)">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
