<template>
	<div id="heading">
    <div id="title" style="">{{title}}</div>
    <div id="sub-title">{{sub_title}}</div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				"title": "老司机 带带我",
				"sub_title": "啊嘞啊嘞嘞"
			}
		}
	}
</script>

<style>
	#heading {
		margin:10% 0 7% 0;
		text-align:center
	}
	#title {
		font-size:45px;
		color:#444444;
		font-weight:bold;
	}
	#sub-title {
		font-size:18px;
		color:#bbbbbb;
		letter-spacing:2px;
	}

</style>