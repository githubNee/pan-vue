<template>
  <div class="">
    <my-title></my-title>

    <my-table></my-table>

    <my-upload></my-upload>

    <my-login></my-login>
  </div>
</template>

<script>
  import router from '../router/index.js';
  import myTitle from './common/Title.vue';
  import myTable from './common/Table.vue';
  import myLogin from './common/Login.vue';
  import myUpload from './common/Upload.vue';


  export default {
    
    components: {
      myTitle, myTable, myLogin, myUpload
    },
    
  }
</script>

