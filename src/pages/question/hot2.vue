<template>
	<div class="background">
		<p class="title">问：额度审批通过后我要等多久才能开始消费？</p>
		<p class="border"></p>
		<div class="content">
			答：您的额度正式审批通过后，只要您顺利完成微信绑卡，无需等待即可直接使用该额度进行消费。</br>
      		如您需要进行现金分期，需要您优先使用“宜享花”进行消费，在您有两期良好的消费还款记录后即可办理。
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