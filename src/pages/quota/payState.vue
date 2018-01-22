<template>
	<div class="background">
		<img class="fail" v-if="seen" src="/static/images/createfail.png"/>
		<img class="success" v-if="!seen" src="/static/images/repayment.png"/>
		<p class="title" v-if="seen">操作失败</p>
		<p class="title" v-if="!seen">操作成功</p>
		<p class="txt" v-if="seen">您的宜享花还款交易扣款失败</br>请您检查账户状态并及时还款。</p>
		<p class="txt" v-if="!seen">您已完成还款申请</br>请您留意入账短信通知。</p>
		<button class="btn" v-if="seen" @click="handleClickReturn">
			返 回
		</button>
		<button class="btn" v-if="!seen" @click="handleClickReturn">
			好的
		</button>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      			seen:''
      		}
    	},
    	created(){
    		var path=this.$route.query;
    		if(path.success){
    			this.seen=false;
    		}else{
    			this.seen=true;
    		}
    	},
    	methods:{
    		handleClickReturn(){
    			this.$router.push("/repayment")	
    		}
    	}
    }
</script>

<style scoped="scoped">
	.background{
		height:100%;
		width:100%;
		background: #F8F8F8;
		position: absolute;
	}
	.fail{
		width: 2.01rem;
		height: 1.36rem;
		margin:2.55rem 0 0 2.76rem;
	}
	.success{
		width: 1.13rem;
		height: 1.73rem;
		margin:2.1rem 0 0 3.18rem;
	}
	.title{
		width: 100%;
		font-size:.48rem;
		margin-top:.49rem;
		color:#525252;
		letter-spacing:0;
		text-align:center;
	}
	.txt{
		color:#525252;
		letter-spacing:0;
		text-align:center;
		font-size:.28rem;
		letter-spacing:0;
		line-height:.36rem;
		margin: 0 auto;
		margin-top: .3rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin-top: .98rem;
		margin-left: 1.15rem;
		background: #42c5d3;
		border: none;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(218,218,218,0.30);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
		background-size:cover ;
	}
</style>