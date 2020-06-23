<template>
	<div id="invoice">
		<div id="invoice_top">
			<img src="../../assets/my/箭头左.png" />
			<span>发票助手</span>
		</div>
		<van-tabs v-model="activeName" :color="'#ffcc00'">
			<van-tab title="我的发票抬头" name="a">
				<div id="invoice_vantab_div1" >
					<img src="../../assets/加号.png" />
					<span>添加抬头</span>
				</div>
				<van-divider />
			</van-tab>
			<van-tab title="我的发票" name="b">
				<div id="invoice_vantab_div2" >
					<span>当前仅收录跑腿、部分城市公交、酒店、打车、餐饮电子发票，具体收录规则以申请页提示为准</span>
					<img src="../../assets/空.jpg" />
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'a',
			};
		},
	};
</script>

<style>
	#invoice {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	#invoice_top {
		width: 94%;
		padding: 3%;
		text-align: left;
		background-color: #f7f7f7;
	}

	#invoice_top img {
		position: relative;
		width: 22px;
		height: 22px;
	}

	#invoice_top span {
		position: relative;
		font-size: 18px;
		font-weight: 600;
		left: 120px;
		top: -3px;
	}
	#invoice_vantab_div1{
		width: 90%;
		margin-left: 5%;
		text-align: left;
	}
	#invoice_vantab_div1 img{
		position: relative;
		width: 22px;
		height: 22px;
		top: 10px;
		left: 15px;
	}
	#invoice_vantab_div1 span{
		position: relative;
		font-size: 15px;
		margin-left: 30px;
		top: 5px;
	}
	
	#invoice_vantab_div2{
		width: 90%;
		text-align: left;
		margin-left: 5%;
	}
	#invoice_vantab_div2 span{
		margin-top: 10px;
		font-size: 13px;
		border-radius: 5px;
		background-color: #ffcc99;
		color: #ff7700;
		padding: 5px;
		display: block;
	}
	#invoice_vantab_div2 img{
		width: 100%;
	}
</style>
