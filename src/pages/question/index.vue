<template>
	<div class="background">
		<div class="top">
			<p class="title">
				<img class="bluequestion" src="/static/images/bluequestion.png"/>
				<span class="option1">常见问题</span>
			</p>
			<ul>
				<li class="list border_right border_bottom" @click="handleClickopen">
					<img class="list1" src="/static/images/list1.png"/>
					<span class="introduce">开户相关</span>
				</li>
				<li class="list  border_bottom" @click="handleClickmoney">
					<img class="list2" src="/static/images/list2.png"/>
					<span class="introduce">费用相关</span>
				</li>
				<li class="list border_right" @click="handleClickrepay">
					<img class="list3" src="/static/images/list3.png"/>
					<span class="introduce">还款相关</span>
				</li>
				<li class="list" @click="handleClickother">
					<img class="list4" src="/static/images/list4.png"/>
					<span class="introduce">其他问题</span>
				</li>
			</ul>
		</div>
		<div class="bottom">
			<p class="title">
				<img class="hot" src="/static/images/hot.png"/>
				<span class="option1">热门问题</span>
			</p>
			<div class="option" @click="handleClickone">
				<span>什么样的客户可以申请“宜享花”？</span>
				<img class="gt" src="/static/images/gt.png"/>
			</div>
			<div class="option" @click="handleClicktwo">
				<span>额度审批通过后我要等多久才能开始消费？</span>
				<img class="gt" src="/static/images/gt.png"/>
			</div>
			<div class="option" @click="handleClickthree">
				<span>我应该通过何种方式进行还款？</span>
				<img class="gt" src="/static/images/gt.png"/>
			</div>
			<div class="option" @click="handleClickfour">
				<span>如果额度不够用怎样才能提高我的消费额度？</span>
				<img class="gt" src="/static/images/gt.png"/>
			</div>
			<div class="option" @click="handleClickfive">
				<span>消费利息是多少？</span>
				<img class="gt" src="/static/images/gt.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      		}
    	},
    	methods:{
    		handleClickopen(){
    			this.$router.push("/open")
    		},
    		handleClickmoney(){
    			this.$router.push("/money")
    		},
    		handleClickrepay(){
    			this.$router.push("/calculation")
    		},
    		handleClickother(){
    			this.$router.push("/other")
    		},
    		handleClickone(){
    			this.$router.push("/hot1")
    		},
    		handleClicktwo(){
    			this.$router.push("/hot2")
    		},
    		handleClickthree(){
    			this.$router.push("/hot3")
    		},
    		handleClickfour(){
    			this.$router.push("/hot4")
    		},
    		handleClickfive(){
    			this.$router.push("/hot5")
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
	.top{
		width: 100%;
		height: 3.32rem;
		background: #fff;
		margin-top: .3rem;
		border-bottom: .005rem solid #e6e6e6;
	}
	.title{
		width: 100%;
		height: .96rem;
		border-bottom: .005rem solid #e6e6e6;
		position: relative;
		background: #fff;
	}
	.hot,.bluequestion{
		width: .4rem;
		height: .4rem;
		position: absolute;
		top: .3rem;
		left: .5rem;
	}
	
	.option1{
		display: inline-block;
		line-height:.4rem;
		font-size:.28rem;
		font-weight: bold;
		color:#333333;
		letter-spacing:0;
		position: absolute;
		top: .33rem;
		left: 1.1rem;
	}
	.list{
		width: 3.16rem;
		float: left;
		height: 1.16rem;
		line-height: 1.16rem;
		padding-left: .56rem;
	}
	.border_bottom{
		border-bottom:.005rem solid #e6e6e6;
	}
	.border_right{
		border-right:.005rem solid #e6e6e6;
	}
	.list1{
		width: .36rem;
		height: .42rem;
	}
	.list2{
		width: .38rem;
		height: .38rem;
	}
	.list3{
		width: .43rem;
		height: .43rem;
	}
	.list4{
		width: .42rem;
		height: .37rem;
	}
	.introduce{
		display: inline-block;
		margin-left: .24rem;
		margin-top: .39rem;
		line-height: .4rem;
		font-size:.28rem;
		color:#525252;
		letter-spacing:0;
	}
	.bottom{
		width: 100%;
		margin-top: .3rem;
		background: #fff;
	}
	.option{
		width: 100%;
		height: 1.13rem;
		border-bottom: .005rem solid #e6e6e6;
		line-height: 1.13rem;
	}
	.option span{
		display: inline-block;
		margin-left: .49rem;
		line-height: 1.2rem;
	}
	.gt{
		width: .17rem;
		height: .26rem;
		float: right;
		margin-top: .44rem;
		margin-right: .34rem;
	}
</style>