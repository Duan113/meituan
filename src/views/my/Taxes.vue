<template>
	<div id="taxes">
		<div id="taxes_div1">
			<img src="../../assets/新个税.jpg" />
		</div>
		<div id="taxes_div2">
			<span class="taxes_div2_span1">*简洁版个税计算结果仅供参考，税务总局权威版请下载“个人所得税”官方APP</span>
			<van-cell-group>
				<span class="taxes_div2_span2">税前月收入</span>
				<van-field v-model="value" label="￥" placeholder="请输入税前月收入" />
			</van-cell-group>

			<van-cell-group>
				<span class="taxes_div2_span2">所在城市</span>
				<van-field v-model="value1" label="南京" right-icon="arrow" />
			</van-cell-group>

			<van-collapse v-model="activeNames">
				<span class="taxes_div2_span2">公积金</span>
				<van-collapse-item title="基数￥1890 - ￥22500" name="1" value="5.00%" style="width: 340px;margin-left: -15px;">
					<div id="collapse_item_div">
						<span>公积金缴纳基数</span>
						<span style="position: relative;left: 190px;">0</span>
					</div>
					<div id="collapse_item_div" style="position: relative ;top: 10px;">
						<span>公积金缴纳比例</span>
						<span style="position: relative;left: 180px;">5%</span>
					</div>
				</van-collapse-item>
				<span class="taxes_div2_span2">社保</span>
				<van-collapse-item title="基数￥3030 - ￥19935" name="2" value="10.50%" style="width: 340px;margin-left: -15px;">
					<div id="collapse_item_div">
						<span>社保缴纳基数</span>
						<span style="position: relative;left: 200px;">0</span>
					</div>
					<div id="collapse_item_div" style="position: relative ;top: 10px;">
						<span>社保缴纳比例(%)</span>
						<span style="position: relative;left: 160px;">10.50</span>
					</div>
				</van-collapse-item>
			</van-collapse>

			<van-cell-group>
				<span class="taxes_div2_span2">年终奖</span>
				<van-field v-model="value" label="￥" placeholder="请输入年终奖" />
			</van-cell-group>
		</div>

		<div id="taxes_div3">
			<span class="taxes_div2_span2">专项扣除</span>
			<van-radio-group v-model="radio">
				<van-cell-group>
					<van-cell>
						<van-radio name="1">我有3岁以上正在接受教育的子女</van-radio>
					</van-cell>
					<van-cell>
						<van-radio name="2">我正在继续接受教育</van-radio>
					</van-cell>
					<van-cell>
						<van-radio name="3">我有60岁以上的父母</van-radio>
					</van-cell>
					<van-cell>
						<van-radio name="4">我正在还首套房贷</van-radio>
					</van-cell>
					<van-cell>
						<van-radio name="5">我在工作城市租房</van-radio>
					</van-cell>
				</van-cell-group>
			</van-radio-group>
			
			<div id="taxes_div3_bottom">
				<span class="div3_bottom_span1">大病医疗按年据扣除，暂不计算</span>
				<span class="div3_bottom_span2">了解最新个税规则<img src="../../assets/my/wallet/右箭头蓝.png" /></span>
			</div>
		</div>
		
		<div id="taxes_div4">
			<span>马上计算</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				activeNames: ['1'],
				radio: '1',
			};
		},
	};
</script>

<style>
	#taxes {
		position: absolute;
		width: 100%;
		height: 1050px;
		background-color: #f7f7f7;
	}

	#taxes_div1 {
		position: absolute;
		width: 100%;
	}

	#taxes_div1 img {
		position: relative;
		width: 100%;
	}

	#taxes_div2 {
		position: absolute;
		width: 82%;
		padding: 4%;
		margin-left: 5%;
		text-align: left;
		background-color: #fff;
		margin-top: 160px;
		border-radius: 10px;
	}

	.taxes_div2_span1 {
		font-size: 12px;
		color: #0066FF;
	}

	.taxes_div2_span2 {
		font-size: 12px;
		font-weight: 600;
	}

	#collapse_item_div {
		background-color: #F7F7F7;
	}

	#taxes_div3 {
		position: absolute;
		width: 82%;
		padding: 4%;
		margin-left: 5%;
		text-align: left;
		background-color: #fff;
		margin-top: 680px;
		border-radius: 10px;
	}
	#taxes_div3_bottom{
		margin-top: 10px;
	}
	.div3_bottom_span1{
		font-size: 12px;
		color: #bbb;
	}
	.div3_bottom_span2{
		font-size: 12px;
		color: #0066FF;
		margin-left: 25px;
	}
	.div3_bottom_span2 img{
		position: relative;
		width: 15px;
		height: 15px;
		top:2px
	}
	#taxes_div4 {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		background-color: #0066FF;
		margin-top: 970px;
		height: 40px;
		border-radius: 10px;
	}
	#taxes_div4 span{
		position: relative;
		color: #fff;
		top: 10px;
	}
</style>
