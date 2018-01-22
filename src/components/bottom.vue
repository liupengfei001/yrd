<template>
	<div class="combottom" @click="handleClick">
		<img class="logo" src="/static/images/logo.png"/>
		<p class="introduce">
			什么是宜享花？
		</p>
	</div>
</template>

<script>
	export default {
    	name: "Card",
    	data () {
      		return {
      		}
    	},
    	methods:{
    		handleClick(){
    			this.$router.push("/introduction")
    		}
    	}
	}
</script>

<style scoped="scoped">
	.logo{
		width: 1.19rem;
		height: .3rem;
		position: absolute;
		left: 2.23rem;
		bottom: .96rem;
	}
	.introduce{
		text-decoration:underline;
		position: absolute;
		right: 2.23rem;
		bottom: .96rem;
		font-size:.24rem;
		color:#548afc;
		letter-spacing:0;
		line-height: .33rem;
	}
</style>