<template>
	<div>
		<p class="title">
			绑卡消费流程说明
		</p>
		<p class="article">
			恭喜您已成功开通“宜享花”电子账户，您只需要将生</br>
			成的卡号绑定在您的微信钱包，就能在微信覆盖的线</br>
			上和线下商户进行支付了！</br>
			具体方法为：
		</p>
		<div class="content">
			<mt-swipe :auto="3000">
			  <mt-swipe-item><img class="img" src="/static/images/step1.png"/></mt-swipe-item>
			  <mt-swipe-item><img class="img" src="/static/images/step2.png"/></mt-swipe-item>
			  <mt-swipe-item><img class="img" src="/static/images/step3.png"/></mt-swipe-item>
			  <mt-swipe-item><img class="img" src="/static/images/step4.png"/></mt-swipe-item>
			  <mt-swipe-item><img class="img" src="/static/images/step5.png"/></mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>

<script >
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
    	name: "Flow",
    	data () {
      		return {
      			
      		}
    	}
    }
</script>

<style scoped="scoped">
	.title{
		font-size:.36rem;
		color:#333333;
		letter-spacing:0;
		text-align:center;
		margin-top: .41rem;
		font-weight: bold;
	}
	.article{
		width: 6.5rem;
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
		text-align:left;
		margin: 0 auto;
		font-size: .28rem;
		margin-top:.27rem;
	}
	.img{
		display: block;
		width: 6.4rem;
		height: 11.38rem;
		margin: 0 auto;
		margin-top: .26rem;
	}
	.content{
		width: 6.93rem;
		height: 11.9rem;
		background: #f0f3f6;
		margin: 0 auto;
		margin-top: .2rem;
		margin-bottom: .3rem;
		border-radius:.12rem;
	}
</style>