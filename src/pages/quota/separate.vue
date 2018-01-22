<template>
	<div class="background">
		<p class="title">什么是“现金分期”？</p>
		<div class="content">
			<img class="img" src="/static/images/branch.png" alt="" />
			<p class="introduce">现金分期是指在您的提现额度内可根据个人需求办理小额现金信贷，并按月分期还款。宜享花会邀请使用并还款记录良好的客户体验现金分期功能。</p>
		</div>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      		}
    	}
    }
</script>

<style scoped="scoped">
	.title{
		margin: .8rem 0 0 .5rem;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		font-weight: bold;
	}
	.content{
		margin-top: .24rem;
		border-top:.001rem solid #e6e6e6 ;
	}
	.img{
		width:6.5rem;
		height: 2.4rem;
		margin: .24rem 0 0 .5rem;
	}
	.introduce{
		width: 6.5rem;
		margin: .24rem 0 0 .5rem;
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
	}
</style>