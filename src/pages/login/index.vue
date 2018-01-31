<template>
	<div class="background">
		<div class="top">
			<img class="img" src="/static/images/login.png"/>
			<p class="login">立即登录，开启您的宜享生活</p>
		</div>
		<div class="inputRow">
			<span class="txt">
				<img class="phone" src="/static/images/phone.png"/>
				<span>手机号</span>
			</span>
			<input type="number" placeholder="请输入宜人贷注册手机号" v-on:input ="inputFunc" v-model="phoneNum" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/" />
		</div>
		<button disabled="disabled" v-if="btseen" class="btn disabled">
			下一步
		</button>
		<button v-if="!btseen" class="btn" @click="handleClickNext">
			下一步
		</button>
		<div class="combottom" @click="handleClick">
			<img class="logo" src="/static/images/logo.png"/>
			<p class="introduce">
				什么是宜享花？
			</p> 
			<div class="clear"></div> 
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
    	name: "Login",
    	data () {
      		return {
      			phoneNum:"",
      			btseen:true,
      			login:""
      		}
    	},
    	created(){
//  		var path=this.$route.query;
//  		if(path.login){
//  			this.login=true
//  		}
    	},
    	methods:{
    		handleClickNext(){
    			var regPhone=/^(13|14|15|17|18)\d{9}$/;
    			if(this.phoneNum==""){
    				MessageBox('','手机号不能为空，请输入您的手机号');
    			}else if(regPhone.test(this.phoneNum)==false){
    				MessageBox('','手机号格式不正确，请输入正确格式的手机号');
    			}else{
    				try{
    					window.localStorage.login=this.phoneNum;
    				}catch(e){
    					//TODO handle the exception
    				}
    				this.$router.push("/code")
    			}
    		},
    		inputFunc(){
				if(this.phoneNum.length>=11){
					this.btseen=false
				}else{
					this.btseen=true
				}    			
    		},
    		handleClick(){
    			this.$router.push("/introduction")
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
		height: 5.32rem;
		background: url(/static/images/indexbg.png) no-repeat;
		background-size:cover ;
		overflow: hidden;
		margin-bottom: .07rem;
	}
	.img{
		display: block;
		width: 1.39rem;
		height: 1.72rem;
		margin:0 auto;
		margin-top: 1.17rem;
	}
	.login{
		width: 100%;
		text-align: center;
		font-size:.28rem;
		line-height: .4rem;
		color:#ffffff;
		letter-spacing:0;
		margin-top: .5rem;
	}
	.inputRow{
		width:100%;
		border-bottom: .02rem solid #f3f3f3;
		border-top: .02rem solid #f3f3f3;
		background: #fff;
		height: 1rem;
	}
	.phone{
		width: .24rem;
		height: .4rem;
		margin-right: .1rem;
	}
	.inputRow input{
		width: 4rem;
		height: 1rem;
		border:none;
		font-size:.28rem;
		color:#333333;
	}
	.txt{
		display: inline-block;
		width:2rem;
		height: 1rem;
		padding-left: .32rem;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
		position: relative;
	}
	.txt span{
		position:absolute;
		top: .06rem;
	}
	.reset{
		color:#548afc;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin-top: .48rem;
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
	.disabled{
		background:#dadada;
	}
	.combottom{
		width:3.6rem;
		margin:0 auto ;
		margin-top:3rem;
	}
	.introduce{
		text-decoration:underline;
		color:#548afc;
		font-size:.24rem;
		letter-spacing:0;
		text-align:center;
		line-height: .33rem;
		float: left;
	}
	.logo{
		width: 1.19rem;
		height: .3rem;
		float: left;
		margin-right: .2rem;
	}
	.clear{
		clear:both
	}
</style>