<template>
	<div class="background">
		<div class="content">
			<div class="list">
				<p class="option" @click="handleClickList1">
					<span class="introduce">什么样的客户可以申请“宜享花”？</span>
					<img v-if="open1" class="img close" src="/static/images/close.png"/>
					<img v-if="!open1" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open1">
					<div class="answer">
						答：刚刚走出校园的社会新鲜人、热爱生活享受消费的上班族、上有老下有小经济压力较大的社会夹心层、且自身信用观念良好的年轻一代。上述人群均可申请“宜享花”，享受生活、享受消费！
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList2">
					<span class="introduce">什么是开户？</span>
					<img v-if="open2" class="img close" src="/static/images/close.png"/>
					<img v-if="!open2" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open2">
					<div class="answer">
						答：开户是指使用“宜享花”的客户在申请额度的同时需要在微众银行开通一个银行账户（宜享花电子账户），在您开户完成后应立即将您的二类账户卡号绑定到微信钱包中，既可以使用“宜享花”进行消费，体验全新支付方式。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList3">
					<span class="introduce">额度审批通过后我要等多久才能开始消费？</span>
					<img v-if="open3" class="img close" src="/static/images/close.png"/>
					<img v-if="!open3" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open3">
					<div class="answer">
						答：您的额度正式审批通过后，只要您顺利完成微信绑卡，无需等待即可直接使用该额度进行消费。</br>
     					 如您需要进行现金分期，需要您优先使用“宜享花”进行消费，在您有两期良好的消费还款记录后即可办理。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CommentFinger from "./finger.vue";
	export default {
    	name: "Index",
    	data () {
      		return {
      			open1:true,
      			open2:true,
      			open3:true
      		}
    	},
    	components:{
    		CommentFinger :CommentFinger
    	},
    	methods:{
    		handleClickList1(){
    			if(this.open1){
    				this.open1=false
    				this.open2=true
    				this.open3=true
    			}else{
    				this.open1=true
    			}
    			
    		},
    		handleClickList2(){
    			if(this.open2){
    				this.open2=false
    				this.open1=true
    				this.open3=true
    			}else{
    				this.open2=true
    			}
    		},
    		handleClickList3(){
    			if(this.open3){
    				this.open3=false
    				this.open1=true
    				this.open2=true
    			}else{
    				this.open3=true
    			}
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
	.content{
		width: 100%;
		margin-top:.3rem;
	}
	.list{
		min-height: 1rem;
		background: #fff;
	}
	.option{
		height: 1rem;
		line-height: 1.1rem;
		position: relative;
		border-bottom: .005rem solid #e6e6e6;
	}
	.img{
		width: .26rem;
		height: .17rem;
		position: absolute;
		top:.48rem;
		right: .4rem;
	}
	.introduce{
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
		position: absolute;
		top:.24rem;
		left: .5rem;
	}
	.question{
		height: 5.28rem;
		background: #fff;
		border-bottom: .005rem solid #e6e6e6;
		position: relative;
	}
	.answer{
		width: 6.5rem;
		margin: 0 auto;
		margin-top: .3rem;
		font-size:.28rem;
		color:#333333;
		letter-spacing:0;
		line-height:.58rem;
		text-align:left;
	}
</style>