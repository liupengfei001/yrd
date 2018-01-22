<template>
	<div class="background">
		<div class="content">
			<p class="top"></p>
			<img class="border" src="/static/images/border.png"/>
			<p class="title">尊敬的客户您好：</p>
			<p class="article">目前“宜享花”产品只针对宜人贷的老客户限量</br>
				邀请，尚未对外公开运营，请您保持订阅本公</br>
				众号，我们很快就会对外开放申请，期望届时</br>
				您将成为我们的第一批公开用户。
			</p>
			<p class="thank">感谢您对“宜享花”的关注。</p>
			<img class="fail" src="/static/images/loginFail.png"/>
		</div>
		<!--<img class="fail" src="/static/images/fail.png"/>
		<p class="txt">尊敬的客户您好，目前“宜享花”产品仍处于内测阶段尚未对外公开运营，请您保持订阅本公众号，成为我们的第一批公开会员，更多好礼等着您。感谢您对“宜享花”的关注。</p>-->
		
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      		}
    	},
    	methods:{
    	}
    }
</script>

<style scoped="scoped">
	.background{
		height:100%;
		width:100%;
		background: #F8F8F8;
        position: fixed;
	}
	.content{
		width: 6.9rem;
		height: 8rem;
		background: #fff;
		margin: .89rem auto;
		position: relative;
	}
	.top{
		width: 100%;
		height: .16rem;
		background:#42c5d3;
	}
	.border{
		width: 6.68rem;
		height: .16rem;
		position: absolute;
		top:0;
		left:.1rem
	}
	.title{
		height: .41rem;
		font-size:.3rem;
		color:#525252;
		letter-spacing:0;
		text-align:left;
		font-weight: bold;
		position: absolute;
		top:.93rem;
		left:.43rem
	}
	.article{
		width: 6.04rem;
		height: 2.33rem;
		position: absolute;
		top:1.39rem;
		left:.43rem;
		font-size:.30rem;
		color:#858585;
		letter-spacing:0;
		line-height:.58rem;
		text-align:left;
	}
	.thank{
		position: absolute;
		top:4.18rem;
		left:.41rem;
		font-size:.30rem;
		color:#858585;
		letter-spacing:0;
		text-align:left;
	}
	.fail{
		width: 1.91rem;
		height: 1.94rem;
		position: absolute;
		right:.7rem;
		bottom:.64rem;
	}
	.txt{
		width: 5.5rem;
		font-size:.28rem;
		color:#858585;
		letter-spacing:0;
		line-height:.48rem;
		text-align:left;
		margin: 0 auto;
	}
</style>