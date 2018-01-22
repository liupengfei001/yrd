<template>
	<div class="background">
		<img class="fail" v-if="seen" src="/static/images/createfail.png"/>
		<img class="success" v-if="!seen" src="/static/images/repayment.png"/>
		<p class="txt" v-if="seen">抱歉您的账单分期操作失败，详情请致电客服400-609-9400咨询。</p>
		<p class="txt" v-if="!seen">恭喜您账单分期办理成功</br>请留意下期账单并按时还款。</p>
		<button class="btn" @click="handleClickReturn">
			{{txt}}
		</button>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      			seen:'',
      			txt:''
      		}
    	},
    	created(){
    		var path=this.$route.query;
	      	if(path.succes){
	      		this.seen=false
	      		this.txt='好的'
	      	}else{
	      		this.seen=true
	      		this.txt='返回'
	      	}
    	},
    	components:{
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
		position: fixed;
	}
	.fail{
		width: 2.01rem;
		height: 1.36rem;
		margin:2.6rem 0 .74rem 2.76rem;
	}
	.success{
		width: 1.13rem;
		height: 1.73rem;
		margin:2.1rem 0 0 3.18rem;
	}
	.txt{
		width: 5.57rem;
		color:#525252;
		letter-spacing:0;
		text-align:center;
		font-size:.28rem;
		letter-spacing:0;
		line-height:.36rem;
		margin: 0 auto;
		margin-top: .77rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin-top: .78rem;
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