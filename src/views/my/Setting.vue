<template>
	<div id="setting">
		<div id="setting_top">
			<img src="../../assets/my/箭头左.png" />
			<span>设置</span>
		</div>
		<div id="setting_middle">
			<ul id="setting_ul">
				<li id="setting_li">
					<div style="float: left;">
						<span id="li_span1">个人信息</span>
						<span id="li_span2">头像、昵称、收货地址</span>
					</div>
					<img src="../../assets/my/箭头.png" />
				</li>
				<li id="setting_li" style="margin-top: 65px;">
					<div style="float: left;">
						<span id="li_span1">账号与安全</span>
						<span id="li_span2">修改密码、修改手机号码、账号绑定管理</span>
					</div>
					<img src="../../assets/my/箭头.png" />
				</li>
				<li id="setting_li2" style="margin-top: 150px;">
					<span id="li_span1">支付设置</span>
					<img src="../../assets/my/箭头.png" />
				</li>
				<li id="setting_li2" style="margin-top: 198px;">
					<span id="li_span1">消息通知设置</span>
					<img src="../../assets/my/箭头.png" />
				</li>
				<li id="setting_li2" style="margin-top: 246px;">
					<span id="li_span1">通用</span>
					<img src="../../assets/my/箭头.png" />
				</li>
				<li id="setting_li2" style="margin-top: 310px;">
					<span id="li_span1">关于美团</span>
					<img src="../../assets/my/箭头.png" />
				</li>
			</ul>
		</div>
		
		<div id="setting_bottom">
			<span style="position: absolute; margin-top: 8px;margin-left: -30px;">退出账号</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#setting{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}
	#setting_top {
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	
	#setting_top img {
		position: absolute;
		width: 25px;
		height: 25px;
		margin-top: 10px;
		margin-left: -180px;
	}
	
	#setting_top span {
		position: absolute;
		font-size: 19px;
		font-weight: 600;
		margin-left: -15px;
		margin-top: 11px;
	}
	
	#setting_middle{
		position: absolute;
		width: 100%;
	}
	ul{
		list-style: none;
	}
	#setting_ul{
		margin-top: 10px;
		overflow: hidden;
	}
	#setting_li{
		position: absolute;
		width: 100%;
		height: 42px;
		padding: 10px;
		background-color: #fff;
	}
	#li_span1{
		display: block;
		position: absolute;
		margin-left: 0;
	}
	#li_span2{
		display: block;
		position: absolute;
		margin-left: 0;
		margin-top: 25px;
		font-size: 12px;
		color: #646566;
	}
	
	#setting_li img{
		width: 20px;
		height: 20px;
		margin-top: 10px;
		margin-left: 280px;
	}
	#setting_li2{
		position: absolute;
		width: 100%;
		height: 25px;
		padding: 10px;
		background-color: #fff;
	}
	#setting_li2 img{
		width: 20px;
		height: 20px;
		margin-left: 280px;
	}
	
	#setting_bottom{
		position: absolute;
		border-radius: 10px;
		width: 90%;
		height: 40px;
		margin-left: 5%;
		background-color: #FFCC00;
		margin-top: 500px;
	}
</style>
