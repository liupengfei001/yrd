<template>
	<div>
		<img class="fail" src="/static/images/createfail.png"/>
		<p class="txt">啊喔~无法为您开通宜享花！</br>感谢您对“宜享花”的关注。</p>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      		}
    	},
    	created(){
    		
    	},
    	components:{
    	},
    	methods:{
    	}
    }
</script>

<style scoped="scoped">
	.fail{
		width: 2.01rem;
		height: 1.36rem;
		margin:3.58rem 0 .74rem 2.76rem;
	}
	.txt{
		width: 4.58rem;
		color:#999999;
		letter-spacing:0;
		text-align:center;
		font-size:.28rem;
		letter-spacing:0;
		line-height:.36rem;
		margin: 0 auto;
	}
</style>