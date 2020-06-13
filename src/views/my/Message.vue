<template>
	<div id="message">
		<div id="message_top">
			<img class="message_top_img1" src="../../assets/my/箭头左.png" />
			<span class="message_top_span1">消息</span>
			<img class="message_top_img2" src="../../assets/my/message/清理.png" />
			<span class="message_top_span2">全部已读</span>
		</div>

		<div id="message_middle">
			<ul id="message_middle_ul">
				<li>
					<img src="../../assets/my/message/铃铛.png" style="background-color: #F79709;" />
					<span>服务通知</span>
				</li>
				<li>
					<img src="../../assets/my/message/促销活动.png" style="background-color: #ee1111;" />
					<span>促销活动</span>
				</li>
				<li>
					<img src="../../assets/my/message/对话.png" style="background-color: #1A94E6;" />
					<span>对话</span>
				</li>
			</ul>
		</div>
		<div id="message_bottom">
			<ul id="message_bottom_ul">
				<li>
					<img class="message_bottom_img1" src="../../assets/my/message/通知2.png" style="background-color: #1A94E6;" />
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">南京今日雷电，26C~32C</span>
							<span class="message_bottom_span2">天气轰隆，注意安全。点击查看明后两天的天气…</span>
						</div>
						<span class="message_bottom_span3">今天7:36</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 70px;">
					<span class="message_bottom_span0" style="background-color: #ee1111;">活动</span>
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">送您2张共计20元安心出行券</span>
							<span class="message_bottom_span2">美团打车每天司机测体温、戴口罩、车子消毒通…</span>
						</div>
						<span class="message_bottom_span3">2020.6.11</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 140px;">
					<span class="message_bottom_span0" style="background-color: #ee1111;">活动</span>
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">您已获得5元理发优惠券</span>
							<span class="message_bottom_span2">剪发9块9限量秒杀，快来抢购吧~</span>
						</div>
						<span class="message_bottom_span3">2020-06-10</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 210px;">
					<img class="message_bottom_img1" src="../../assets/my/message/对话2.png" style="background-color: #C1C1C1;" />
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">周师傅</span>
							<span class="message_bottom_span2">[自定义消息]</span>
						</div>
						<span class="message_bottom_span3">2019-11-24</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 280px;">
					<img class="message_bottom_img1" src="../../assets/my/message/对话2.png" style="background-color: #C1C1C1;" />
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">李师傅</span>
							<span class="message_bottom_span2">[自定义消息]</span>
						</div>
						<span class="message_bottom_span3">2019-11-24</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 350px;">
					<img class="message_bottom_img1" src="../../assets/my/message/对话2.png" style="background-color: #C1C1C1;" />
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">周师傅</span>
							<span class="message_bottom_span2">[自定义消息]</span>
						</div>
						<span class="message_bottom_span3">2019-09-09</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
				<li style="margin-top: 420px;">
					<img class="message_bottom_img1" src="../../assets/my/message/对话2.png" style="background-color: #C1C1C1;" />
					<div id="message_bottom_div1">
						<div id="message_bottom_div2">
							<span class="message_bottom_span1">马师傅</span>
							<span class="message_bottom_span2">[自定义消息]</span>
						</div>
						<span class="message_bottom_span3">2019-07-07</span>
						<div style="width: 300px;height: 1px;background-color: #C1C1C1;margin-top: 40px;margin-left: 50px;"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
</script>

<style>
	#message {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}

	#message_top {
		width: 100%;
		height: 120px;
		background-color: #ffcc00;
	}

	.message_top_img1 {
		position: relative;
		width: 24px;
		height: 24px;
		margin-left: -300px;
		top: 9px;
	}

	.message_top_span1 {
		position: relative;
		font-size: 19px;
		left: 130px;
		top: 6px;
	}

	.message_top_img2 {
		position: relative;
		width: 18px;
		height: 18px;
		margin-left: -100px;
		left: 295px;
		top: 7px;
	}

	.message_top_span2 {
		position: relative;
		font-size: 15px;
		left: 300px;
		top: 4px;
	}

	.message_top_span2 img {
		width: 25px;
		height: 25px;
	}

	#message_middle {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		background-color: #fff;
		border-radius: 10px;
		margin-top: -65px;
		box-shadow: 0 10px 25px #DBDBDB;

	}

	ul {
		list-style: none;
	}

	#message_middle_ul {
		overflow: hidden;
	}

	#message_middle_ul li {
		float: left;
		width: 72px;
		padding: 20px;

	}

	#message_middle_ul li img {
		display: block;
		width: 30px;
		height: 30px;
		padding: 10px;
		border-radius: 10px;
		margin: 0 auto;
	}

	#message_middle_ul li span {
		display: block;
		font-size: 14px;
		margin-top: 5px;
	}

	#message_bottom {
		position: absolute;
		width: 94%;
		margin-left: 3%;
	}

	#message_bottom_ul {
		margin-top: 70px;
		overflow: hidden;
	}

	#message_bottom_ul li {
		position: absolute;
		width: 100%;
	}

	.message_bottom_img1 {
		float: left;
		padding: 8px;
		width: 28px;
		height: 28px;
		border-radius: 10px;
	}

	#message_bottom_div1 {
		height: 50px;
	}

	#message_bottom_div2 {
		float: left;
	}

	.message_bottom_span1 {
		position: absolute;
		display: block;
		margin-left: 10px;
	}

	.message_bottom_span2 {
		position: absolute;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 12px;
		top: 13px;
	}

	.message_bottom_span3 {
		display: block;
		margin-left: 280px;
		font-size: 10px;
	}

	.message_bottom_span0 {
		float: left;
		padding: 8px;
		width: 28px;
		height: 28px;
		border-radius: 10px;
		font-size: 13px;
		color: #fff;
		font-weight: 600;
	}
</style>
