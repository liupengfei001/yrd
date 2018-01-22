<template>
	<div>
		<Initial v-if="seen"></Initial>
		<Open v-if="seen1"></Open>
	</div>
</template>

<script >
	import Initial from "./initial.vue"
	import Open from "./open.vue"
	import { MessageBox } from 'mint-ui';
	export default {
    	name: "Index",
    	data () {
      		return {
      			seen:false,
      			seen1:false,
      			step:'not',
      			account:'not',
      			reject:'not'
      		}
    	},
    	created() {
    		var path=this.$route.query;
    		if(path.wechat_id!=undefined){
    			var wechat=path.wechat_id
    			try{
    				window.localStorage.wechat_id=wechat;
    			}catch(e){
    				//TODO handle the exception
    			}
    		}
    		if(path.wechat_name!=undefined){
    			var wechat_name=path.wechat_name
    			try{
    				window.localStorage.wechat_name=wechat_name;
    			}catch(e){
    				//TODO handle the exception
    			}
    		}
	      	this.$http.get(this.$store.state.link+'/steps',{
	      		params:{
					wechat_id:localStorage.wechat_id
				}
	      	}).then(response => {
	      		var open_id=response.data.data.open_id;
	      		var data=response.data.data
	      		
	      		if("register" in data){
	      			this.step=data.register;
	      		}else{
	      			MessageBox('提示','系统繁忙，请稍后重试');
	      		}
	        	if("account_ok" in data){
	        		this.account=data.account_ok;
	        	}
	        	if("reject" in data){
	        		this.reject=data.reject
	        	}
	        	if(this.step!='true'){
    				this.$router.push("/login");
    			}else{
    				try{
		    			window.localStorage.open_id=open_id;
		    		}catch(e){
		    			//TODO handle the exception
		    		}
    			}
	        	if(this.account=='true'){
    				this.seen1=true
    			}else{
    				if(this.reject=="true"){
	    				this.$router.push("/createFail");
	    			}
    				this.seen=true;
    			}

	        },response => {
	        	console.log("ajax error");
	      	});
	    },
    	components:{
    		Initial : Initial,
    		Open : Open
    	}
    }
</script>

<style scoped="scoped">
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
	.cardTitle{
		width: 100%;
		margin-top: 1.19rem;
		font-size:.24rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		position: absolute;
		bottom: 3.7rem;
		text-align: center;
	}
	.money{
		width: 100%;
		line-height: .95rem;
		font-size:.80rem;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 .05rem .10rem rgba(61,110,228,0.30);
		text-align:center;
		position: absolute;
		bottom: 2.5rem;
	}
	.describe{
		width: 5.69rem;
		height: .96rem;
		margin: 0 auto;
		margin-top: .9rem;
		font-size: .24rem;
		color:#333333;
		letter-spacing:0;
		line-height:.48rem;
		text-align:center;
	}
	.btn{
		width: 5.2rem;
		line-height: .9rem;
		margin:0 auto ;
		margin-top: .4rem;
		background: #42c5d3;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
		background-size:cover ;
		
	}
	.agreement{
		margin-top: .34rem;
		font-size:.24rem;
		color:#999999;
		letter-spacing:0;
		text-align:center;
	}
	.agreement span{
		color: #5E91FB;
	}
</style>