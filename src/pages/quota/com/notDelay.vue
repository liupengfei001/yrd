<template>
	<div>
		<p class="wait">
			{{stmtDate}}剩余待还(元)
		</p>
		<p class="money">
			{{stmtBal}}
		</p>
		<p class="little">
			最低还款额  {{stmtMinBal}} 元
		</p>
		<p class="data">
			到期还款日 {{pmtDueDate}}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'notdelay',
		props:['stmtDate','stmtBal','stmtMinBal','pmtDueDate'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	p{
		text-align: center;
		color:#525252;
		font-size:.30rem;
		letter-spacing:0;
	}
	.wait{
		margin-top: .79rem;
		
	}
	.money{
		font-size: .9rem;
		height:1.08rem;
		line-height:1.08rem;
		margin-top: .2rem;
	}
	.little{
		margin-top: .12rem;
	}
	.data{
		margin-top: .31rem;
	}
</style>