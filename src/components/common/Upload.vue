<template>
	<el-upload id="wrapper" v-if="status">
		<el-button @click="alert()" size="small" type="text">点击上传</el-button>
	</el-upload>
</template>

<script>
	import router from '../../router/index.js';
	import bus from './bus.js';

	export default {
		data() {
			return {
				status: false,
				base_url: "/api",
				target: "/public",
				url: ""
			}
		},
		created() {
			bus.$on('login', status => {
				this.status = status;
			});
		}
	}
</script>

<style>
	#wrapper {
		z-index: 96;
		top: 3em;
	}
	#wrapper .el-button {
	  color: #444444;
	  font-size: 16px;
	  position:absolute;
	  z-index:98;
	  top:10em;
	  left: 0em;
	}
</style>
