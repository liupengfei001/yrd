<template>
	<div class="background">
		<img class="img" src="/static/images/loading.png"/>
		<p class="p">正在努力审核中，请稍候…</p>
	</div>
</template>

<script >
	import { Indicator } from 'mint-ui';
	export default {
    	name: "Index",
    	data () {
      		return {
      			num:0,
      			timer:null,
      			open_id:''
      		}
    	},
    	created(){
    		Indicator.open('审核中...');
			try{
    			this.open_id=localStorage.open_id
    		}catch(e){
    			//TODO handle the exception
    		}    		
    		this.timer=setInterval(this.search,10000)
    	},
    	methods:{
    		handleClick(){
    			//this.$router.push("/information")
    		},
    		search(){
    			var params={
	    			wechat_id:localStorage.wechat_id,
					open_id:this.open_id
	    		}
	    		var headers=Header(params,localStorage.open_id)
    			this.$http.get(this.$store.state.link+'/poll/get/webanknum',{
		      		params:params,
		      		headers:headers
		     }).then(response => {
		      		var ret=response.data.retCode;
		      		if(ret==0){
		      			Indicator.close();
		      			clearInterval(this.timer)
		      			this.timer=null
		      			this.$router.push("/createSuccessful")
		      		}else if(ret<0){
		      			Indicator.close();
		      			clearInterval(this.timer)
		      			this.timer=null
		      			this.$router.push("/createFail")
		      		}else{
		      			if(ret>=31&&ret<=36){
		      				Indicator.close();
		      				clearInterval(this.timer)
			      			this.timer=null
			      			this.$router.push("/information?search=true")
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
		position:fixed;
	}
	.img{
		width:1.38rem;
		height: 1.45rem;
		position: absolute;
		top:3.63rem;
		left:3rem;
	}
	.p{
		width: 100%;
		position: absolute;
		top:5.89rem;
		text-align: center;
		font-size:.28rem;
		color:#525252;
		letter-spacing:0;
	}
</style>