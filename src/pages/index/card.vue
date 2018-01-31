<template>
	<div class="background">
		<p class="safe">请您提供一张本人银行卡信息</p>
		<div class="form">
			<div class="inputRow">
				<label>卡号</label>
				<input type="number" placeholder="请输入您本人借记卡号" v-model="cardNum" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
			</div>
			<div class="inputRow" @click="handleClickChoose">
				<label>开户银行</label>
				<input readonly="readonly" placeholder="请选择您的开户银行" v-model="cardHome"/>
			</div>
			<div class="inputRow">
				<label>预留手机号</label>
				<input type="number" placeholder="请输入此卡开户时预留手机号" v-model="phoneNum" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
			</div>
			<div class="inputRow" v-if="mobileNum">
				<label>验证码</label>
				<input type="number" id="code" v-on:input ="inputFunc"  placeholder="请输入短信验证码" v-model="code" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
				<span v-if="show" class="reset" @click="getCode">{{reset}}</span>
				<span v-if="!show" class="count">{{count}}s后重发</span>
			</div>
		</div>
		<button disabled="disabled" v-if="btseen" class="btn disabled">
			提交
		</button>
		<button class="btn" v-if="!btseen" @click="handleClick">
			提交
		</button>
	</div>
	
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import Qs from "qs"
	export default {
    	name: "Card",
    	data () {
      		return {
      			cardHome:this.$store.state.card,
      			txt:'银行卡信息',
      			phoneNum:this.$store.state.phoneNum,
      			cardNum:this.$store.state.cardNum,
      			cardId:this.$store.state.cardId,
      			code:'',
      			show: true,
			   	count: '',
			   	timer: null,
			   	reset:"获取验证码",
			   	mobileNum:true,
			   	open_id:'',
			   	txt:"提交",
			   	btseen:true
			   	
      		}
    	},
    	created(){
    		try{
    			this.open_id=localStorage.open_id;
    		}catch(e){
    			//TODO handle the exception
    		}
    		var path=this.$route.query;
	      	if(this.$route.query.choose=="2"){
	      		this.txt="添加";
	      	}
    	},
    	methods:{
    		inputFunc(){
    			if(this.cardNum.length>=16&&this.cardHome.length>3&&this.phoneNum.length>=11&&this.code.length>=6){
    				this.btseen=false
    			}else{
    				this.btseen=true
    			}
    		},
    		handleClick(){
    			var regCard = /^[0-9]*$/;
    			var regPhone=/^(13|14|15|17|18)\d{9}$/;
    			if(this.cardNum==""){
    				MessageBox('提示','银行卡号不能为空，请您输入银行卡号');
    			}else if(regCard.test(this.cardNum)==false||this.cardNum.length>19||this.cardNum.length<16){
    				MessageBox('提示','银行卡号格式错误，请您输入正确格式的银行卡号');
    			}else if(this.cardHome==""){
    				MessageBox('提示','请选择您的开户银行');
    			}else if(this.phoneNum==""){
    				MessageBox('提示','预留手机号不能为空，请输入您的预留手机号');
    			}else if(regPhone.test(this.phoneNum)==false){
    				MessageBox('提示','预留手机号格式不正确，请输入正确格式的预留手机号');
    			}else if(this.mobileNum==true&&this.code==""){
    				MessageBox('提示','验证码不能为空，请输入您的验证码');
    			}else{
    				try{
    					window.localStorage.ReservePhone=this.phoneNum
    				}catch(e){
    					//TODO handle the exception
    				}
    				
    				Indicator.open();
    				var params={
    					wechat_id:localStorage.wechat_id,
    					open_id:this.open_id,
    					bank_card_num:this.cardNum,
    					phone_num:this.phoneNum,	
    					bank_id:this.cardId,
    					vfcode:this.code
    				}
    				var headers=Header(params,localStorage.open_id)
    				this.$http.get(this.$store.state.link+"/acct/bindcard",{
    					params:params,
	    				headers:headers
    				}).then(response =>  {
						Indicator.close();
						console.log(response.data)
					  	if(response.data.retCode==0){
					  		this.$router.push("/information")
					  	}else if(response.data.retCode>0){
					  		MessageBox('提示',response.data.msg);
					  	}else{
					  		this.$router.push("/createFail")
					  	}
					}).catch(function (error) {
						Indicator.close();
			    		console.log(error);
			  		});
    			}
    		},
    		Code(){
    			this.$http.get(this.$store.state.link+'/opt/send',{
					params:{
						wechat_id:localStorage.wechat_id,
						phone_num:this.phoneNum,
						step:20
					}
				}).then(response => {
					console.log(response.data.data)
	        		if(response.data.retCode!=0){
	        			MessageBox('','验证码获取失败，请您重新获取');
	        			this.show=true
	        		}
		        },response => {
		        	console.log("ajax error");
		      	});
    		},
    		handleClickChoose(){
    			var cardNum=this.cardNum;
    			var phoneNum=this.phoneNum;
    			this.$store.dispatch("changeCardNum",cardNum)
    			this.$store.dispatch("changePhoneNum",phoneNum)
    			this.$router.push("/cardHome")
    		},
    		getCode(){
    			var regPhone=/^(13|14|15|17|18)\d{9}$/;
    			if(this.phoneNum==""){
    				//MessageBox('提示','预留手机号不能为空，请输入您的预留手机号');
    			}else if(regPhone.test(this.phoneNum)==false){
    				MessageBox('提示','预留手机号格式错误，请输入您的预留手机号');
    			}else{
	    			this.Code();
			    	const TIME_COUNT = 60;
			        if (!this.timer) {
				        this.count = TIME_COUNT;
				        this.show = false;
				        this.timer = setInterval(() => {
				        if (this.count > 0 && this.count <= TIME_COUNT) {
				            this.count--;
				        } else {
				        	this.reset="重新获取";
				            this.show = true;
				            clearInterval(this.timer);
				            this.timer = null;
				            }
				        }, 1000)
			        }
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
        position: absolute;
	}
	.safe{
		margin-top:.7rem ;
		margin-left: .3rem;
		font-size:.28rem;
		color:#999999;
		letter-spacing:0;
		text-align:left;
	}
	.form{
		height: 4rem;
		width: 100%;
		background: #fff;
		margin-top: .3rem;
	}
	.inputRow{
		width:100%;
		border-bottom: .005rem solid #f3f3f3;
		background: #fff;
	}
	.inputRow label{
		display: inline-block;
		width:1.87rem;
		padding-left: .3rem;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
		line-height:1rem ;
	}
	.inputRow input{
		width: 5rem;
		border:none;
		font-size: .28rem;
		
	}
	#code{
		width: 3.4rem;
	}
	.inputRow span{
		float: right;
		margin-right: .4rem;
		font-size:.28rem ;
	}
	.reset{
		color:#548afc;
		margin-top: .35rem;
	}
	.count{
		margin-top: .35rem;
	}
	.second{
		margin: .49rem 0 .28rem .31rem;
		background: #F8F8F8;
		font-size: .28rem;
		color: #999;
		line-height: .36rem;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin-top: 1rem;
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