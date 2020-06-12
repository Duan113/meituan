<template>
	<div id="person_info">
		<div id="person_info_top">
			<img src="../../assets/my/箭头左.png" />
			<span>个人信息</span>
		</div>
		<div id="person_info_bottom">
			<ul id="info_bottom_ul">
				<li>
					<span id="info_span1" style="top: -10px;">头像</span>
					<img id="info_img1" src="../../assets/ironman.jpg" />
					<img id="info_img2" src="../../assets/my/箭头.png"  style="top: -10px;"/>
				</li>
				<li>
					<span id="info_span1">昵称</span>
					<span id="info_span2" style="margin-left: -12px;">Shadows</span>
					<img id="info_img2" src="../../assets/my/箭头.png" style="top: 0.5px;" />
				</li>
				<li>
					<span id="info_span1">生日</span>
					<span id="info_span2" style="margin-left: -23px;">2020-01-01</span>
					<img id="info_img2" src="../../assets/my/箭头.png" style="margin-left: -3px;" />
				</li>
				<li>
					<span id="info_span1">收货地址</span>
					<span id="info_span2" style="margin-left: -45px;">修改/添加</span>
					<img id="info_img2" src="../../assets/my/箭头.png" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#person_info {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}

	#person_info_top {
		width: 100%;
		height: 40px;
		background-color: #fff;
	}

	#person_info_top img {
		position: absolute;
		width: 25px;
		height: 25px;
		margin-top: 7.5px;
		margin-left: -180px;
	}

	#person_info_top span {
		position: absolute;
		font-size: 19px;
		font-weight: 500;
		margin-left: -40px;
		margin-top: 8px;
	}

	#person_info_bottom {
		margin-top: 10px;
	}

	ul {
		list-style: none;
	}

	#info_bottom_ul {
		overflow: hidden;
	}

	#info_bottom_ul li {
		position: relative;
		padding: 8px;
		width: 100%;
		height: auto;
		background-color: #fff;
		margin-top: 2px;
	}

	#info_span1 {
		position: relative;
		font-size: 16px;
		color: #646566;
		left: -120px;
		
	}
	#info_span2 {
		position: relative;
		font-size: 14px;
		color: #646566;
		left: 100px;
		
	}
	#info_img1 {
		position: relative;
		width: 45px;
		height: 45px;
		left: 110px;
		
		border-radius: 50%;
	}

	#info_img2 {
		position: relative;
		width: 20px;
		height: 20px;
		left: 120px;
		
	}
</style>
