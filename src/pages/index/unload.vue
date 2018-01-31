<template>
	<div class="background">
		<p class="safe">个人身份证照片</p>
		<div class="form">
			<div class="inputRow in" @click="handleClickUnload">
				身份证照片
				<span class="gt" v-if="seen">
					去上传
					<img src="/static/images/gt.png"/>
				</span>
				<span class="gt" v-if="!seen">已上传</span>
			</div>
			<div class="inputRow in" v-if="!seen">
				<label>身份证号</label>
				<input type="text" readonly="readonly" v-model="IDcard"/>
			</div>
			<div class="inputRow in" v-if="!seen">
				<label>姓名</label>
				<input type="text" readonly="readonly" v-model="name"/>
			</div>
			<p class="second">实名手机号</p>
			<div class="inputRow">
				<label>手机号</label>
				<input type="number" placeholder="请输入本人实名认证手机号" v-if="codeseen" v-on:input ="inputFunc" v-model="phoneNum" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
				<input type="text" readonly="readonly" v-if="!codeseen" v-model="phoneNum"/>
			</div>
			<div class="inputRow" v-if="codeseen">
				<label>验证码</label>
				<input type="number" id="code" placeholder="请输入短信验证码" v-model="code" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
				<span v-if="show" class="reset" @click="getCode">{{reset}}</span>
				<span v-if="!show" class="count">{{count}}s后重发</span>
			</div>
		</div>
		<button disabled="disabled" v-if="btseen" class="btn disabled">
			提交
		</button>
		<button v-if="!btseen" class="btn" @click="handleClick">
			提交
		</button>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	export default {
    	name: "Unload",
    	data () {
      		return {
      			IDcard:"",
      			name:"",
      			isActive: true,
      			phoneNum:'',
      			seen:true,
      			btseen:true,
      			show: true,
			   	count: '',
			   	timer: null,
			   	code:'',
			   	reset:"获取验证码",
			   	codeseen:true,
			   	mobile:'',
			   	params:'',
			   	wechat_id:localStorage.wechat_id
      		}
    	},
    	created() {
    		try{
    			this.wechat_id=localStorage.wechat_id
    			if(localStorage.mobile){
    				this.mobile=localStorage.mobile
    			}
    		}catch(e){
    			//TODO handle the exception
    		}
    		var path=this.$route.query;
	      	if(this.$route.query.success){
	      		this.seen=false;
	      		this.IDcard=path.idcard;
	      		this.name=path.name;
	      	}else if(this.$route.query.success=="undefined"&&this.$route.query.success!=true){
	      		MessageBox('','上传失败，请重新上传');
	      	}
	      	if(this.mobile.length>10){
    			this.phoneNum=this.mobile;
    			this.codeseen=false;
    			if(this.seen==false){
    				this.btseen=false
    			}
    		}
	    },
    	methods:{
    		handleClick(){
    			if(this.codeseen==false){
    				this.params={
    					wechat_id:this.wechat_id,
						phone_num:this.phoneNum,
						idcard_num:this.IDcard
    				}
    			}else{
    				this.params={
    					wechat_id:this.wechat_id,
						phone_num:this.phoneNum,
						vfcode:this.code,
						idcard_num:this.IDcard
    				}
    			}
    			
    			var regPhone=/^(13|14|15|17|18)\d{9}$/;
    			if(this.phoneNum==""){
    				MessageBox('','手机号不能为空，请输入您的手机号');
    			}else if(regPhone.test(this.phoneNum)==false){
    				MessageBox('','手机号格式不正确，请输入正确格式的手机号');
    			}else{
    				Indicator.open();
    				var headers=Header(this.params,localStorage.open_id)
    				this.$http.get(this.$store.state.link+'/valid/idcard',{
    					params:this.params,
    					headers:headers
    				}).then(response => {
    					console.log(response.data.data)
    					Indicator.close();
    					if(response.data.retCode==0){
    						this.$router.push("/information")
    					}else if(response.data.retCode>0){
    						MessageBox('提示',response.data.msg);
    					}else{
    						this.$router.push("/createFail")
    					}
			        },response => {
			        	Indicator.close();
			        	console.log("ajax error");
			      	});
    			}
    		},
    		Code(){
    			this.$http.get(this.$store.state.link+'/opt/send',{
					params:{
						wechat_id:this.wechat_id,
						phone_num:this.phoneNum,
						step:10
					}
				}).then(response => {
	        		if(response.data.retCode!=0){
	        			MessageBox('','验证码获取失败，请您手动获取');
	        			this.show=true;
	        		}
		        },response => {
		        	console.log("ajax error");
		      	});
    		},
    		inputFunc(){
    			if(this.phoneNum.length>=11&&this.seen==false){
    				this.btseen=false
    			}else{
    				this.btseen=true
    			}
    		},
    		getCode(){
    			var regPhone=/^(13|14|15|17|18)\d{9}$/;
    			if(this.phoneNum==""){
    				//MessageBox('','手机号不能为空，请输入您的手机号');
    			}else if(regPhone.test(this.phoneNum)==false){
    				MessageBox('','手机号格式不正确，请输入正确格式的手机号');
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
		    },
			handleClickUnload(){
				if(this.seen==true){
		    		var params={
		    			open_id:localStorage.open_id
		    		}
		    		var headers=Header(params,localStorage.open_id)
    				this.$http.get(this.$store.state.link+"/ocr",{
    					params:params,
    					headers:headers
    				}).then(response => {
    					var res=response.data
    					if(res.retCode==0){
    						window.location.href=res.data
    					}else{
    						MessageBox('提示',res.msg);
    					}
			      	},response => {
			        	console.log("ajax error");
			      	});
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
		position:absolute
	}
	.safe{
		margin: 0 auto;
		margin: .52rem 0 0 .31rem;
		font-size:.28rem;
		color:#999999;
		letter-spacing:0;
		text-align:left;
	}
	.form{
		width: 100%;
		margin-top: .3rem;
	}
	.gt{
		float: right;
		margin-right: .45rem;
		font-size: .3rem;
		color:#999;
	}
	.gt img{
		width: .17rem;
		height: .26rem;
		margin-left: .1rem;
	}
	.inputRow{
		background: #fff;
		border-bottom: .005rem solid #f3f3f3;
		background: #fff;
		padding-left: .32rem;
		font-size:.32rem;
	}
	.in{
		line-height: 1.01rem;
	}
	.inputRow label{
		display: inline-block;
		width:1.6rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
		line-height:1rem ;
	}
	.inputRow input{
		width: 5rem;
		height: 1rem;
		border:none;
		font-size:.28rem;
		color:#333333;
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
		width:5.20rem;
		height:.90rem;
		box-shadow:0 .07rem .1rem 0 rgba(218,218,218,0.30);
		border-radius:1rem;
		background: #42c5d3;
		border:none;
		color:#ffffff;
		font-size: .32rem;
		margin-top:.45rem;
		margin-left:1.14rem;
	}
	.disabled{
		background:#dadada;
	}
</style>