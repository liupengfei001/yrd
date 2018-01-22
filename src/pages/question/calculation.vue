<template>
	<div class="background">
		<div class="content">
			<div class="list">
				<p class="option" @click="handleClickList1">
					<span class="introduce">我应该通过何种方式进行还款？</span>
					<img v-if="open1" class="img close" src="/static/images/close.png"/>
					<img v-if="!open1" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open1">
					<div class="answer">
						您有两种还款方式可选择：</br>
 						1. 自动还款：此为默认还款方式。你只要在到期还款日前一天，确保您绑定的银行账户中有足够资金，系统将在到期还款日下午15:00自动全额扣款</br>
						2. 主动还款：您可随时通过“微信公众号，在菜单项中选择点击“我要还款”。依据提示完成还款。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList2">
					<span class="introduce">我办理的分期业务能够办理提前还款嘛？</span>
					<img v-if="open2" class="img close" src="/static/images/close.png"/>
					<img v-if="!open2" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open2">
					<div class="answer">
						答：可以。提前还款将会收取手续费，提前还款手续费金额=剩余还款本金*提前还款手续费率（2%）
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList3">
					<span class="introduce">分期提前还款可以先还一部分嘛？</span>
					<img v-if="open3" class="img close" src="/static/images/close.png"/>
					<img v-if="!open3" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open3">
					<div class="answer">
						答：针对于分期业务的提前还款，务必一次性全额还清，不支持部分还款。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList4">
					<span class="introduce">什么是账单日？</span>
					<img v-if="open4" class="img close" src="/static/images/close.png"/>
					<img v-if="!open4" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open4">
					<div class="answer">
						 答：账单日是指：“宜享花”每月会定期对您账户本期发生的各项交易（消费、分期等等）、费用等进行汇总结算，此日期即为您“宜享花”的账单日。 
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList5">
					<span class="introduce">什么是到期还款日？</span>
					<img v-if="open5" class="img close" src="/static/images/close.png"/>
					<img v-if="!open5" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question" v-if="!open5">
					<div class="answer">
						到期还款日是您账单日后5日，即您“宜享花”每个月最后的还款日期，如果您超过到期还款日还款将会形成逾期，系统会为您自动计入利息和违约金。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList6">
					<span class="introduce">什么是最低还款额？</span>
					<img v-if="open6" class="img close" src="/static/images/close.png"/>
					<img v-if="!open6" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question first" v-if="!open6">
					<div class="answer">
						答：最低还款额是指：在不影响您信用记录的情况下所需归还的最少的“宜享花”账单欠款。</br>
						最低还款额的计算公式为：最低还款额 = 本期新增一般消费交易金额的10% +当期全部转帐等提现金额 + 分期还款的当月的应还金额+全部的费用项目和利息项目。 如果您本期选择最低还款额还款，剩余未还本金将产生利息及服务费，并在下期账单入账。
					</div>
					<CommentFinger></CommentFinger>
				</div>
			</div>
			<div class="list">
				<p class="option" @click="handleClickList7">
					<span class="introduce">什么是账单分期业务？</span>
					<img v-if="open7" class="img close" src="/static/images/close.png"/>
					<img v-if="!open7" class="img open" src="/static/images/open.png"/>
				</p>
				<div class="question first" v-if="!open7">
					<div class="answer">
						答：账单分期是指您在使用“宜享花”的过程中将本期账单金额分期归还以缓解还款压力。您需要在操作账单分期之前确保本月已偿还最低还款额。</br>
     					“宜享花”可分期最低金额为500元，且需在本期消费出账单之后至到期还款日之前申请。可分期金额计算方式为出账单后除去最低还款额之外的未还本金。例如：您本期账单金额为600元，最低还款额为60元，那么剩余540元可以申请账单分期。
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
      			open5:true,
      			open6:true,
      			open7:true
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
    				this.open6=true
    				this.open7=true
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
    				this.open6=true
    				this.open7=true
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
    				this.open6=true
    				this.open7=true
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
    				this.open6=true
    				this.open7=true
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
    				this.open6=true
    				this.open7=true
    			}else{
    				this.open5=true
    			}
    		},
    		handleClickList6(){
    			if(this.open6){
    				this.open6=false
    				this.open1=true
    				this.open3=true
    				this.open2=true
    				this.open4=true
    				this.open5=true
    				this.open7=true
    			}else{
    				this.open6=true
    			}
    		},
    		handleClickList7(){
    			if(this.open7){
    				this.open7=false
    				this.open1=true
    				this.open3=true
    				this.open2=true
    				this.open4=true
    				this.open6=true
    				this.open5=true
    			}else{
    				this.open7=true
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