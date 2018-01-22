<template>
	<div class="background">
		<div class="content">
			<div class="list">
				<p class="option" @click="handleClickList1">
					<span class="introduce">宜享花能用于转账、红包以及零钱充值么？</span>
					<img v-if="open1" class="img close" src="/static/images/close.png"/>
					<img v-if="!open1" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question first" v-if="!open1">
					<div class="answer">
						答：宜享花可以用于转账，红包及微信钱包充值。但这些交易视为提现交易，并与现金分期共享提现额度，即总授信额度的50%。</br>
						此类交易每日限五笔交易，且不享有免息期，自交易日起同消费交易的收费利率收取利息及相关服务费，并需在下期到期还款日前全额还款。</br>此类交易包括微信转账，红包，微信零钱充值，QQ红包，AA付款，QQ转账。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList2">
					<span class="introduce">宜人贷具体是什么产品</span>
					<img v-if="open2" class="img close" src="/static/images/close.png"/>
					<img v-if="!open2" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open2">
					<div class="answer">
						答：宜人贷是一家中国领先的金融科技平台，由宜信公司2012年推出。宜人贷通过科技驱动金融创新，为中国优质城市白领人群提供高效、便捷、个性化的信用借款咨询服务；通过“宜人财富”为大众富裕人群提供安全、专业的财富管理服务。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList3">
					<span class="introduce">宜人贷和“宜享花”有什么关系</span>
					<img v-if="open3" class="img close" src="/static/images/close.png"/>
					<img v-if="!open3" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open3">
					<div class="answer">
						答：“宜享花”是在宜人贷网络平台上推出的全新信用借款产品，其特征为“简单、灵活、弹性”，满足客户短期资金需要，服务广大消费金融场景，为客户积累信用记录。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList4">
					<span class="introduce">什么是提现额度？</span>
					<img v-if="open4" class="img close" src="/static/images/close.png"/>
					<img v-if="!open4" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open4">
					<div class="answer">
						答：提现额度是指在您宜享花的额度范围内所有提现类（微信红包、转账、零钱充值）交易共享的最高额度，目前设置额度比例为50%。若您宜享花总额度为10000元，那么您的提现额度为5000元。
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
      			open3:true,
      			open4:true
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
    				this.open4=true
    			}else{
    				this.open1=true
    			}
    			
    		},
    		handleClickList2(){
    			if(this.open2){
    				this.open2=false
    				this.open1=true
    				this.open3=true
    				this.open4=true
    			}else{
    				this.open2=true
    			}
    		},
    		handleClickList3(){
    			if(this.open3){
    				this.open3=false
    				this.open1=true
    				this.open2=true
    				this.open4=true
    			}else{
    				this.open3=true
    			}
    		},
    		handleClickList4(){
    			if(this.open4){
    				this.open4=false
    				this.open1=true
    				this.open3=true
    				this.open2=true
    			}else{
    				this.open4=true
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
	.first{
		height: 6.28rem;
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