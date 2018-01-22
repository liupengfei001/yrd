<template>
	<div class="background">
		<div class="content">
			<div class="list" @click="handleclickRadio1">
				<p class="title">自动划扣 – 全额</p>
				<p class="bottom">于到期还款日自动划扣已出账单额度</p>
				<img class="radio" v-if="one" src="/static/images/radio.png"/>
				<img class="radio" v-if="!one" src="/static/images/check.png"/>
			</div>
			<div class="list" @click="handleclickRadio2">
				<p class="title">自动划扣 - 最低还款额</p>
				<p class="bottom">于到期还款日自动划扣已出账单最低还款额度</p>
				<img class="radio" v-if="two" src="/static/images/radio.png"/>
				<img class="radio" v-if="!two" src="/static/images/check.png"/>
			</div>
			<div class="list" @click="handleclickRadio3">
				<p class="title">手动还款</p>
				<p class="bottom">请于到期还款日前通过微信公众号进行还款</p>
				<img class="radio" v-if="three" src="/static/images/radio.png"/>
				<img class="radio" v-if="!three" src="/static/images/check.png"/>
			</div>
		</div>
		<div class="btn" @click="handleClick">
			确 认
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
    	name: "way",
    	data () {
      		return {
      			one:false,
      			two:true,
      			three:true
      		}
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
    		handleClick(){
    			var data={
    				vCardNo:localStorage.vCardNo
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/acct', Qs.stringify(data)
				).then(response => {
					var res=response.data.data;
					
					this.$router.push("/set")
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
        position: absolute;
	}
	.content{
		background: #fff;
		margin-top: .62rem;
	}
	.list{
		width:100%;
		height:1.45rem;
		position: relative;
		border-bottom: .005rem solid #E6E6E6;
	}
	.radio{
		height: .48rem;
		width: .48rem;
		position: absolute;
		top:.48rem;
		left: .31rem;
	}
	.title{
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		line-height:.32rem;
		position: absolute;
		left: 1.15rem;
		top: .27rem;
	}
	.bottom{
		font-size:.24rem;
		color:#333333;
		letter-spacing:0;
		line-height:.32rem;
		position: absolute;
		left: 1.15rem;
		top: .84rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin:0 auto ;
		margin-top: 3.2rem;
		background: #42c5d3;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
		background-size:cover ;
	}
</style>