<template>
	<div id="redCard">
		<div id="redCard_top">
			<img src="../../assets/my/箭头左.png" />
			<span>设置</span>
			<img src="../../assets/my/redcard/详情.png" style="left: 270px;" />
		</div>
		<div id="redCard_div1">
			<ul id="redCard_list_ul1">
				<li><a>
						<img src="../../assets/my/redcard/免费领券.png" />
						<span>免费领券</span></a>
				</li>
				<li><a>
						<img src="../../assets/my/redcard/特惠购券.png" />
						<span>特惠购券</span></a>
				</li>
				<li><a>
						<img src="../../assets/my/redcard/券.png" />
						<span>快捷购券</span></a>
				</li>
			</ul>
		</div>
		<div id="redCard_div2">
			<span class="div2_span1">红包/抵扣券</span>
			<span class="div2_span2">查看全部（<span style="color: #FF0000;">新到17张</span>）</span>
			<img src="../../assets/my/borrow/右箭头.png" />
		</div>
		<div id="redCard_div3">
			<div id="redCard_div3_l1">
				<div id="div3_l1_div1">
					<span class="l1_div1_span1"><span style="font-size: 15px;">￥</span>10</span>
					<span class="l1_div1_span2">优惠券</span>
				</div>
				<div id="div3_l1_div2">
					<span class="l1_div2_span1">【医学美容】10元无门槛优惠券</span>
					<span class="l1_div2_span2">2020-06-30 23:59到期</span>
					<span class="l1_div2_span3">使用规则&nbsp;<img src="../../assets/my/borrow/右箭头.png" /></span>
				</div>
				<div id="div3_l1_div3">
					<span>立即使用</span>
				</div>
			</div>
			<div id="redCard_div3_l1">
				<div id="div3_l1_div1">
					<span class="l1_div1_span1"><span style="font-size: 15px;">￥</span>20</span>
					<span class="l1_div1_span2">优惠券</span>
				</div>
				<div id="div3_l1_div2">
					<span class="l1_div2_span1">外卖商家券:牛家人大碗牛肉面(仙林大学城店)</span>
					<span class="l1_div2_span2" style="color: #ff7700;">还剩3天到期</span>
					<span class="l1_div2_span3">使用规则&nbsp;<img src="../../assets/my/borrow/右箭头.png" /></span>
				</div>
				<div id="div3_l1_div3">
					<span>立即使用</span>
				</div>
			</div>
			<div id="redCard_div3_l1">
				<div id="div3_l1_div1">
					<span class="l1_div1_span1"><span style="font-size: 15px;">￥</span>29</span>
					<span class="l1_div1_span2">优惠券</span>
				</div>
				<div id="div3_l1_div2">
					<span class="l1_div2_span1">外卖商家券:传奇叫花鸡(仙林大学城店)</span>
					<span class="l1_div2_span2">2020-06-30 23:59到期</span>
					<span class="l1_div2_span3">使用规则&nbsp;<img src="../../assets/my/borrow/右箭头.png" /></span>
				</div>
				<div id="div3_l1_div3">
					<span>立即使用</span>
				</div>
			</div>
		</div>
		<div id="redCard_div2">
			<span class="div2_span1">卡包</span>
			<img src="../../assets/my/borrow/右箭头.png" style="left: 285px;position: relative;" />
		</div>
	</div>
</template>

<script>
</script>

<style>
	#redCard {
		position: absolute;
		width: 100%;
		height: 250%;
		background-color: #F7F7F7;
	}

	#redCard_top {
		width: 100%;
		height: 50px;
		text-align: left;
		background-color: #FFCC00;
	}

	#redCard_top img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}

	#redCard_top span {
		position: relative;
		font-size: 19px;
		font-weight: 500;
		top: 8px;
		left: 150px;
	}
	
	#redCard_div1{
		width: 80%;
		height: 60px;
		margin-left: 10%;
		margin-top: 10px;
		border-radius: 15px;
	}
	ul {
		list-style: none;
	}
	
	#redCard_list_ul1 li {
		float: left;
		width: 75px;
		margin-left: 14px;
	}
	
	#redCard_list_ul1 {
		margin: 0 auto;
		overflow: hidden;
	}
	
	#redCard_list_ul1 a {
		color: black;
	}
	
	#redCard_list_ul1 li img {
		display: block;
		margin: 0 auto;
		width: 35px;
		height: 35px;
	}
	
	#redCard_list_ul1 li span {
		margin-top: 2px;
		display: block;
		font-size: 15px;
	}
	
	#redCard_div2{
		width: 100%;
		margin-left: 5%;
		margin-top: 10px;
		text-align: left;
	}
	.div2_span1{
		font-size: 15px;
		color: #646566;
		font-weight: 600;
	}
	.div2_span2{
		font-size: 12px;
		color: #646566;
		font-weight: 600;
		margin-left: 120px;
	}
	#redCard_div2 img{
		width: 12px;
		height: 12px;
	}
	#redCard_div3{
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
	}
	#redCard_div3_l1{
		width: 94%;
		padding: 3%;
		text-align: left;
		background-color: #fff;
		border-radius: 10px;
		height: 70px;
		margin-top: 10px;
	}
	#div3_l1_div1{
		float: left;
		text-align: center;
		width: 20%;
	}
	.l1_div1_span1{
		display: block;
		color: #FF0000;
		font-size: 28px;
		font-weight: 600;
	}
	.l1_div1_span2{
		color: #FF0000;
		font-size: 12px;
	}
	#div3_l1_div2{
		width: 55%;
		float: left;
	}
	.l1_div2_span1{
		display: block;
		font-weight: 600;
		font-size: 12px;
	}
	.l1_div2_span2{
		display: block;
		position: relative;
		top: 5px;
		font-weight: 600;
		font-size: 12px;
		color: #646566;
	}
	.l1_div2_span3{
		position: relative;
		display: block;
		top: 10px;
		font-weight: 600;
		font-size: 12px;
		color: #bbb;
	}
	.l1_div2_span3 img{
		width: 10px;
		height: 10px;
	}
	#div3_l1_div3{
		width: 25%;
		float: right;
		text-align: center;
	}
	#div3_l1_div3 span{
		position: relative;
		padding: 8px;
		border-radius: 10px;
		font-size: 13px;
		color: #fff;
		background-color: #ff9900;
		top: 20px;
	}
</style>
