<template>
	<div class="background">
		<div class="content">
			<div class="list">
				<p class="option" @click="handleClickList1">
					<span class="introduce">消费利息是多少？</span>
					<img v-if="open1" class="img close" src="/static/images/close.png"/>
					<img v-if="!open1" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question first" v-if="!open1">
					<div class="answer">
						答：“宜享花”采用按日计息、随借随还的灵活资金出借方式，每日消费利息为0.048%。而若您在消费后，在到期还款日前选择全额还款，则可轻松享有最长35天免息期。</br>
    					例如：您的账单日为每个月5日，到期还款日为账单日后5天（即每月的10日）。假设您在1月6日使用“宜享花”发生一笔消费。那么您的该笔消费将在2月5日出账单，到期还款日为2月10日。如果您选择在2月10日全额还款，该笔消费将不会被计提利息。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList2">
					<span class="introduce">账单/现金分期利息是多少？</span>
					<img v-if="open2" class="img close" src="/static/images/close.png"/>
					<img v-if="!open2" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open2">
					<div class="answer">
						答：分期交易（账单分期或者现金分期）按月收取利息，在您选择分期交易（账单分期或者现金分期）后首期还款金额将采用按日计息方式进行计算，之后剩余月份的期供金额采用月息计算，“宜享花”所执行的月利率定价为1.44%，采用等额本息方式，而您可以选择6，9，或12期分期还款。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList3">
					<span class="introduce">借款利息从哪天开始计算？</span>
					<img v-if="open3" class="img close" src="/static/images/close.png"/>
					<img v-if="!open3" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open3">
					<div class="answer">
						答：自借款成功发放当天（即商户消费成功或者分期业务办理成功到账）起
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList4">
					<span class="introduce">服务费如何计算？</span>
					<img v-if="open4" class="img close" src="/static/images/close.png"/>
					<img v-if="!open4" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open4">
					<div class="answer">
						答：一般消费服务费以日息0.03%按日计算，已计提的服务费不会再产生利息。 </br>
   						如果您申请账单/现金分期，系统会按月计算分期服务，费月服务费率为0.9%。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList5">
					<span class="introduce">如果使用中产生逾期会收取其他费用么？</span>
					<img v-if="open5" class="img close" src="/static/images/close.png"/>
					<img v-if="!open5" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open5">
					<div class="answer">
						答：您在成功办理并开通“宜享花”产品之后应注意按时还款，珍爱个人信用记录。如果不慎发生逾期，系统会产生违约金：违约金=本期账单最低还款额的未还部分*5%。
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
      			open4:true,
      			open5:true
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
    				this.open5=true
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
    				this.open5=true
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
    				this.open5=true
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
    				this.open5=true
    			}else{
    				this.open4=true
    			}
    		},
    		handleClickList5(){
    			if(this.open5){
    				this.open5=false
    				this.open1=true
    				this.open3=true
    				this.open2=true
    				this.open4=true
    			}else{
    				this.open5=true
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
		height: 6.88rem;
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