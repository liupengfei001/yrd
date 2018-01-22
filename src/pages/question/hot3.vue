<template>
	<div class="background">
		<p class="title">问：我应该通过何种方式进行还款？</p>
		<p class="border"></p>
		<div class="content">
			答：您有两种还款方式可选择：</br>
 			1. 自动还款：此为默认还款方式。你只要在到期还款日前一天，确保您绑定的银行账户中有足够资金，系统将在到期还款日下午15:00自动全额扣款</br>
			2. 主动还款：您可随时通过“微信公众号，在菜单项中选择点击“我要还款”。依据提示完成还款。
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