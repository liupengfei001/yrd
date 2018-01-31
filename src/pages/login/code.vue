<template>
	<div class="background">
		<div class="top">
			<img class="img" src="/static/images/login.png"/>
			<p class="login">已发送验证码短信到{{phoneNum}}</p>
		</div>
		<div class="inputRow">
			<span class="txt">
				<img class="phone" src="/static/images/phone.png"/>
				<span>验证码</span>
			</span>
			<input type="number" placeholder="请输入短信验证码" v-on:input ="inputFunc" v-model="code" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
			<span v-show="show" class="reset" @click="getCode">重新获取</span>
			<span v-show="!show" class="count">{{count}}s后重发</span>
		</div>
		<button disabled="disabled" v-if="btseen" class="btn disabled">
			登录
		</button>
		<div v-if="!btseen" class="btn" @click="handleClickLogin">
			登录
		</div>
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
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	export default {
    	name: "Code",
    	data () {
      		return {
      			phoneNum:'',
      			code:'',
      			show: true,
			   	count: '',
			   	timer: null,
			   	btseen:true,
			   	login:""
      		}
    	},
    	created(){
    		try{
    			this.phoneNum=localStorage.login
    		}catch(e){
    			//TODO handle the exception
    		}
    		var path=this.$route.query;
    		if(path.login){
    			this.login=true
    		}
    	},
    	mounted(){
    		this.getCode()
    	},
    	components:{
    		
    	},
    	methods:{
    		Code(){
    			this.$http.get(this.$store.state.link+'/opt/send',{
					params:{
						wechat_id:localStorage.wechat_id,
						phone_num:this.phoneNum,
						step:0
					}
				}).then(response => {
					console.log(response.data)
	        		if(response.data.retCode!=0){
	        			MessageBox('',"获取验证码失败，请您重新获取");
	        			this.show=true;
	        		}
		        },response => {
		        	console.log("ajax error");
		      	});
    		},
		    getCode(){
		    	this.Code();
		    	Toast('验证码已发送至'+this.phoneNum+'请注意查收');
		    	const TIME_COUNT = 60;
		        if (!this.timer) {
			        this.count = TIME_COUNT;
			        this.show = false;
			        this.timer = setInterval(() => {
			        if (this.count > 0 && this.count <= TIME_COUNT) {
			            this.count--;
			        } else {
			            this.show = true;
			            clearInterval(this.timer);
			            this.timer = null;
			            }
			        }, 1000)
		        }
		    },
		    handleClickLogin(){
	    		Indicator.open();
    			this.$http.get(this.$store.state.link+'/register',{
					params:{
						wechat_id:localStorage.wechat_id,
						wechat_name:localStorage.wechat_name,
						phone_num:this.phoneNum,
						vfcode:this.code
					}
				}).then(response => {
					Indicator.close();
					if(response.data.retCode==0){
						var open_id=response.data.data.open_id;
    					var mobile=response.data.data.authen_mobile;
    					try{
			    			window.localStorage.open_id=open_id;
			    			window.localStorage.mobile=mobile;
			    			window.localStorage.bindCard=""
			    		}catch(e){
			    			//TODO handle the exception
			    		}
						this.$router.push("/")
					}else if(response.data.retCode>0){
						MessageBox('提示',response.data.msg);
					}else{
						this.$router.push("/createFail")
					}
		        },response => {
		        	Indicator.close();
		        	console.log("ajax error");
		      	});
		    },
		    inputFunc(){
    			if(this.code.length>=6){
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
		position:absolute
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
		border-bottom: .005rem solid #f3f3f3;
		border-top: .005rem solid #f3f3f3;
		background: #fff;
	}
	.txt{
		display: inline-block;
		width:2rem;
		line-height: 1rem;
		padding-left: .32rem;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
		line-height:1rem ;
	}
	.phone{
		width: .24rem;
		height: .4rem;
		margin-right: .1rem;
	}
	.inputRow input{
		width: 3.4rem;
		height: 100%;
		border:none;
		font-size:.28rem;
		color:#333333;
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