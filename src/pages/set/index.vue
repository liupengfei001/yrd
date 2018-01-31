<template>
	<div class="background">
		<div class="option" @click="handleClick">
			<span class="introduce">划扣方式</span>
			<img class="gt" src="/static/images/gt.png"/>
			<span class="method">{{txt}}</span>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
    	name: "set",
    	data () {
      		return {
      			txt:"",
      			num:''
      		}
    	},
    	created(){
    		var path=this.$route.query;
    		if(path.webank_num!=undefined){
    			var vCardNo=path.webank_num
    			try{
	      			window.localStorage.vCardNo=webank_num
	      		}catch(e){
	      			//TODO handle the exception
	      		}
    		}
    		var data={
				vCardNo:localStorage.vCardNo,
				wechat_id:localStorage.wechat_id
    		}
    		var headers=Header(data,localStorage.open_id)
    		this.$http.post(this.$store.state.link+'/repay/currentRepayType', Qs.stringify(data),{
				headers:headers
    		}).then(response => {
    			console.log(response.data)
				this.num=response.data.data;
				if(this.num==0){
					this.txt="自动划扣 –全额"
				}else if(this.num==1){
					this.txt="自动划扣 - 最低还款额"
				}else{
					this.txt="手动还款"
				}
	        },response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/way?num="+this.num)
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
	
	.option{
		margin-top: .48rem;
		width: 100%;
		height: 1rem;
		border-bottom: .005rem solid #e6e6e6;
		line-height: 1rem;
		background: #fff;
	}
	.introduce{
		margin-left: .49rem;
		font-size: .32rem;
		color:#333333;
	}
	.method{
		font-size:.28rem;
		color:#525252;
		letter-spacing:0;
		float: right;
		margin-right: .25rem;
	}
	.gt{
		width: .17rem;
		height: .26rem;
		float: right;
		margin-top: .35rem;
		margin-right: .35rem;
	}
</style>