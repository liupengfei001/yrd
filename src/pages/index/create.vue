<template>
	<div>
		<div class="top">
			<p class="cardTitle">您的可用额度(元)</p>
			<p class="money">30000.00</p>
		</div>
		<p class="txt">去微众银行提交信息后即可获得信用卡</p>
		<div class="btn" @click="handleClick">
			去微众银行开户
		</div>
		<img class="question" src="/static/images/question.png"/>
		<p class="bottom">什么是开户？</p>
	</div>
</template>

<script >
	export default {
    	name: "Index",
    	data () {
      		return {
      		}
    	},
    	components:{
    	},methods:{
    		handleClick(){
    			//this.$router.push("/information")
    		}
    	}
    }
</script>

<style scoped="scoped">
	.top{
		width: 100%;
		height: 5.32rem;
		background: url(/static/images/indexbg.png) no-repeat;
		background-size:cover ;
		position: relative;
	}
	.cardTitle{
		width: 100%;
		margin-top: 1.19rem;
		font-size:.24rem;
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
		font-size:.80rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		text-align:center;
		position: absolute;
		bottom: 2.5rem;
	}
	.txt{
		width: 100%;
		font-size:.24rem;
		color:#333333;
		letter-spacing:0;
		line-height:.48rem;
		text-align:center;
		margin-top:1.45rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin:0 auto ;
		margin-top: .33rem;
		background: #42c5d3;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
		margin-top: .34rem;
	}
	.bottom{
		line-height: .48rem;
		margin: 0 auto;
		margin-top:1.79rem ;
		font-size:.24rem;
		color:#548afc;
		letter-spacing:0;
		line-height:.48rem;
		text-align:center;
		position: absolute;
		left: 3.23rem;
		bottom: .59rem;
	}
	.question{
		position: absolute;
		width: .34rem;
		height: .34rem;
		left: 2.82rem;
		bottom: .67rem;
	}
</style>