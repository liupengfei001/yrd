<template>
	<div class="background">
		<div class="card">
			<img class="img" src="/static/images/card.png"/>
			<p class="number">{{num}}</p>
			<p class="name">{{name}}</p>
		</div>
		<div class="list">
			<p class="option top">
				<span class="left">总额度</span>
				<span class="right">{{cardLimit}} 元</span>
			</p>
			<p class="option">
				<span class="left">提现额度</span>
				<span class="right">{{cashLimit}} 元</span>
				<img class="low" src="/static/images/low.png" @click="handleClickImg"/>
			</p>
			<p class="option top">
				<span class="left">您的每月账单日</span>
				<span class="right">每月 {{billDate}}号</span>
			</p>
			<p class="option" v-if="seen">
				<span class="left">您的每月到期还款日</span>
				<span class="right">每月 {{repayDate}}号</span>
			</p>
			<p class="option top">
				<span class="left">还款方式</span>
				<span class="right">{{txt}}</span>
			</p>
			<p class="option">
				<span class="left">默认银行卡</span>
				<span class="right">{{branch}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import Qs from 'qs'
	export default {
    	name: "cardInformation",
    	data () {
      		return {
      			name:'',
      			num:'',
      			billDate:'',
      			cardLimit:'',
      			cashLimit:'',
      			repayDate:'',
      			seen:false,
      			cardNo:'',
      			bankName:'',
      			branch:'',
      			txt:""
      		}
    	},
    	created(){
    		var params={
    			wechat_id:localStorage.wechat_id,
				open_id: localStorage.open_id
    		}
    		var headers=Header(params,localStorage.open_id)
			this.$http.get(this.$store.state.link+'/wecard/info',{
	      		params:params,
				headers:headers
	      	}).then(response => {
	      		var res=response.data.data;
	      		console.log(res)
	      		this.billDate=res.billDate
	      		this.cardLimit=res.cardLimit
	      		this.cashLimit=res.cashLimit
	      		this.repayDate=res.repayDate
	      		if(this.repayDate==null){
	      			this.seen=false
	      		}else{
	      			this.seen=true
	      		}
	      		this.name=res.userName
	      		this.num=res.webankNum
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
	      	var Data={
    			openid:localStorage.open_id,
    			wechat_id:localStorage.wechat_id
    		}
	      	var headers=Header(Data,localStorage.open_id)
    		this.$http.post(this.$store.state.link+'/repay/maincard',Qs.stringify(Data),{
    			headers:headers
			}).then(response => {
				var res=response.data.data;
				this.bankName=res.bankName;
				this.cardNo=res.cardNo;
				var str=this.cardNo.substr(this.cardNo.length-4)
				this.branch=this.bankName+" ("+str+")"
	        },response => {
	        	console.log("ajax error");
	      	});
	      	
	      	var data={
				vCardNo:localStorage.vCardNo,
				wechat_id:localStorage.wechat_id
    		}
    		var headers=Header(data,localStorage.open_id)
    		this.$http.post(this.$store.state.link+'/repay/currentRepayType', Qs.stringify(data),{
    			headers:headers
    		}).then(response => {
				var res=response.data.data;
				if(res==0){
					this.txt="自动划扣 –全额"
				}else if(res==1){
					this.txt="自动划扣 - 最低还款额"
				}else{
					this.txt="手动还款"
				}
	        },response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClickImg(){
    			MessageBox('说明', '提现额度是指在您宜享花的额度范围内所有提现类（微信红包、转账、零钱充值）交易共享的最高额度，目前设置额度比例为50%，若您宜享花总额度为10000元，那么您的提现额度为5000元。');
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
	.card{
		width: 100%;
		height: 4.6rem;
		position: relative;
		background: #fff;
	}
	.img{
		width: 5.86rem;
		height: 3.79rem;
		position: absolute;
		top:.55rem;
		left:.96rem;
	}
	.number{
		color: #fff;
		font-size: .42rem;
		position: absolute;
		text-shadow:0 .02rem .04rem rgba(46,98,208,0.50); 
		top:2.2rem;
		left: 1.43rem;
	}
	.name{
		font-size:.28rem;
		text-shadow:0 .02rem .04rem rgba(46,98,208,0.50);
		color:#ffffff;
		position: absolute;
		top:3.42rem;
		left: 1.43rem;
	}
	.option{
		width:100%;
		height: 1rem;
		border-bottom: .0001rem solid #e9edf2;
		background: #fff;
		line-height: 1rem;
	}
	.top{
		margin-top:.18rem;
		border-top: .0001rem solid #e9edf2;
	}
	.left{
		float: left;
		margin-left:.31rem;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
	}
	.right{
		float: right;
		margin-right: .4rem;
		font-size:.24rem;
		color:#525252;
		letter-spacing:0;
	}
	.low{
		width: .28rem;
		height: .28rem;
		margin-left: .1rem;
		margin-top:-0.04rem;
	}
</style>