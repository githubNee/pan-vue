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

<style>
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
</style>