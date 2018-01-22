<template>
	<div class="background">
		<div class="top">
			<p class="title">申请分期还款</p>
			<p class="money">{{withdrawAmt}}</p>
			<p class="describe">此金额为您本期账单<span class="text">应还最低还款额</span>之外的最高可分期金额。</p>
		</div>
		<div class="choose">
			<div class="list" @click="handleclickRadio1">
				<div class="input">
					<p class="option">分{{option1}}期</p>
					<img class="radio" v-if="one" src="/static/images/radio.png"/>
					<img class="radio" v-if="!one" src="/static/images/check.png"/>
				</div>
				<div class="dateList" v-if="!one">
					<p>每月到期扣款日 <span class="date">每月{{data6}}日</span></p>
					<p>每期还款金额为 <span class="repayment">{{money6}}元</span></p>
					<p>第一期还款金额为<span class="first">{{money6}}元</span></p>
				</div>
			</div>
			<div class="list" @click="handleclickRadio2">
				<div class="input">
					<p class="option">分{{option2}}期</p>
					<img class="radio" v-if="two" src="/static/images/radio.png"/>
					<img class="radio" v-if="!two" src="/static/images/check.png"/>
				</div>
				
				<div class="dateList" v-if="!two">
					<p>每月到期扣款日 <span class="date">每月{{data9}}日</span></p>
					<p>每期还款金额为 <span class="repayment">{{money9}}元</span></p>
					<p>第一期还款金额为<span class="first">{{money9}}元</span></p>
				</div>
			</div>
			<div class="list" @click="handleclickRadio3">
				<div class="input">
					<p class="option">分{{option3}}期</p>
					<img class="radio" v-if="three" src="/static/images/radio.png"/>
					<img class="radio" v-if="!three" src="/static/images/check.png"/>
				</div>
				<div class="dateList" v-if="!three">
					<p>每月到期扣款日 <span class="date">每月{{data12}}日</span></p>
					<p>每期还款金额为 <span class="repayment">{{money12}}元</span></p>
					<p>第一期还款金额为<span class="first">{{money12}}元</span></p>
				</div>
			</div>
		</div>
		<button class="btn" @click="handleClick">确认分期</button>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import Qs from 'qs'
	export default {
    	name: "Index",
    	data () {
      		return {
      			one:true,
      			two:true,
      			three:false,
      			option1:"6",
      			option2:"9",
      			option3:"12",
      			loanTerm:'',
      			withdrawAmt:'',
      			stmtBal:"",
      			stmtMinBal:"",
      			data6:'',
      			data9:'',
      			data12:'',
      			money6:'',
      			money9:'',
      			money12:''
      		}
    	},
    	created() {
    		var data={
    			vCardNo:localStorage.vCardNo
    		}
    		this.$http.post(this.$store.state.link+'/repay/acct', Qs.stringify(data)
			).then(response => {
				var res=response.data.data;
				this.withdrawAmt=res.stmtBal
				this.stmtMinBal=res.stmtMinBal
				if(this.stmtMinBal!=0){
		      		MessageBox.confirm('需完成最低金额还款才可进行账单分期，点击确认跳转支付最低还款金额。').then(action => {
  						this.$router.push("/pay?num="+this.stmtMinBal)
					},action => {
  						this.$router.push("/repayment")
					});
		      	}
				this.ready()
	        },response => {
	        	console.log("ajax error");
	      	});
   		},
    	methods:{
    		ready(){
    			var Data={
	    			vCardNo:localStorage.vCardNo,
	    			loanTerm:'12',
	    			withdrawAmt:this.withdrawAmt
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/loanSetup', Qs.stringify(Data)
				).then(response => {
					console.log(response.data.data)
					var res=response.data.data.loanItem.termList[0];
					this.data12=res.pmtDueDate.substr(res.pmtDueDate.length-2)
					this.money12=res.schdAmt
		        },response => {
		        	console.log("ajax error");
		      	});
		      	var Data={
	    			vCardNo:localStorage.vCardNo,
	    			loanTerm:'9',
	    			withdrawAmt:this.withdrawAmt
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/loanSetup', Qs.stringify(Data)
				).then(response => {
					console.log(response.data.data)
					var res=response.data.data.loanItem.termList[0];
					this.data9=res.pmtDueDate.substr(res.pmtDueDate.length-2)
					this.money9=res.schdAmt
		        },response => {
		        	console.log("ajax error");
		      	});
		      	var Data={
	    			vCardNo:localStorage.vCardNo,
	    			loanTerm:'6',
	    			withdrawAmt:this.withdrawAmt
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/loanSetup', Qs.stringify(Data)
				).then(response => {
					console.log(response.data.data)
					var res=response.data.data.loanItem.termList[0];
					this.data6=res.pmtDueDate.substr(res.pmtDueDate.length-2)
					this.money6=res.schdAmt
		        },response => {
		        	console.log("ajax error");
		      	});
    		},
    		handleclickRadio1(){
    			this.one=false
    			this.two=true
    			this.three=true
    		},
    		handleclickRadio2(){
    			this.one=true
    			this.two=false
    			this.three=true
    		},
    		handleclickRadio3(){
    			this.one=true
    			this.two=true
    			this.three=false
    		},
    		handleClick(){
    			if(!this.one){
    				this.loanTerm=this.option1
    			}
    			if(!this.two){
    				this.loanTerm=this.option2
    			}
    			if(!this.three){
    				this.loanTerm=this.option3
    			}
    			var data={
	    			vCardNo:localStorage.vCardNo,
	    			loanTerm:this.loanTerm
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/stmtloan', Qs.stringify(data)
				).then(response => {
					var res=response.data.retCode;
					if(res==0){
						this.$router.push("/branchFail?succes=true")
					}else{
						MessageBox('提示', response.data.data);
					}
		        },response => {
		        	console.log("ajax error");
		      	});
    		}
    	}
   }
</script>

<style scoped="scoped">
	.background{
		height:100%;
		width:100%;
		background: #F8F8F8;
        position:absolute;
	}
	.top{
		width: 100%;
		height: 2.74rem;
		background: #fff;
		margin-top: .2rem;
		overflow: hidden;
	}
	.title{
		font-size:.30rem;
		color:#525252;
		letter-spacing:0;
		margin: .36rem 0 0 .33rem;
		font-weight:600;
	}
	.money{
		height: 1.08rem;
		font-size:.9rem;
		color:#525252;
		letter-spacing:0;
		margin: .13rem 0 0 .32rem;
	}
	.describe{
		font-size:.24rem;
		color:#999999;
		letter-spacing:0;
		margin: .06rem 0 0 .33rem;
	}
	.text{
		text-decoration:underline; 
		color:#525252;
	}
	.choose{
		margin-top: .19rem;
	}
	.list{
		min-height: 1rem;
		background: #fff;
		border-bottom: 0.001rem solid #e6e6e6;
		position: relative;
	}
	.radio{
		height: .48rem;
		width: .48rem;
		position: absolute;
		top:.26rem;
		left: .32rem;
	}
	.option{
		position: absolute;
		top:.38rem;
		left:1.1rem;
		font-size:.30rem;
		color:#525252;
		letter-spacing:0;
	}
	.input{
		height: 1rem;
	}
	.dateList{
		height: 2rem;
		background: #fff;
	}
	.dateList p{
		height: .4rem;
		font-size:.28rem;
		color:#525252;
		letter-spacing:0;
		margin-top: .25rem;
		margin-left: 1.1rem;
	}
	.dateList span{
		font-size:.28rem;
		color:#525252;
		letter-spacing:0;
		float: right;
		margin-right: .62rem;
	}
	.btn{
		display: block;
		margin: 0 auto;
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
	}
</style>