<template>
	<div id="ticket">
		<div id="ticket_top">
			<img src="../../assets/icon_library/ticket/head.jpg" />
		</div>

		<div id="ticket_middle">
			<div id="ticket_middle_tick" style="background-color: #FF0000;">
				<img class="tick_img1" src="../../assets/icon_library/ticket/火车.png" />
				<div>
					<span class="tick_span1">火车票</span>
					<span class="tick_span2">免12306账号/可选座/夜间购票</span>
				</div>
				<img class="tick_img2" src="../../assets/icon_library/ticket/箭头下.png" />
			</div>

			<div id="ticket_middle_tick" style="background-color: #1A94E6; margin-top: 90px;">
				<img class="tick_img1" src="../../assets/icon_library/ticket/飞机.png" />
				<div>
					<span class="tick_span1">机票</span>
					<span class="tick_span2">学生票/全球特价机票/美团服务</span>
				</div>
				<img class="tick_img2" src="../../assets/icon_library/ticket/箭头下.png" />
			</div>

			<div id="ticket_middle_tick" style="background-color: #00cc66; margin-top: 180px;">
				<img class="tick_img1" src="../../assets/icon_library/ticket/汽车票.png" />
				<div>
					<span class="tick_span1">汽车票</span>
					<span class="tick_span2">全国长途汽车时刻表、在线预订</span>
				</div>
				<img class="tick_img2" src="../../assets/icon_library/ticket/箭头下.png" />
			</div>

			<div id="ticket_middle_div1">
				<ul id="list_ul1">
					<li><a>
							<img src="../../assets/icon_library/ticket/住宿.png" />
							<span>预约抢票</span></a>
					</li>
					<li><a>
							<img src="../../assets/icon_library/ticket/住宿.png" />
							<span>在线值机</span></a>
					</li>
					<li><a>
							<img src="../../assets/icon_library/ticket/住宿.png" />
							<span>酒店住宿</span></a>
					</li>
					<li><a>
							<img src="../../assets/icon_library/ticket/住宿.png" />
							<span>车站大屏</span></a>
					</li>
					<li><a>
							<img src="../../assets/icon_library/ticket/住宿.png" />
							<span>特价机票</span></a>
					</li>
				</ul>
			</div>
			<div id="ticket_middle_div2">
				<span>出行计划</span>
			</div>

			<div id="ticket_middle_div3">
				<van-tabs v-model="activeName" :color="'#ffcc00'">
					<van-tab title="周边好去处" name="a">
						<ul>
							<li>
								<img class="tab_img" src="../../assets/icon_library/ticket/马鞍山.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">马鞍山</span>
										<span class="tab_div1_span2">17分钟</span>
									</div>
									<div class="tab_div2">
										<span>拥有丰富的矿产资源和水产品，且风光秀丽</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/火车蓝.png" />
										<span class="tab_div3_span1">￥14</span>
										<span class="tab_div3_span2">高铁 二等座</span>
									</div>
								</div>
							</li>
							<li style="margin-top: 25px;">
								<img class="tab_img" src="../../assets/icon_library/ticket/镇江.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">镇江</span>
										<span class="tab_div1_span2">19分钟</span>
									</div>
									<div class="tab_div2">
										<span>吴文化的重要发祥地</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/火车蓝.png" />
										<span class="tab_div3_span1">￥29.5</span>
										<span class="tab_div3_span2">高铁 二等座</span>
									</div>
								</div>
							</li>
							<li style="margin-top: 40px;">
								<img class="tab_img" src="../../assets/icon_library/ticket/滁州.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">滁州</span>
										<span class="tab_div1_span2">18分钟</span>
									</div>
									<div class="tab_div2">
										<span>自古有“金陵锁钥、江淮保障”之称</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/火车蓝.png" />
										<span class="tab_div3_span1">￥24.5</span>
										<span class="tab_div3_span2">高铁 二等座</span>
									</div>
								</div>
							</li>
						</ul>
					</van-tab>
					<van-tab title="国内低价游" name="b">
						<ul>
							<li>
								<img class="tab_img" src="../../assets/icon_library/ticket/西安.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">西安</span>
									</div>
									<div class="tab_div2">
										<span>滚滚红尘帝王都，悠悠岁月百姓城</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/飞机蓝色.png" />
										<span class="tab_div3_span1">￥14</span>
										<span class="tab_div3_span2" style="color: #FF0000;border: #FF0000 1px solid;">1.5折</span>
										<span class="tab_div3_span3">优惠券</span>
									</div>
								</div>
							</li>
							<li style="margin-top: 45px;">
								<img class="tab_img" src="../../assets/icon_library/ticket/重庆.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">重庆</span>
									</div>
									<div class="tab_div2">
										<span>夜景、火锅、美女，一个火辣辣的城市</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/飞机蓝色.png" />
										<span class="tab_div3_span1">￥179</span>
										<span class="tab_div3_span2" style="color: #FF0000;border: #FF0000 1px solid;">1.2折</span>
										<span class="tab_div3_span3">优惠券</span>
									</div>
								</div>
							</li>
							<li style="margin-top: 40px;">
								<img class="tab_img" src="../../assets/icon_library/ticket/广州.jpg" />
								<div class="tab_div">
									<div class="tab_div1">
										<span class="tab_div1_span1">广州</span>
									</div>
									<div class="tab_div2">
										<span>吃早茶，晒暖阳，夜游珠江，观两岸灯火辉煌</span>
									</div>
									<div class="tab_div3">
										<img src="../../assets/icon_library/ticket/飞机蓝色.png" />
										<span class="tab_div3_span1">￥180</span>
										<span class="tab_div3_span2" style="color: #FF0000;border: #FF0000 1px solid;">1.2折</span>
										<span class="tab_div3_span3">优惠券</span>
									</div>
								</div>
							</li>
						</ul>
					</van-tab>
				</van-tabs>
			</div>
			
			<div id="ticket_middle_div4">
				<span class="div4_span1">特价机票</span>
				<sapn class="div4_span2">更多</sapn>
				<img src="../../assets/my/箭头.png" />
			</div>
			
			<div id="ticket_middle_div5">
				<img src="../../assets/icon_library/ticket/ticket_bottom.jpg" />
			</div>
		</div>
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
	#ticket {
		position: absolute;
		width: 100%;
		height: 1050px;
	}

	#ticket_top {
		position: absolute;
		width: 100%;
		height: 100px;
	}

	#ticket_top img {
		width: 100%;
		height: 150px;
	}

	#ticket_middle {
		position: absolute;
		padding: 5%;
		width: 90%;
		border-radius: 20px 20px 0 0;
		height: 950px;
		margin-top: 132px;
		background-color: #fff;
	}

	#ticket_middle_tick {
		position: absolute;
		padding: 5%;
		width: 80%;
		text-align: left;
		border-radius: 20px;
	}

	.tick_img1 {
		margin-top: 7px;
		float: left;
		width: 25px;
		height: 25px;
	}

	#ticket_middle_tick div {
		float: left;
		margin-left: 10px;
	}

	.tick_span1 {
		display: block;
		font-size: 16px;
		font-weight: 600;
		color: #fff;
	}

	.tick_span2 {
		margin-top: 5px;
		font-size: 12px;
		color: #fff;
	}

	.tick_img2 {
		margin-left: 65px;
		margin-top: 7px;
		width: 20px;
		height: 20px;
	}

	#ticket_middle_div1 {
		position: absolute;
		width: 90%;
		margin-top: 270px;
	}

	ul {
		list-style: none;
	}

	#list_ul1 li {
		float: left;
		width: 65px;
	}

	#list_ul1 {
		margin: 0 auto;
		overflow: hidden;
	}

	#list_ul1 a {
		color: black;
	}

	#list_ul1 li img {
		display: block;
		margin: 0 auto;
		width: 35px;
		height: 35px;
	}

	#list_ul1 li span {
		margin-top: 2px;
		display: block;
		font-size: 12px;
	}

	#ticket_middle_div2 {
		position: absolute;
		width: 90%;
		margin-top: 340px;
		text-align: left;
	}

	#ticket_middle_div2 span {
		font-size: 17px;
		font-weight: 600;
	}
	
	#ticket_middle_div3{
		position: absolute;
		width: 90%;
		margin-top: 380px;
		height: 365px;
		border-radius: 10px;
		box-shadow: 0 10px 25px #DBDBDB;
	}
	.van-tab ul{
		width: 100%;
	}
	.van-tab li{
		position: absolute;
		width: 100%;
	}
	.tab_img{
		position: relative;
		top: 10px;
		left: 5px;
		float: left;
		width: 120px;
		height: 90px;
		border-radius: 10px;
	}
	.tab_div{
		position: relative;
		top: 10px;
		left: 10px;
		text-align: left;
		margin-left: 10px;
	}
	.tab_div1{
		position: relative;
		top: 5px;
	}
	.tab_div1_span1{
		font-size: 15px;
		font-weight: 600;
	}
	.tab_div1_span2{
		position: relative;
		left: 125px;
		font-size: 12px;
		color: #646566;
	}
	.tab_div2 {
		position: relative;
		top: 8px;
	}
	.tab_div2 span{
		font-size: 12px;
		color: #646566;
	}
	.tab_div3{
		position: relative;
		top: 8px;
	}
	.tab_div3 img{
		position: relative;
		top: 4px;
		width: 20px;
		height: 20px;
	}
	.tab_div3_span1{
		position: relative;
		left: 5px;
		top: 2px;
		color: #FF0000;
		font-size: 15px;
		font-weight: 600;
	}
	.tab_div3_span2{
		position: relative;
		color: #646566;
		font-size: 12px;
		font-weight: 600;
		padding: 5px;
		border-radius: 5px;
		left: 20px;
		border: #F7F7F7 1px solid;
	}
	.tab_div3_span3{
		position: relative;
		color: #FF0000;
		font-size: 12px;
		font-weight: 600;
		padding: 5px;
		border-radius: 5px;
		left: 20px;
		border: #FF0000 1px solid;
	}
	#ticket_middle_div4 {
		position: absolute;
		width: 90%;
		margin-top:750px;
		text-align: left;
	}
	.div4_span1{
		font-size: 17px;
		font-weight: 600;
	}
	.div4_span2{
		position: relative;
		font-size: 15px;
		color: #646566;
		left: 215px;
	}
	#ticket_middle_div4 img{
		position: relative;
		top: 3px;
		width: 18px;
		height: 18px;
		left: 220px;
	}
	
	#ticket_middle_div5 {
		position: absolute;
		width: 100%;
		margin-top:780px;
	}
	#ticket_middle_div5 img{
		position: relative;
		width: 100%;
		left: -5%;
	}
</style>
