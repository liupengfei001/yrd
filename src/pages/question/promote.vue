<template>
	<div class="background">
		<p class="title">如何提高我的宜享花额度？</p>
		<div class="content">
			<img class="img" src="/static/images/promote.png" alt="" />
			<p class="introduce">在您成功开通宜享花并完成微信绑卡后，建议您在日常消费中多使用宜享花进行支付，并在每期出账单后按时还款，累计良好的个人信用记录，有助于提高您的宜享花额度。</p>
		</div>
	</div>
</template>

<script>
	export default {
    	name: "Promote",
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