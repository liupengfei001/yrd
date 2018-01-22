<template>
	<div class="background">
		<div v-if="seen">
			<img class="img" src="/static/images/repayment.png"/>
			<p class="txt">该账期无交易</p>
		</div>
		<ul class="con">
			<li class='list' v-for="(item,index) in lists"  :key="item.id" @click="handleClick(index)" :router="item.router">
				<span class="name">{{item.txnBrief}}</span>
				<span class="date">{{item.txnTime}}</span>
				<span class="money" :class="{active:item.dbCrInd}">{{item.txnAmt}} 元</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
    	name: "Detail",
    	data () {
      		return {
      			lastStmtNo:'',
      			params:'',
      			lists:[],
      			seen:false,
      			next:'0'
      		}
    	},
    	created(){
    		var path=this.$route.query;
    		if(path.lastStmtNo!=undefined){
    			this.lastStmtNo=path.lastStmtNo
    		}
    		if(this.lastStmtNo==''){
    			this.params={
    				wechat_id:localStorage.wechat_id,
					open_id: localStorage.open_id,
					webank_num :localStorage.vCardNo,
					type:3,
					next:this.next
    			}
    		}else{
    			this.params={
    				wechat_id:localStorage.wechat_id,
					open_id: localStorage.open_id,
					webank_num :localStorage.vCardNo,
					type:1,
					stmt_no : this.lastStmtNo,
					next:this.next
    			}
    		}
    		this.$http.get(this.$store.state.link+'/wecard/detail',{
	      		params:this.params
	      	}).then(response => {
	      		var res=response.data.data.list;
	      		console.log(response.data.data)
	      		for(var i=0,j=res.length;i<j;i++){
	      			if(res[i].dbCrInd=="C"){
	      				res[i].txnAmt="-"+res[i].txnAmt
	      				res[i].dbCrInd=false
	      			}else{
	      				res[i].dbCrInd=true
	      			}
	      		}
	      		this.lists=res
	      		this.next=response.data.data.next;
	      		if(this.lists.length==0){
	      			this.seen=true
	      		}else{
	      			this.seen=false
	      		}
	       	},response => {
	        	console.log("ajax error");
	      	});
    	},
    	methods:{
    		handleClick(){
    			//this.$router.push("/card?1")
    		},
    		handleClickChoose(){
    			//this.$router.push("/cardList")
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
	.img{
		display: block;
		width: 1.13rem;
		height: 1.73rem;
		margin: 0 auto;
		margin-top:3.58rem;
	}
	.txt{
		width: 4.58rem;
		color:#525252;
		letter-spacing:0;
		text-align:center;
		font-size:.38rem;
		letter-spacing:0;
		line-height:.36rem;
		margin: 0 auto;
		margin-top:.58rem;
	}
	.con{
		margin-top: .3rem;
	}
	.list{
		height: 1.44rem;
		border-bottom:.005rem solid #e6e6e6;
		background: #fff;
		padding-left:.32rem ;
		position: relative;
	}
	.date,.money,.name{
		position: absolute;
		color:#333333;
	}
	.name{
		left:.32rem;
		top:.28rem;
		font-size:.32rem;
	}
	.date{
		left:.32rem;
		bottom:.28rem;
		font-size:.24rem;
	}
	.money{
		right: .36rem;
		bottom: .54rem;
		font-size:.30rem;
		letter-spacing:0;
	}
	.active{
		color: #3CC1D5;
	}
</style>