<template>
<div class="background">
	<div class="list" @click="handleclickRadio1" v-if="list1">
		<p class="title">最低还款</p>
		<p class="money">{{stmtMinBal}}</p>
		<p class="bottom">本期账单的最低还款额</p>
		<img class="radio" v-if="one" src="/static/images/radio.png"/>
		<img class="radio" v-if="!one" src="/static/images/check.png"/>
	</div>
	<div class="list" @click="handleclickRadio2" v-if="list2">
		<p class="title">已出账单还款</p>
		<p class="money">{{stmtBal}}</p>
		<p class="bottom">本期已出账单的全部待还金额</p>
		<img class="radio" v-if="two" src="/static/images/radio.png"/>
		<img class="radio" v-if="!two" src="/static/images/check.png"/>
	</div>
	<div class="custom" @click="handleclickRadio3" v-if="list3">
		<p class="title">自定义还款</p>
		<input type="number" class="number" v-model="value" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
		<p class="border"></p>
		<p class="bottom">本期已出账单与未出账单最高还款金额</p>
		<img class="radio" v-if="three" src="/static/images/radio.png"/>
		<img class="radio" v-if="!three" src="/static/images/check.png"/>
	</div>
		<button class="btn" :class="{margin:margin,margin2:top}" @click="handleClickPay">
			确认还款
		</button>
		<button v-if="btnseen" class="btnBorder" @click="handleClickBranch">
			账单分期
		</button>
		<button class="btn disabled" disabled="disabled" v-if="!btnseen">
			账单分期
		</button>
</div>
</template>

<script>
	import Qs from 'qs'
	export default {
    	name: "Repay",
    	data () {
      		return {
      			one:false,
      			two:true,
      			three:true,
      			value:'',
      			list1:true,
      			list2:true,
      			list3:true,
      			btnseen:false,
      			margin:false,
      			top:false,
      			stmtMinBal:'',
      			stmtBal:''
      		}
    	},
    	created() {
    		var path=this.$route.query;
    		if(path.branch){
    			this.btnseen=true
    		}
    		if(path.one){
    			this.three=false
    			this.list1=false
    			this.list2=false
    		}
    		if(!this.list1&&!this.list2){
    			this.margin=true
    		}
    		var data={
    			vCardNo:localStorage.vCardNo,
    			wechat_id:localStorage.wechat_id
    		}
    		var headers=Header(data,localStorage.open_id)
    		this.$http.post(this.$store.state.link+'/repay/acct', Qs.stringify(data),{
				headers:headers
    		}).then(response => {
				var res=response.data.data;
				console.log(response.data)
				this.stmtBal=res.stmtBal
				this.stmtMinBal=res.stmtMinBal
				this.value=this.stmtBal+res.stmsTotal
				if(this.stmtMinBal==0){
		      		this.list1=false;
		      		this.two=false
		      		this.top=true
		      	}
				if(this.stmtBal<500){
					this.btnseen=false
				}
	        },response => {
	        	console.log("ajax error");
	      	});
	      	
   		},
    	methods:{
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
    		handleClickPay(){
    			if(!this.one){
    				this.$router.push("/pay?num="+this.stmtMinBal)
    			}
    			if(!this.two){
    				this.$router.push("/pay?num="+this.stmtBal)
    			}
    			if(!this.three){
    				this.$router.push("/pay?num="+this.value)
    			}
    			
    		},
    		handleClickBranch(){
    			this.$router.push("/branch?num="+this.stmtBal)
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
	.list{
		width:100%;
		height:2.74rem;
		background:#ffffff;
		margin-top: .2rem;
		position: relative;
	}
	.custom{
		width:100%;
		height:2.9rem;
		background:#ffffff;
		margin-top: .2rem;
		position: relative;
	}
	.title{
		position: absolute;
		top: .45rem;
		left: 1.2rem;
		font-size:.3rem;
		color:#525252;
		letter-spacing:0;
	}
	.money{
		position: absolute;
		left: 1.1rem;
		bottom: .82rem;
		font-size:.64rem;
		color:#525252;
		letter-spacing:0;
	}
	.bottom{
		position: absolute;
		bottom:.35rem;
		left: 1.1rem;
	}
	.radio{
		height: .48rem;
		width: .48rem;
		position: absolute;
		top:.34rem;
		left: .32rem;
	}
	.number{
		width: 5.71rem;
		height: .76rem;
		font-size:.64rem ;
		border: none;
		position: absolute;
		left: 1.1rem;
		bottom: .98rem;
	}
	.border{
		border:.01rem solid #525252;
		border-top:none;
		width:5.71rem;
		height:.12rem;
		position: absolute;
		bottom: .88rem;
		left: 1.05rem;
	}
	.btn{
		display: block;
		margin: 0 auto;
		width: 5.2rem;
		line-height: .9rem;
		margin-top: .4rem;
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
	.margin{
		margin-top:6.28rem;
	}
	.margin2{
		margin-top:3.35rem;
	}
	.btnBorder{
		display: block;
		width: 5.12rem;
		line-height: .9rem;
		margin: 0 auto;
		margin-top: .4rem;
		border:.04rem solid #42c5d3;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		border-radius: 1rem;
		background: #F8F8F8;
		font-size:.32rem;
	}
	.disabled{
		background:#dadada;
	}
</style>