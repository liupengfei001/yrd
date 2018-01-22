<template>
	<div>
		<div class="top">
			<p class="cardTitle">您最高可申请额度是(元)</p>
			<p class="money">{{money}}</p>
			<p class="int">您的额度以最终审批后的额度为准</p>
			<img class="toplogo" src="/static/images/toplogo.png" alt="" />
		</div>
		<p class="describe">
			即将为您开立宜享花微众银行电子账户</br>
			通过宜享花体验全新支付方式！</br>
		</p>
		
		<div class="btn" @click="handleClick">
			立刻申请
		</div>
		<bottom></bottom>
	</div>
</template>

<script >
	import CommentBottom from "@/components/bottom.vue"
	export default {
    	name: "Index",
    	data () {
      		return {
      			money:'20000.00'
      		}
    	},
    	components:{
    		bottom:CommentBottom
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/information");
    		}
    	}
    }
</script>

<style scoped="scoped">
	.title{
		font-size: .4rem;
		margin-top:2rem;
		text-align: center;
		font-weight: 600;
	}
	.top{
		width: 100%;
		height: 5.32rem;
		background: url(/static/images/indexbg.png) no-repeat;
		background-size:cover ;
		position: relative;
	}
	.toplogo{
		width: 1.57rem;
		height:.4rem;
		position: absolute;
		top:.38rem;
		left:.40rem;
	}
	.cardTitle{
		width: 100%;
		margin-top: 1.19rem;
		font-size:.3rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		position: absolute;
		bottom: 3.7rem;
		text-align: center;
	}
	.money{
		width: 100%;
		line-height: .95rem;
		font-size:.90rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		text-align:center;
		position: absolute;
		bottom: 2.47rem;
	}
	.describe{
		width: 5.69rem;
		height: 1.44rem;
		margin: 0 auto;
		margin-top: 1.1rem;
		font-size: .24rem;
		color:#333333;
		letter-spacing:0;
		line-height:.48rem;
		text-align:center;
	}
	.int{
		width:100%;
		font-size:.24rem;
		color:#fff;
		letter-spacing:0;
		text-align:center;
		position: absolute;
		bottom: 1.8rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin:0 auto ;
		margin-top: .5rem;
		background: #42c5d3;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
		background-size:cover ;
	}
	.bottom{
		line-height: .48rem;
		font-size:.24rem;
		color:#548afc;
		letter-spacing:0;
		position: absolute;
		right:3rem;
		bottom: .55rem;
		text-align:center;
	}
	.logo{
		width:.32rem ;
		height: .32rem;
		position: absolute;
		left: 3.07rem;
		bottom: .63rem;
	}
</style>