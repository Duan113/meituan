<template>
	<div id="statement">
		<div id="statement_title">
			<img src="../../assets/my/箭头左.png" />
			<span>详情</span>
		</div>
		<div id="statement_div1">
			<span><img src="../../assets/my/monthpay/分析.png" />分析</span>
		</div>
		<div id="statement_div2">
			<span class="statement_div2_span1">2020年02月</span>
			<span class="statement_div2_span2">支出￥9.47  收入￥0.00</span>
		</div>
		<div id="statement_div3">
			<img class="statement_div3_img" src="../../assets/orde/汽车1.png" />
			<div>
				<span class="div_span1">美团打车 - 赵师傅</span>
				<span class="div_span2">行</span>
				<span class="div_span3">02月03日 19:30</span>
			</div>
			<span class="div_span4">-9.47</span>
		</div>
		<div id="statement_div2">
			<span class="statement_div2_span1">2020年02月</span>
			<span class="statement_div2_span2">支出￥9.47  收入￥0.00</span>
		</div>
		<div id="statement_div3">
			<img class="statement_div3_img" src="../../assets/orde/汽车1.png" />
			<div>
				<span class="div_span1">美团打车 - 赵师傅</span>
				<span class="div_span2">行</span>
				<span class="div_span3">02月03日 19:30</span>
			</div>
			<span class="div_span4">-9.47</span>
		</div>
		<van-divider />
		<div id="statement_div3">
			<img class="statement_div3_img" src="../../assets/orde/汽车1.png" />
			<div>
				<span class="div_span1">美团打车 - 赵师傅</span>
				<span class="div_span2">行</span>
				<span class="div_span3">02月03日 19:30</span>
			</div>
			<span class="div_span4">-9.47</span>
		</div>
		<van-divider />
		<div id="statement_div3">
			<img class="statement_div3_img" src="../../assets/icon_library/美食.png"  style="background-color: #ff9933;"/>
			<div>
				<span class="div_span1">美团打车 - 赵师傅</span>
				<span class="div_span2">行</span>
				<span class="div_span3">02月03日 19:30</span>
			</div>
			<span class="div_span4">-9.47</span>
		</div>
		<van-divider />
	</div>
</template>

<script>
</script>

<style>
	#statement {
		position: absolute;
		width: 100%;
		height: 250%;
	}

	#statement_title {
		width: 100%;
		height: 50px;
		text-align: left;
	}

	#statement_title img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}

	#statement_title span {
		position: relative;
		font-size: 19px;
		font-weight: 500;
		top: 8px;
		left: 150px;
	}
	#statement_div1{
		width: 90%;
		margin-left: 5%;
		text-align: right;
	}
	#statement_div1 span{
		position: relative;
		padding: 5px;
		border: #bbb 1px solid;
		border-radius: 5px;
		font-size: 12px;
	}
	#statement_div1 img{
		position: relative;
		width: 15px;
		height: 15px;
		top: 3px;
	}
	#statement_div2{
		padding: 4%;
		width: 92%;
		margin-top: 10px;
		background-color: #F7F7F7;
		text-align: left;
	}
	.statement_div2_span1{
		display: block;
		font-size: 15px;
	}
	.statement_div2_span2{
		font-size: 12px;
		color: #646566;
	}
	#statement_div3{
		padding: 4%;
		width: 92%;
		text-align: left;
		height: 50px;
	}
	.statement_div3_img {
		float: left;
		width: 20px;
		height: 20px;
		background-color: #0570DB;
		border-radius: 50%;
		padding: 5px;
		margin-top: 5px;
	}
	#statement_div3 div{
		float: left;
		width: 250px;
		margin-left: 15px;
	}
	.div_span1{
		display: block;
		font-size: 15px;
	}
	.div_span2{
		display: block;
		font-size: 12px;
		color: #646566;
	}
	.div_span3{
		font-size: 15px;
		color: #BBBBBB;
	}
	.div_span4{
		font-size: 15px;
		font-weight: 600;
	}
</style>
