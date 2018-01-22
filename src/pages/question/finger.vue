<template>
	<div>
		<div class="btn btnLeft" :class="{active:!left}" @click="handleClickLeft">
			<img v-if="left" class="finger" src="/static/images/up.png"/>
			<img v-if="!left" class="finger" src="/static/images/up1.png"/>
			<span class="solve" :class="{color:!left}">
				已解决	
			</span>
		</div>
		<div class="btn btnRight" :class="{active:!right}" @click="handleClickRight">
			<img v-if="right" class="finger" src="/static/images/down.png"/>
			<img v-if="!right" class="finger" src="/static/images/down1.png"/>
			<span class="solve" :class="{color:!right}">
				未解决	
			</span>
		</div>
	</div>
</template>

<script>
	export default {
    	name: "Fail",
    	data () {
      		return {
      			left:true,
      			right:true,
      			active:true
      		}
    	},
    	methods:{
    		handleClickLeft(){
    			if(this.left){
    				this.right=true
    				this.left=false
    			}
    		},
    		handleClickRight(){
    			if(this.right){
    				this.left=true
    				this.right=false
    			}
    		}
    	}
    }
</script>

<style scoped="scoped">
	.btn{
		border:.02rem solid #bbbbbb;
		border-radius:.12rem;
		width:2.99rem;
		height:.94rem;
		position:absolute;
		bottom:.5rem;
	}
	.btnLeft{
		left: .49rem;
	}
	.btnRight{
		right: .5rem;
	}
	.finger{
		position: absolute;
		width: .4rem;
		height: .4rem;
		left:.63rem;
		top:.27rem
	}
	.solve{
		display: inline-block;
		height: .4rem;
		line-height: .4rem;
		position: absolute;
		right:.68rem;
		top:.3rem;
		font-size:.28rem;
		color:#333;
		letter-spacing:0;
	}
	.active{
		width:3.04rem;
		height:.98rem;
		background: #3bc1d6;
		border: none;
	}
	.color{
		color: #fff;
	}
</style>