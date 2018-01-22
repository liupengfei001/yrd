<template>
	<div class="background">
		<ul class="form">
			<li>
				<img class="img" src="/static/images/m.png"/>
				{{bankname}}
			</li>
		</ul>
		<div class="add_wrap" @click="handleClick">
			<p class="add">
				<span>添加一张银行卡	</span>
				<img class="addimg" src="/static/images/add.png"/>
			</p>
		</div>
	</div>
	
</template>

<script>
	import Qs from 'qs'
	export default {
    	name: "Card",
    	data () {
      		return {
      			bankname:''
      		}
    	},
    	components:{
    	},
    	created() {
    		var data={
    			openid:localStorage.open_id
    		}
			this.$http.post(this.$store.state.link+'/repay/cardlist', Qs.stringify(data)
			).then(response => {
				var res=response.data.data[0];
				this.bankName=res.bankName;
				this.cardNo=res.cardNo;
				var str=this.cardNo.substr(this.cardNo.length-4)
				this.bankname=this.bankName+"（"+str+"）"
	        },response => {
	        	console.log("ajax error");
	      	});
	    },
    	methods:{
			handleClick(){
				//this.$router.push("/card?choose=2")
			}
    	}
    }
</script>

<style scoped="scoped">
	.background{
		width: 100%;
		height:100%;
		background: #f8f8f8;
		position: absolute;
	}
	.form{
		width: 100%;
		margin-top: .48rem;
	}
	.form li{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		background: #fff;
		border-bottom: 0.005rem solid #f3f3f3;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
	}
	.img{
		width: .52rem;
		height: .52rem;
		margin-right: .44rem;
		margin-left: .32rem ;
	}
	.add_wrap{
		width:100%;
		height:1.16rem;
		background:#ffffff;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		position: relative;
	}
	.add_wrap span{
		position: absolute;
		left:2.32rem;
		line-height: 1.16rem;
	}
	.addimg{
		width: .37rem;
		height:.37rem;
		margin-left: .3rem;
		position: absolute;
		top:.37rem;
		right:2.27rem
	}
</style>