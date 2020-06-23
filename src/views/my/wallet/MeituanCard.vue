<template>
	<div id="mtCard">
		<div id="mtCard_top">
			<div id="mtCard_top_div1">
				<img src="../../../assets/my/meituancard/左箭头.png" />
				<span class="mtCard_top_div1_span1">美团卡</span>
				<span class="mtCard_top_div1_span2">查看明细</span>
			</div>
			<div id="mtCard_top_div2">
				<span class="mtCard_top_div2_span1">美团卡账户余额</span>
				<span class="mtCard_top_div2_span2">￥<span>0.00</span></span>
			</div>
		</div>
		
		<div id="mtCard_middle">
			<span class="mtCard_middle_span1">购买美团卡</span>
			<span class="mtCard_middle_span2">卡号卡密绑定</span>
			<span class="mtCard_middle_span3">我的美团卡</span>
			<span class="mtCard_middle_span4">常见问题</span>
			<span class="mtCard_middle_span5"><img src="../../../assets/my/meituancard/刷卡.png" />&nbsp;资和信预付卡</span>
			<span class="mtCard_middle_span6">绑定美团卡，即同意<span>《美团卡协议》</span></span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#mtCard{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
	}
	#mtCard_top{
		padding: 3%;
		width: 94%;
		height: 34%;
		background-color: #00CDCD;
	}
	#mtCard_top_div1{
		text-align: left;
		width: 100%;
		height: 20%;
	}
	
	#mtCard_top_div1 img{
		position: relative;
		top: 5px;
		width: 25px;
		height: 25px;
	}
	.mtCard_top_div1_span1{
		position: relative;
		font-size: 16px;
		left: 120px;
		color:#fff;
	}
	.mtCard_top_div1_span2{
		position: relative;
		font-size: 14px;
		left: 210px;
		color:#fff;
	}
	
	#mtCard_top_div2{
		width: 100%;
		height: 80%;
	}
	.mtCard_top_div2_span1{
		position: relative;
		top: 40px;
		display: block;
		font-size: 13px;
		color:#fff;
	}
	.mtCard_top_div2_span2{
		position: relative;
		top: 45px;
		font-size: 35px;
		font-weight: 600;
		color:#fff;
	}
	#mtCard_middle{
		padding: 3%;
		width: 94%;
		height: 44%;
		background-color: #fff;
	}
	.mtCard_middle_span1{
		margin-top: 10px;
		display: block;
		font-size: 19px;
		width: 94%;
		padding: 3%;
		background-color: #00cdcd;
		border-radius: 5px;
		color: #fff;
	}
	.mtCard_middle_span2{
		margin-top: 10px;
		display: block;
		font-size: 19px;
		width: 94%;
		padding: 3%;
		background-color: #00cdcd;
		border-radius: 5px;
		color: #fff;
	}
	.mtCard_middle_span3{
		margin-top: 10px;
		display: block;
		font-size: 19px;
		width: 94%;
		padding: 3%;
		border: #00cdcd 1px solid;
		border-radius: 5px;
		color: #00cdcd;
	}
	.mtCard_middle_span4{
		margin-top: 10px;
		display: block;
		font-size: 12px;
		color: #0000CD;
	}
	.mtCard_middle_span5{
		margin-top: 50px;
		display: block;
		font-size: 12px;
	}
	.mtCard_middle_span5 img{
		width: 12px;
		height: 12px;
	}
	.mtCard_middle_span6{
		margin-top: 10px;
		display: block;
		font-size: 12px;
		color: #aaa;
	}
	.mtCard_middle_span6 span{
		color: #0000CD;
	}
</style>
