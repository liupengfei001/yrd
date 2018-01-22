<template>
  <div class="header" >
  	<span class="back" @click="handleClickReturn">
  	
  	</span>
		<p class="content">{{txt}}</p>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props:['txt'],
  methods:{
		handleClickReturn(){
			this.$router.go(-1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
	.content{
		width: 100%;
		line-height: 1rem;
		background: #fff;
		box-shadow:0 .02rem .08rem 0 #e9edf2;
		font-size: .32rem;
		font-family:.PingFangSC-Regular;
		color:#333333;
		letter-spacing:0;
		text-align:center;
	}
	.back{
		display: inline-block;
		width: .14rem;
		height: .26rem;
		position: absolute;
		top:.37rem;
		left:.32rem;
		background: url(../../static/images/headerBack.png) no-repeat;
		background-size:cover ;
	}
</style>
