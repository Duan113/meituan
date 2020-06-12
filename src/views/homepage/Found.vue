<template>
	<div>
		<div id="found_title">
			<span style="position: absolute; font-weight: 600;margin-top: 20px;margin-left: -10px;">发现</span>
		</div>
		<div id="found">
			<van-tabs v-model="active" :color="'#FFCC00'">
				<van-tab title="推荐">
					<ul id="tab_ul">
						<li id="tab_li">
							<img class="tab_img1" src="../../assets/t1.jpg" />
							<span class="tab_span1">南京市财经大学仙林校区，坐落仙林</span>
							<div>
								<img class="tab_img2" src="../../assets/ironman.jpg" />
								<span class="tab_span2">你猜 </span>
								<img class="tab_img3" src="../../assets/orde/赞.png" />
							</div>
						</li>
						<li id="tab_li">
							<img class="tab_img1" src="../../assets/t2.jpg" />
							<span class="tab_span1">这是多少文科生的梦想啊 高考没能考上南</span>
							<div>
								<img class="tab_img2" src="../../assets/ironman.jpg" />
								<span class="tab_span2">再吃一口糖</span>
								<img class="tab_img3" src="../../assets/orde/赞.png" />
							</div>
						</li>
						<li id="tab_li">
							<img class="tab_img1" src="../../assets/t3.jpg" />
							<span class="tab_span1">急急忙忙买了两双凉鞋，还是很喜欢的</span>
							<div>
								<img class="tab_img2" src="../../assets/ironman.jpg" />
								<span class="tab_span2">安娜小兔酱</span>
								<img class="tab_img3" src="../../assets/orde/赞.png" />
							</div>
						</li>
						<li id="tab_li">
							<img class="tab_img1" src="../../assets/t4.jpg" />
							<span class="tab_span1">这是目前为止住过最舒服最合适的民宿</span>
							<div>
								<img class="tab_img2" src="../../assets/ironman.jpg" />
								<span class="tab_span2">zoe_</span>
								<img class="tab_img3" src="../../assets/orde/赞.png" />
							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="丽人">丽人</van-tab>
				<van-tab title="旅行">旅行</van-tab>
				<van-tab title="电影">电影</van-tab>
				<van-tab title="结婚">结婚</van-tab>
				<van-tab title="购物">购物</van-tab>
				<van-tab title="教培">教培</van-tab>
				<van-tab title="家装">家装</van-tab>
				<van-tab title="亲子">亲子</van-tab>
				<van-tab title="医美">医美</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>

<style>
	#found_title {
		position: absolute;
		width: 100%;
		height: 50px;
		background-color: #FFCC00;
	}

	#found {
		position: absolute;
		width: 100%;
		height: 700px;
		background-color: #f7f7f7;
		margin-top: 50px;
	}

	ul {
		position: absolute;
		list-style: none;
		width: 90%;
		margin-left: 5%;
	}

	#tab_ul {
		position: absolute;
		overflow: hidden;
	}

	#tab_li {
		background-color: #fff;
		float: left;
		width: 150px;
		padding: 7.5px;
		border-radius: 10px;
		margin-left: 2px;
		margin-top: 8px;
	}

	.tab_img1 {
		width: 150px;
		border-radius: 10px 10px 0 0;
	}

	.tab_span1 {
		position: relative;
		font-size: 15px;
		font-weight: 600;
		margin-left: 0;
	}

	.tab_img2 {
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-left: -10px;
	}

	.tab_span2 {
		position: absolute;
		font-size: 13px;
		width: 100px;
		height: 15px;
		margin-top: 3px;
	}

	.tab_img3 {
		width: 20px;
		height: 20px;
		margin-left: 110px;
		margin-top: 2px;
	}
</style>
