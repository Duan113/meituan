<template>
	<div id="addBank">
		<div id="addBank_title">
			<img src="../../assets/my/箭头左.png" />
			<span>添加银行卡</span>
		</div>
		
		<div id="addBank_div1">
			<div id="addBank_div1_top">
				<span>添加任意银行卡送5.00元红包</span>
			</div>
			<div id="addBank_div1_middle">
				<span class="div1_middle_span">点击输入***的银行卡号</span>
				<div>
					<img src="../../assets/icon_library/扫一扫.png" />
					<span>扫描添卡</span>
				</div>
			</div>
			<div id="addBank_div1_bottom">
				<span>下一步</span>
			</div>
		</div>
		<div id="divider">
			<van-divider>或选择</van-divider>
		</div>
		
		<div id="addBank_div2">
			<span class="addBank_div2_title">快速绑卡，无需输入卡号</span>
			<van-divider></van-divider>
			<div id="addBank_div2_li">
				<img class="div2_li_img1" src="../../assets/my/borrow/建设银行.png" />
				<span>快速添加 中国建设银行卡</span>
				<img class="div2_li_img2" src="../../assets/my/borrow/右箭头.png" />
				<van-divider></van-divider>
			</div>
			<div id="addBank_div2_li">
				<img class="div2_li_img1" src="../../assets/my/borrow/邮政银行.png" />
				<span>快速添加 中国邮政银行卡</span>
				<img class="div2_li_img2" src="../../assets/my/borrow/右箭头.png" />
				<van-divider></van-divider>
			</div>
			<div id="addBank_div2_li">
				<img class="div2_li_img1" src="../../assets/my/borrow/中国银行.png" />
				<span>快速添加 中国银行卡</span>
				<img class="div2_li_img2" src="../../assets/my/borrow/右箭头.png" style="left: 110px;" />
				<van-divider></van-divider>
			</div>
			<div id="addBank_div2_li">
				<img class="div2_li_img1" src="../../assets/my/borrow/平安银行.png" />
				<span>快速添加 中国平安银行卡</span>
				<img class="div2_li_img2" src="../../assets/my/borrow/右箭头.png" />
			</div>
		</div>
		<div id="addBank_div3">
			<span>美团支付安全保障中</span>
		</div>
	</div>

</template>

<script>
</script>

<style>
	#addBank{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	#addBank_title {
		width: 100%;
		height: 50px;
		text-align: left;
		background-color: #f7f7f7;
	}
	
	#addBank_title img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}
	
	#addBank_title span {
		position: relative;
		font-size: 19px;
		font-weight: 500;
		top: 8px;
		left: 120px;
	}
	
	#addBank_div1{
		width: 90%;
		margin-left: 5%;
	}
	#addBank_div1_top{
		margin-top: 10px;
		text-align: left;
		width: 100%;
	}
	#addBank_div1_top span{
		font-size: 22px;
		font-weight: 600;
	}
	#addBank_div1_middle{
		width: 96%;
		padding: 2%;
		text-align: left;
		background-color: #F7F7F7;
		margin-top: 20px;
	}
	.div1_middle_span{
		float: left;
		position: relative;
		color: #646566;
		left: 10px;
		top: 8px;
	}
	#addBank_div1_middle div{
		text-align: center;
		position: relative;
		border-radius: 10px;
		
	}
	#addBank_div1_middle div img{
		position: relative;
		display: block;
		width: 20px;
		height: 20px;
		left: 120px;
	}
	#addBank_div1_middle div span{
		position: relative;
		font-size: 12px;
		color: #bbb;
		left: 50px;
	}
	#addBank_div1_bottom{
		margin-top: 20px;
		width: 94%;
		padding: 3%;
		background-color: #bbb;
		border-radius: 10px;
	}
	#addBank_div1_bottom span{
		position: relative;
		color: #fff;
		font-size: 15px;
	}
	#divider{
		margin-top: 25px;
		width: 40%;
		margin-left: 30%;
	}
	
	#addBank_div2{
		width: 82%;
		margin-left: 5%;
		padding: 4%;
		border-radius: 10px;
		background-color: #F7F7F7;
		text-align: left;
	}
	.addBank_div2_title{
		font-size: 15px;
		font-weight: 600;
	}
	#addBank_div2_li{
		width: 100%;
	}
	.div2_li_img1{
		position: relative;
		width: 26px;
	}
	#addBank_div2_li span{
		position: relative;
		left: 10px;
		top: -5px;
	}
	.div2_li_img2{
		position: relative;
		width: 12px;
		height: 12px;
		top: -5px;
		left: 80px;
	}
	
	#addBank_div3{
		margin-top: 20px;
	}
	#addBank_div3 span{
		font-size: 12px;
		color: #bbb;
	}
</style>
