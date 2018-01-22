<template>
	<div class="background">
		<ul class="form">
			<li v-for="(item,index) in cardList" :key="index" @click="handleClick(index)" >
				<span >{{item}}</span>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
    	name: "Card",
    	data () {
      		return {
      			cardList:[],
      			idList:[]
      		}
    	},
    	components:{
    	},
    	created() {
	      	this.$http.get(this.$store.state.link+'/acct/banklist').then(response => {
	        	this.cardList=Object.values(response.data.data);
	        	this.idList=Object.keys(response.data.data)
	        	console.log(response.data.data)
	        },response => {
	        	console.log("ajax error");
	      	});
	    },
    	methods:{
    		handleClick(index) {
    			var cardHome=this.cardList[index];
    			var cardId=this.idList[index];
    			this.$store.dispatch("changeCard",cardHome)
    			this.$store.dispatch("changeCardId",cardId)
	            this.$router.push("/card")
			}
    	}
    }
</script>

<style scoped="scoped">
	.background{
		width: 100%;
		height: .3rem;
		background: #f8f8f8;
		position: absolute;
	}
	.form{
		width: 100%;
		background: #fff;
		margin-top: .3rem;
	}
	.form li{
		width: 100%;
		line-height: 1rem;
		padding-left:.32rem ;
		border-bottom: 0.005rem solid #f3f3f3;
		font-size:.32rem;
		color:#333333;
		letter-spacing:0;
		text-align:left;
	}
	
</style>