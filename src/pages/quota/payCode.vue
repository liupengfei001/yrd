<template>
	<div class="background">
		<p class="safe">已发送验证码短信到{{phoneNum}}</p>
		<div class="inputRow">
			<span class="txt">
				<img class="phone" src="/static/images/phone.png"/>
				<span>验证码</span>
			</span>
			<input type="number" placeholder="请输入短信验证码" v-on:input ="inputFunc" v-model="code"/>
			<span v-show="show" class="reset" @click="getCode">重新获取</span>
			<span v-show="!show" class="count">{{count}}s后重发</span>
		</div>
		<button disabled="disabled" v-if="btseen" class="btn disabled">
			确认还款
		</button>
		<div v-if="!btseen" class="btn" @click="handleClickLogin">
			确认还款
		</div>
	</div>
	
</template>

<script>
	import Qs from 'qs'
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
			   	money:'',
			   	cardNo:'',
			   	serial:''
      		}
    	},
    	created(){
    		var path=this.$route.query;
    		if(path.num!=undefined){
    			this.money=path.num
    		}
    		if(path.mobile!=undefined){
    			this.phoneNum=path.mobile
    		}
    		if(path.cardNo!=undefined){
    			this.cardNo=path.cardNo
    		}
    		console.log(typeof this.money.toString());
    	},
    	mounted(){
    		this.getCode()
    	},
    	methods:{
    		Code(){
    			var data={
	    			cardNo:this.cardNo,
	    			vCardNo:localStorage.vCardNo,
	    			txnAmt:this.money
	    		}
    			console.log(data)
	    		this.$http.post(this.$store.state.link+'/repay/sendSms', Qs.stringify(data)
				).then(response => {
					var res=response.data.data;
					this.serial=res
					console.log(this.serial)
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
		    	var data={
	    			cardNo:this.cardNo,
	    			vCardNo:localStorage.vCardNo,
	    			txnAmt:this.money,
	    			smsCode:this.code,
	    			serial:this.serial
	    		}
	    		this.$http.post(this.$store.state.link+'/repay/quickPay', Qs.stringify(data)
				).then(response => {
					var res=response.data.retCode;
					if(res!=444){
						this.$router.push("/payState?success=true")
					}else{
						this.$router.push("/payState")
					}
		        },response => {
		        	console.log("ajax error");
		      	});
		    },
		    inputFunc(){
    			if(this.code.length>=6){
    				this.btseen=false
    			}else{
    				this.btseen=true
    			}
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
	.img{
		width: 2rem;
		height: 2.47rem;
		margin:1rem 0 0 2.76rem;
	}
	.safe{
		width: 100%;
		margin:1.2rem 0 .4rem 0 ;
		font-size:.28rem;
		color:#999999;
		letter-spacing:0;
		text-align:center;
	}
	.inputRow{
		width:100%;
		border-bottom: .005rem solid #f3f3f3;
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
		line-height: 1rem;
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
		margin-top: .99rem;
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
</style>