<template>
	<div class="background">
		<div class="top">
			<p class="title">还款金额</p>
			<p class="money">{{money}} 元</p>
		</div>
		<p class="list" @click="handleClickChoose">还款银行卡
			<img class="gt" src="/static/images/gt.png"/>
			<span>{{branch}}</span>
		</p>
		<button class="btn" @click="handleClick">
			还款
		</button>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
    	name: "Pay",
    	data () {
      		return {
      			money:'',
      			branch:'',
      			bankName:'',
      			cardNo:'',
      			mobile:''
      		}
    	},
    	created(){
    		var path=this.$route.query;
    		if(path.num!=undefined){
    			this.money=path.num
    		}
    		var data={
    			openid:localStorage.open_id
    		}
    		this.$http.post(this.$store.state.link+'/repay/maincard', Qs.stringify(data)
			).then(response => {
				var res=response.data.data;
				console.log(res)
				this.bankName=res.bankName;
				this.cardNo=res.cardNo;
				this.mobile=res.mobile;
				var str=this.cardNo.substr(this.cardNo.length-4)
				this.branch=this.bankName+"（"+str+"）"
	        },response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/payCode?num="+this.money+"&mobile="+this.mobile+"&cardNo="+this.cardNo)
    		},
    		handleClickChoose(){
    			this.$router.push("/cardList")
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
	.top{
		width:100%;
		height:3.88rem;
		background:#42c5d3;
		overflow: hidden;
	}
	.top p{
		width: 100%;
		text-align: center;
	}
	.title{
		font-size:.30rem;
		color:#ffffff;
		letter-spacing:0;
		margin-top:1.07rem;
	}
	.money{
		font-size:.90rem;
		color:#ffffff;
		letter-spacing:0;
		margin-top:.27rem;
	}
	.list{
		height: 1rem;
		line-height: 1rem;
		border-bottom:.005rem solid #e6e6e6;
		background: #fff;
		padding-left:.32rem ;
	}
	.list span{
		float: right;
		margin-right: .11rem;
	}
	.gt{
		width: .17rem;
		height: .26rem;
		float: right;
		margin: .37rem .50rem 0 0;
	}
	.btn{
		display: block;
		width: 5.2rem;
		line-height: .9rem;
		margin:0 auto;
		margin-top: 3.27rem;
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