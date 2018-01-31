<template>
	<div>
		<p class="top">恭喜您完成开户！</p>
		<div class="quota">
			<img src="/static/images/card.png"/>
			<p class="number">{{num}}</p>
			<p class="name">{{name}}</p>
		</div>
		<div class="describe">
			<img class="arrow" src="/static/images/arrow.png"/>
			<span class="copy">立即长按卡号复制，打开微信钱包去绑卡</span>
		</div>
		<div class="list">
			<p class="option">
				<span class="left">总额度</span>
				<span class="right">{{cardLimit}}元</span>
			</p>
			<p class="option">
				<span class="left">提现额度</span>
				<span class="right">{{cashLimit}}元</span>
				<img class="low" src="/static/images/low.png" @click="handleClickImg"/>
			</p>
			<p class="option border">
				<span class="left">您的每月账单日</span>
				<span class="right">每月{{billDate}}号</span>
			</p>
		</div>
		<div class="bottom-wrap" @click="handleClickFlow">
			<img class="logo" src="/static/images/question.png"/>
			<p class="bottom">
				绑卡说明
			</p>
		</div>
	</div>
</template>

<script >
	import { MessageBox } from 'mint-ui';
	export default {
    	name: "Index",
    	data () {
      		return {
      			name:'JOHEN LEE',
      			num:'',
      			cardLimit:'',
      			cashLimit:'',
      			billDate:''
      		}
    	},
    	created(){
    		var params={
    			wechat_id:localStorage.wechat_id,
				open_id:localStorage.open_id
    		}
    		var headers=Header(params,localStorage.open_id)
			this.$http.get(this.$store.state.link+'/poll/get/webanknum',{
	      		params:params,
	      		headers:headers
	     	}).then(response => {
	      		var res=response.data.data;
	      		this.cardLimit=res.cardLimit;
	      		this.cashLimit=res.cashLimit;
	      		this.name=res.userName;
	      		this.num=res.webankNum;
	      		this.billDate=res.billDate;
	      		try{
	      			window.localStorage.vCardNo=this.num
	      		}catch(e){
	      			//TODO handle the exception
	      		}
//	      		var v = this.num;
//		        if(/\S{5}/.test(v)){
//		            this.num = v.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
//		        }
	        },response => {
	        	console.log("ajax error");
	      	});
			
    	},
    	methods:{
    		handleClickFlow(){
    			this.$router.push("/flow")
    		},
    		handleClickImg(){
    			MessageBox('说明', '提现额度是指在您宜享花的额度范围内所有提现类（微信红包、转账、零钱充值）交易共享的最高额度，目前设置额度比例为50%，若您宜享花总额度为10000元，那么您的提现额度为5000元。');
    		}
    	}
    }
</script>

<style scoped="scoped">
	.top{
		width:100%;
		line-height: .5rem;
		font-size:.42rem;
		color:#058997;
		letter-spacing:0;
		text-align:center;
		margin-top:.88rem;
		font-weight: 600;
	}
	.quota{
		width: 6.5rem;
		position: relative;
		left: .5rem;
		top:.5rem
	}
	.quota img{
		width: 100%;
		height: 100%;
	}
	.number{
		color: #fff;
		font-size: .42rem;
		position: absolute;
		text-shadow:0 .02rem .04rem rgba(46,98,208,0.50); 
		top:1.88rem;
		left: .74rem;
	}
	.name{
		font-size:.28rem;
		text-shadow:0 .02rem .04rem rgba(46,98,208,0.50);
		color:#ffffff;
		position: absolute;
		top:3.1rem;
		left: .74rem;
	}
	.describe{
		width: 5rem;
		margin:0 auto;
		margin-top: .65rem;
	}
	.arrow{
		width: .18rem;
		height: .18rem;
	}
	.copy{
		width: 3.36rem;
		font-size:.24rem;
		color:#ff771a;
		letter-spacing:0;
	}
	.list{
		width: 5.6rem;
		margin: 0 auto;
		margin-top: .38rem;
	}
	.option{
		height: .8rem;
		border-bottom: .001rem solid #979797;
		line-height: .8rem;
	}
	.border{
		border: none;
	}
	.option span{
		font-size:.24rem;
		color:#525252;
		letter-spacing:0;
	}
	.low{
		width: .28rem;
		height: .28rem;
		margin-left: .06rem;
		margin-top:-0.05rem;
	}
	.right{
		float: right;
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