<template>
	<div class="background">
		<div class="bill">
			<p class='top'>
				<span class="left" :class="{active:active}" @click="handleClickTabL">已出账单</span>
				<span class="right" :class="{active:!active}" @click="handleClickTabR">未出账单</span>
			</p>
			<div v-if='active'>
				<div v-if="not"  class="de">
					<Not v-if='seen'></Not>
					<Yes v-if='!seen'></Yes>
				</div>
				<div v-if="free">
					<Delay :stmtDate="stmtDate" :stmtBal="stmtBal" :stmtMinBal="stmtMinBal" :pmtDueDate="pmtDueDate" v-if="delay"></Delay>
					<NotDelay :stmtDate="stmtDate" :stmtBal="stmtBal" :stmtMinBal="stmtMinBal" :pmtDueDate="pmtDueDate" v-if="!delay"></NotDelay>
				</div>
			</div>
			<div v-if='!active'>
				<Not v-if='seen'></Not>
				<div v-if='!seen'>
					<p class="load">{{currentDate}}账单未出金额</p>
					<p class="money">{{uStmtDue}}</p>
					<p class="describe">账单日 {{nextStmtDate}}</p>
				</div>
			</div>
		</div>
		<p class="list" v-if='!active' @click="handleClickList">本月未出账单
			<img class="gt" src="/static/images/gt.png"/>
			<span>{{uStmtDue}}</span>
		</p>
		<p class="list" v-if='active' @click="handleClickList">本月账单总额
			<img class="gt" src="/static/images/gt.png"/>
			<span>{{stmtDue}}</span>
		</p>
		<div v-if="btn">
			<div v-if="branchbtn">
				<button class="btn" v-if='btnBranch' @click="handleClickBranch">
					账单分期
				</button>
				<button class="btn disabled" disabled="disabled" v-if='!btnBranch'>
					账单分期
				</button>
			</div>
			<button class="btnBorder" v-if='seenBtn' @click="handleClickBtn">
				还款
			</button>
			<button class="btn" v-if='!seenBtn' @click="handleClickBtn">
				还款
			</button>
		</div>
		
	</div>
</template>

<script >
	import { MessageBox } from 'mint-ui';
	import CommentNot from "./com/not.vue"
	import CommentYes from "./com/yes.vue"
	import CommentDelay from "./com/delay.vue"
	import CommentNotDelay from "./com/notDelay.vue"
	export default {
    	name: "Quota",
    	data () {
      		return {
      			active:true,
      			seen:false,
      			seenBtn:true,
      			not:false,
      			free:true,
      			delay:'',
      			btn:'',
      			branchbtn:true,
      			btnBranch:'',
      			seenBtnBorder:true,
      			stmtDue:'',
      			uStmtDue:"",
      			stmtDate:"",
      			stmtBal:"",
      			stmtMinBal:"",
      			pmtDueDate:"",
      			nextStmtDate:'',
      			currentDate:"",
      			lastStmtNo:''
      		}
    	},
    	created() {
    		var path=this.$route.query;
    		if(path.wechat_id!=undefined){
    			var wechat=path.wechat_id
    			try{
    				window.localStorage.wechat_id=wechat;
    			}catch(e){
    				//TODO handle the exception
    			}
    		}
    		if(path.open_id!=undefined){
    			var open_id=path.open_id
    			try{
    				window.localStorage.open_id=open_id;
    			}catch(e){
    				//TODO handle the exception
    			}
    		}
    		if(path.webank_num!=undefined){
    			var vCardNo=path.webank_num
    			try{
	      			window.localStorage.vCardNo=webank_num
	      		}catch(e){
	      			//TODO handle the exception
	      		}
    		}
    		var params={
    			open_id:localStorage.open_id,
				wechat_id:localStorage.wechat_id
    		}
    		var headers=Header(params,localStorage.open_id)
    		this.$http.get(this.$store.state.link+'/wecard/bill',{
      			params:params,
      			headers:headers
	      	}).then(response => {
	      		var bill=response.data.data.bill;
	      		var unsetBill=response.data.data.unsetBill
	      		console.log(bill)
	      		if(response.data.retCode==0){
		      		if(bill==null){
		      			this.seen=true
		      			this.not=true
		      			this.free=false
		      			this.btn=false
		      		}else if(Object.keys(bill).length==0){
		      			this.seen=true
		      			this.not=true
		      			this.free=false
		      			this.btn=false
		      		}else{
		      			this.stmtDate=bill.stmtDate// 账单日期
			      		this.stmtBal=bill.stmtBal//待还金额
			      		this.stmtMinBal=bill.stmtMinBal//最低还款额
			      		this.pmtDueDate=bill.pmtDueDate//到期还款日
			      		this.stmtDue=bill.stmtDue//账单总额
			      		this.uStmtDue=unsetBill.uStmtDue//未出账总额
			      		this.nextStmtDate=unsetBill.nextStmtDate//未出账单账
			      		this.currentDate=unsetBill.currentDate//当天时间 X月X日
			      		this.lastStmtNo=bill.lastStmtNo
			      		if(this.stmtBal==0){
			      			this.not=true
			      			this.free=false
			      			this.seen=false
							this.btn=false
			      		}else{
			      			this.btn=true
			      		}
						if(bill.isFreePeriod==true&&bill.isOverDue==false){
							this.btnBranch=true
						}else{
							this.btnBranch=false
						}
						if(this.stmtDue==0){
							this.seen=false
			      			this.not=true
			      			this.free=false
			      			this.btn=false
						}
						if(bill.isOverDue){
							this.delay=true
						}else{
							this.delay=false
						}
					}
		      	}else{
		      		MessageBox('提示','系统异常请稍后重试');
		      		this.seen=true
	      			this.not=true
	      			this.free=false
	      			this.btn=false
		      	}
	        },response => {
	        	MessageBox('提示','请求超时，请检查网络后重试');
	      	});
    	},
    	components:{
    		Not : CommentNot,
    		Yes : CommentYes,
    		Delay : CommentDelay,
    		NotDelay : CommentNotDelay
    	},
    	methods:{
    		handleClickTabL(){
    			if(this.active==false){
    				this.active=true
    				this.seenBtn=true
    				this.branchbtn=true
    			}
    			
    			if(this.stmtBal===""){
    				this.btn=false
    				this.seen=true
    			}else if(this.stmtBal===0){
    				this.btn=false
    				this.seen=false
    			}else{
    				this.btn=true
    			}
    		},
    		handleClickTabR(){
    			if(this.active==true){
    				this.active=false
    				this.branchbtn=false
    				this.seenBtn=false
    			}
    			if(this.uStmtDue==0){
					this.btn=false
					this.seen=true
				}else{
					this.btn=true
				}
    		},
    		handleClickList(){
    			if(this.active){
    				this.$router.push("/detail?lastStmtNo="+this.lastStmtNo)
    			}else{
    				this.$router.push("/detail")
    			}
    		},
    		handleClickBtn(){
    			if(!this.active){
    				this.$router.push("/repay?one=true")
    			}else if(this.btnBranch){
    				this.$router.push("/repay?branch=true")
    			}else{
    				this.$router.push("/repay")
    			}
    		},
    		handleClickBranch(){
    			if(this.stmtBal>500){
    				this.$router.push("/branch?num="+this.stmtBal)
    			}else{
    				MessageBox('提示','您本期账单的剩余待还金额未达到账单分期最低标准，无法办理账单分期');
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
	.bill{
		width:100%;
		height: 5.4rem;
		background: #fff;
		margin:.2rem 0 .3rem 0 ;
		border-bottom: .005rem solid #e6e6e6;
	}
	.top{
		height: 1rem;
		width: 100%;
	}
	.top span{
		display: inline-block;
		height: .99rem;
		font-size: .3rem;
		border-bottom: .005rem solid #e6e6e6;
	}
	.left{
		width: 3.73rem;
		float: left;
		border-right: .005rem solid #e6e6e6;
		text-align: center;
		line-height: 1rem;
	}
	.right{
		float: left;
		width: 3.73rem;
		line-height: 1rem;
		text-align: center;
	}
	.top .active{
		color: #42c5d3;
		border-bottom: .06rem solid #42c5d3;
		height: 0.96rem;
	}
	.load{
		font-size: .3rem;
		text-align: center;
		line-height: .42rem;
		margin-top: .99rem;
		color:#525252;
	}
	.money{
		font-size: .9rem;
		height:1.08rem;
		line-height:1.08rem;
		text-align: center;
		color:#525252;
		margin-top: .2rem;
	}
	.describe{
		font-size: .3rem;
		line-height: .42rem;
		text-align: center;
		margin-top: .3rem;
		color:#525252;
	}
	.list{
		height: 1rem;
		line-height: 1rem;
		border-bottom:.005rem solid #e6e6e6;
		background: #fff;
		padding-left:.32rem ;
	}
	.list span{
		float: right;
		margin-right: .21rem;
	}
	.gt{
		width: .17rem;
		height: .26rem;
		float: right;
		margin: .37rem .50rem 0 0;
	}
	.btn{
		display: block;
		width: 5.2rem;
		line-height: .9rem;
		margin: 0 auto;
		margin-top: 1.28rem;
		background: #42c5d3;
		border: none;
		border-radius: 1rem;
		box-shadow:0 0.07rem .1rem 0 rgba(218,218,218,0.30);
		font-size:.32rem;
		color:#ffffff;
		letter-spacing:0;
		text-align:center;
	}
	.btnBorder{
		display: block;
		width: 5.12rem;
		line-height: .9rem;
		margin: 0 auto;
		margin-top: .4rem;
		border:.04rem solid #42c5d3;
		box-shadow:0 0.07rem .1rem 0 rgba(56,194,196,0.20);
		border-radius: 1rem;
		background: #F8F8F8;
		font-size:.32rem;
		color:#42c5d3;
	}
	.disabled{
		background:#dadada;
	}
	
</style>