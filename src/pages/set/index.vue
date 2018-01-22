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
      			txt:""
      		}
    	},
    	created(){
    		var data={
				vCardNo:localStorage.vCardNo
    		}
    		this.$http.post(this.$store.state.link+'/repay/acct', Qs.stringify(data)
			).then(response => {
				var res=response.data.data;
	        },response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/way")
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