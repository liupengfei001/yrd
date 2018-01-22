<template>
	<div class="background">
		<div class="top">
			<img class="toplogo" src="/static/images/toplogo.png" alt="" />
			<p class="cardTitle">当前可用额度是(元)</p>
			<p class="money">{{money}}</p>
			<p class="withdrawals">当前可提现额度：{{cashLimit}}元</p>
			<p class="dash"></p>
			<p class="quota">总额度是{{quota}}元</p>
		</div>
		<div class="list">
			<p class="card" @click="handleClick">账户信息<img class="gt" src="/static/images/gt.png"/></p>
			<p class="describe" v-if="!seen">您尚未绑卡！点击账户信息，长按复制卡号去微信钱包绑卡</p>
			<p @click="handleClickRepement">我的账单<img class="gt" src="/static/images/gt.png"/></p>
			<p @click="handleClickSeparate">现金分期<img class="gt" src="/static/images/gt.png"/></p>
			<p @click="handleClickQuestion">常见问题<img class="gt" src="/static/images/gt.png"/></p>
		</div>
		<div class="bottom-wrap" v-if="!seen" @click="handleClickFlow">
			<img class="logo" src="/static/images/question.png"/>
			<p class="bottom">
				绑卡说明
			</p>
		</div>
		<div class="bottom-wrap" v-if="seen" @click="handleClickBottom">
			<img class="img" src="/static/images/logo.png"/>
			<p class="introduce">
				什么是宜享花？
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
      			quota:'',
      			money:'',
      			cardNum:'',
      			seen:true,
      			open_id:'',
      			cashLimit:''
      		}
    	},
    	beforeCreate() {
			try{
    			this.open_id=localStorage.open_id
    		}catch(e){
    			//TODO handle the exception
    		}
    		this.$http.get(this.$store.state.link+'/wecard/limit',{
	      		params:{
					wechat_id:localStorage.wechat_id,
					open_id:this.open_id
				}
	      	}).then(response => {
	      		if(response.data.retCode==0){
	      			console.log(response.data)
	      			this.quota=response.data.data.creditLimit
	      			this.money=response.data.data.availableLimit
	      			this.cashLimit=response.data.data.cashLimit
	      		}else{
	      			MessageBox('提示',response.data.msg);
	      		}
	      		if(this.quota>this.money){
	      			this.seen=true
	      			if(localStorage.bindCard==undefined){
	      				try{
		      				window.localStorage.bindCard=this.seen
		      			}catch(e){
		      				//TODO handle the exception
		      			}
	      			}
	      		}else{
	      			if(localStorage.bindCard){
	      				this.seen=true
	      			}else{
	      				this.seen=false
	      			}
	      			
	      		}
	        },response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/cardInformation")
    		},
    		handleClickRepement(){
    			this.$router.push("/repayment")
    		},
    		handleClickSeparate(){
    			this.$router.push("/separate")
    		},
    		handleClickBottom(){
    			this.$router.push("/introduction")
    		},
    		handleClickFlow(){
    			this.$router.push("/flow")
    		},
    		handleClickQuestion(){
    			this.$router.push("/question")
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
		height: .4rem;
		position: absolute;
		top:.38rem;
		left:.40rem;
	}
	.cardTitle{
		width: 100%;
		font-size:.3rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		position: absolute;
		bottom: 3.97rem;
		text-align: center;
	}
	.quota{
		width: 100%;
		font-size:.30rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		text-align:center;
		position: absolute;
		bottom: 1.36rem;
	}
	.dash{
		width: 5rem;
		height: .0001rem;
		border-top: .0001rem dashed #fff;
		margin: 0 auto;
		position: absolute;
		bottom: 2.04rem;
		left: 1.25rem;
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
		bottom: 2.74rem;
	}
	.withdrawals{
		width: 100%;
		font-size:.24rem;
		color:#ffffff;
		letter-spacing:0;
		position: absolute;
		bottom: 2.29rem;
		text-align: center;
	}
	.list{
		width: 100%;
	}
	.list p{
		font-size: .32rem;
		line-height: 1rem;
		padding:0 .5rem 0 .3rem ;
		border-bottom: .005rem solid #e9edf2;
		background: #fff;
	}
	.list .describe{
		padding: 0;
		padding-left: .3rem;
		font-size:.24rem;
		color:#ff771a;
		line-height: .72rem;
		letter-spacing:0;
		border: none;
		background:#F8F8F8 ;
	}
	.gt{
		width: .17rem;
		height: .26rem;
		float: right;
		margin-top: .37rem;
	}
	.bottom{
		line-height: .48rem;
		font-size:.24rem;
		color:#548afc;
		letter-spacing:0;
		position: absolute;
		right:3rem;
		top: .26rem;
		text-align:center;
	}
	.bottom-wrap{
		position: relative;
	}
	.logo{
		width:.32rem ;
		height: .32rem;
		position: absolute;
		left: 3.07rem;
		top: .33rem;
	}
	.img{
		width: 1.19rem;
		height: .3rem;
		position: absolute;
		left: 2.23rem;
		top: .96rem;
	}
	.introduce{
		position: absolute;
		text-decoration:underline;
		position: absolute;
		right: 2.23rem;
		top: .96rem;
		font-size:.24rem;
		color:#548afc;
		letter-spacing:0;
		line-height: .33rem;
	}
</style>