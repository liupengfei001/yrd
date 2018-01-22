<template>
	<div class="background">
		<p class="title">问：如果额度不够用怎样才能提高我的消费额度？</p>
		<p class="border"></p>
		<div class="content">
			答：在您成功开通宜享花并完成微信绑卡后，建议您在日常消费中多使用宜享花进行支付，并在每期出账单后按时还款，累计良好的个人信用记录，有助于提高您的宜享花额度。
		</div>
		<div class="finger">
			<CommentFinger></CommentFinger>
		</div>
		
	</div>
</template>

<script>
	import CommentFinger from "./finger.vue";
	export default {
    	name: "Index",
    	data () {
      		return {
      			di:"000"
      		}
    	},
    	components:{
    		CommentFinger :CommentFinger
    	}
  	}
</script>

<style scoped="scoped">
	.background{
		overflow: hidden;
	}
	.title{
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		font-weight: bold;
		margin: .8rem 0 0 .49rem;
	}
	.border{
		width: 100%;
		height:.2rem;
		border-bottom: .005rem solid #E6E6E6;
		margin-top: .3rem;
	}
	.content{
		width: 6.5rem;
		margin: 0 auto;
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
		text-align:left;
		margin-top: .3rem;
	}
	.finger{
		width: 100%;
		height: 2rem;
		position: relative;
	}
</style>