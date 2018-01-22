<template>
	<div class="background">
		<p class="safe">
			请提交以下信息
		</p>
		<div class="form">
			<div class="step">
				<div class="cricle cricle1 cricleActive">1</div>
				<div class="cricle cricle2" :class="{cricleActive:show1}">2</div>
				<div class="long long1" :class="{longActive:!seen}"></div>
				<div class="long long2" :class="{longActive:show1}"></div>
			</div>
			<div class="right">
				<div class="persone border" @click="handleClickPersone">
					个人信息	
					<span class="gt" v-if="seen">去提交
						<img src="/static/images/gt.png"/>
					</span>
					<span class="gt" v-if="!seen">已提交
					</span>
				</div>
				<div class="card" @click="handleClickCard">
					银行卡信息	
					<span class="gt" v-if="show">{{txt}}
						<img src="/static/images/gt.png"/>
					</span>
					<span class="gt" v-if="show1">已提交
					</span>
				</div>
			</div>
			
		</div>
		<p class="agreement">点击即表示同意<span class="color">《XX协议》</span>与<span class="color">《XXX协议》</span></p>
		<button disabled="disabled" v-if="seenBtn" class="btn disabled">
			开户
		</button>
		<button v-if="!seenBtn" class="btn" @click="handleClickNext">
			开户
		</button>
		<commentBottom></commentBottom>
	</div>
</template>

<script>
	import CommentBottom from "@/components/bottom.vue";
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
    	name: "Information",
    	data () {
      		return {
      			seen:true,
      			show:false,
      			show1:false,
      			seenBtn:true,
      			idcard:'',
      			bankcard:'',
      			open_id:"",
      			txt:"去提交"
      		}
    	},
    	components:{
    		commentBottom : CommentBottom
    	},
    	created(){
    		this.$http.get(this.$store.state.link+'/steps',{
	      		params:{
					wechat_id:localStorage.wechat_id
				}
	      }).then(response => {
		      	console.log(response.data.data)
		      	if(response.data.data!=null){
	      			this.idcard=response.data.data.valid_idcard;
					this.bankcard=response.data.data.valid_bankcard;
		        	if(this.idcard=='true'){
	    				this.seen=false;
	    				this.show=true;
	    			}
		        	if(this.bankcard=='true'){
		        		this.show=false;
	    				this.show1=true;
	    				this.seenBtn=false
	    			}
		        	
		        }
	        },response => {
	        	console.log("ajax error");
	      	});
	      	var path=this.$route.query;
	      	if(path.search){
	      		this.show1=false;
      			this.show=true;
      			this.txt="重新提交"
	      	}
	      	try{
    			this.open_id=localStorage.open_id
    		}catch(e){
    			//TODO handle the exception
    		}
    	},
    	methods:{
    		handleClickPersone(){
    			if(this.seen==true){
    				this.$router.push("/unload")
    			}
    		},
    		handleClickCard(){
    			if(this.show==true){
    				this.$router.push("/card")
    			}
    		},
    		handleClickNext(){
    			Indicator.open()
    			this.$http.get(this.$store.state.link+'/poll/get/webanknum',{
		      		params:{
						wechat_id:localStorage.wechat_id,
						open_id:this.open_id
					}
		      	}).then(response => {
		      		Indicator.close();
		      		var ret=response.data.retCode;
		      		if(ret==0){
		      			var card_num=response.data.data.webank_num
		      			this.$router.push("/createSuccessful")
		      		}else if(ret<0){
		      			this.$router.push("/createFail")
		      		}else{
		      			if(ret>=31&&ret<=36){
		      				MessageBox('提示',response.data.msg);
		      				this.show1=false;
			      			this.show=true;
			      			this.txt="重新提交"
		      			}else{
		      				this.$router.push("/loading")
		      			}
		      		}
		        },response => {
		        	Indicator.close();
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
	.el-step__icon.is-text{
		background: #00AFC7;
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
		width: 100%;
		height: 2rem;
		background: #fff;
		margin-top: .28rem;
		position: relative;
	}
	.step{
		width: 1rem;
		height: 2rem;
		position:absolute;
	}
	.cricle{
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
		position: absolute;
		left:.3rem;
		background:rgba(218,218,218,0.20);
		border:.02rem solid #dadada;
		text-align: center;
		line-height: .46rem;
		color:#dadada;
	}
	.long{
		background:#dadada;
		width:.02rem;
		height:.2rem;
		position: absolute;
		left: .5rem;
	}
	.long1{
		top:.8rem;
	}
	.long2{
		top:1rem;
	}
	.form .longActive{
		background: #48d2a0;;
	}
	.cricle1{
		top:.3rem;
	}
	.cricle2{
		bottom:.3rem
	}
	.form .cricleActive{
		background:rgba(72,210,160,0.20);
		color:#48d2a0;
		border-color:#48d2a0;
	}
	.right{
		width: 6.5rem;
		height: 2rem;
		position: absolute;
		right: 0;
	}
	.gt{
		display: inline-block;
		float: right;
		margin-right: .4rem;
		font-size: .28rem;
		color:#999;
	}
	.gt img{
		width: .17rem;
		height: .26rem;
		margin-left: .1rem;
	}
	.persone,.card{
		height:1rem;
		line-height: 1rem;
	}
	.border{
		border-bottom: .0001rem solid  #e9edf2;
	}
	.agreement{
		width: 100%;
		margin-top: 3.79rem;
		font-size:.24rem;
		color:#999999;
		letter-spacing:0;
		text-align:center;
	}
	.color{
		color:#4E96F7;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin-top: .29rem;
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
	.bottom{
		font-size:.24rem;
		color:#dbdbdb;
		letter-spacing:0;
		position: absolute;
		left: 2.43rem;
		bottom: .73rem;
		text-align:center;
		line-height: .32rem;
	}
	.logo{
		width:.32rem ;
		height: .32rem;
		position: absolute;
		left: 2rem;
		bottom: .73rem;
	}
</style>