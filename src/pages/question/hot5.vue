<template>
	<div class="background">
		<p class="title">问：消费利息是多少？</p>
		<p class="border"></p>
		<div class="content">
			答：“宜享花”采用按日计息、随借随还的灵活资金出借方式，每日消费利息为0.048%。而若您在消费后，在到期还款日前选择全额还款，则可轻松享有最长35天免息期。</br>
    		例如：您的账单日为每个月5日，到期还款日为账单日后5天（即每月的10日）。假设您在1月6日使用“宜享花”发生一笔消费。那么您的该笔消费将在2月5日出账单，到期还款日为2月10日。如果您选择在2月10日全额还款，该笔消费将不会被计提利息。</div>
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