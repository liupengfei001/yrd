<template>
	<div class="background">
		<p class="title">问：什么样的客户可以申请“宜享花”？</p>
		<p class="border"></p>
		<div class="content">
			答：刚刚走出校园的社会新鲜人、热爱生活享受消费的上班族、上有老下有小经济压力较大的社会夹心层、且自身信用观念良好的年轻一代。上述人群均可申请“宜享花”，享受生活、享受消费！
		</div>
		<div class="finger">
			<CommentFinger></CommentFinger>
		</div>
		
	</div>
</template>

<script>
	import CommentFinger from "./finger.vue";
	export default {
    	name: "Index",
    	data () {
      		return {
      			di:"000"
      		}
    	},
    	components:{
    		CommentFinger :CommentFinger
    	}
  	}
</script>

<style scoped="scoped">
	.background{
		overflow: hidden;
	}
	.title{
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		font-weight: bold;
		margin: .8rem 0 0 .49rem;
	}
	.border{
		width: 100%;
		height:.2rem;
		border-bottom: .005rem solid #E6E6E6;
		margin-top: .3rem;
	}
	.content{
		width: 6.5rem;
		margin: 0 auto;
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
		text-align:left;
		margin-top: .3rem;
	}
	.finger{
		width: 100%;
		height: 2rem;
		position: relative;
	}
</style>