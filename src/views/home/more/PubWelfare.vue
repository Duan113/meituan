<template>
	<div id="pubWelfare">
		<div id="pubWelfare_title">
			<img src="../../../assets/my/箭头左.png" />
			<span>美团公益</span>
		</div>
		<div id="pubWelfare_search">
			<div class="pubWelfare_search">
				<img src="../../../assets/orde/搜索.png" />
				<span>查询公益项目</span>
			</div>
		</div>
		<div id="pubWelfare_swipe">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="../../../assets/icon_library/more/gy/gy1.jpg" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../assets/icon_library/more/gy/gy2.jpg" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../assets/icon_library/more/gy/gy3.jpg" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div id="pubWelfare_item1">
			<div id="item1_div1">
				<img class="item1_div1_img" src="../../../assets/icon_library/more/gy/gy1.jpg" />
				<span class="item1_div1_span1">圆梦光明，看清未来</span>
				<van-progress pivot-text=" " color="#f2826a" :percentage="50" style="position: relative; top: 5px;" />
				<span class="item1_div1_span2">已筹<span style="color: #f2826a;">174,,399.99</span>元</span>
			</div>
			<div id="item1_div1">
				<img class="item1_div1_img" src="../../../assets/icon_library/more/gy/gy1.jpg" />
				<span class="item1_div1_span1">圆梦光明，看清未来</span>
				<van-progress pivot-text=" " color="#f2826a" :percentage="50" style="position: relative; top: 5px;" />
				<span class="item1_div1_span2">已筹<span style="color: #f2826a;">174,,399.99</span>元</span>
			</div>
			<div id="item1_div1">
				<img class="item1_div1_img" src="../../../assets/icon_library/more/gy/gy1.jpg" />
				<span class="item1_div1_span1">圆梦光明，看清未来</span>
				<van-progress pivot-text=" " color="#f2826a" :percentage="50" style="position: relative; top: 5px;" />
				<span class="item1_div1_span2">已筹<span style="color: #f2826a;">174,,399.99</span>元</span>
			</div>
		</div>
		<div id="pubWelfare_list">
			<!-- <div>
				<span>给他们生活希望</span>
				<span>更多<img /></span>
			</div>
			<div>
				<ul>
					<li>
						<img src="../../../assets/icon_library/more/gy/gy2.jpg" />
						<span>为抗战英雄加个菜</span>
						<span>56.6万份爱心</span>
					</li>
				</ul>
			</div> -->
			<img src="../../../assets/icon_library/more/gy/l.jpg" />
		</div>
	</div>
</template>

<script>
</script>

<style>
	#pubWelfare {
		position: absolute;
		width: 100%;
		height: 1200px;
	}

	#pubWelfare_title {
		width: 96%;
		padding: 2%;
		height: 40px;
		text-align: left;
		background-color: #f7f7f7;
	}

	#pubWelfare_title img {
		position: relative;
		top: 10px;
		left: 10px;
		width: 22px;
		height: 22px;
	}

	#pubWelfare_title span {
		position: relative;
		top: 3px;
		left: 120px;
		font-size: 19px;
		font-weight: 500;
	}

	#pubWelfare_search {
		width: 86%;
		padding: 2%;
		margin-left: 5%;
		height: 40px;
		text-align: left;
	}

	.pubWelfare_search {
		height: 30px;
		width: 100%;
		background-color: #F7F7F7;
		border-radius: 20px;
	}

	#pubWelfare_search img {
		position: relative;
		width: 20px;
		height: 20px;
		top: 5px;
		left: 10px;
	}

	#pubWelfare_search span {
		position: relative;
		font-size: 15px;
		color: #646566;
		left: 20px;
	}

	#pubWelfare_swipe {
		width: 90%;
		border-radius: 10px;
		margin-left: 5%;
	}
	.my-swipe .van-swipe-item img{
		width: 100%;
		height: 160px;
	}
	
	#pubWelfare_item1{
		width: 95%;
		margin-left: 5%;
		justify-content: space-between;
		white-space: nowrap;
		overflow-y: hidden;
		overflow-x: scroll;
		display: flex;
		&::-webkit-scrollbar{
		    display: none;
		}
	}
	#item1_div1{
		position: relative;
		width: 45%;
		height: 160px;
		text-align: left;
		border-radius: 5px;
		box-shadow: 0 10px 25px #dbdbdb;
	}
	.item1_div1_img{
		position: relative;
		display: block;
		border-radius: 5px 5px 0 0;
		width: 100%;
	}
	.item1_div1_span1{
		position: relative;
		display: block;
		font-size: 15px;
		font-weight: 600;
	}
	.item1_div1_span2{
		position: relative;
		font-size: 12px;
		color: #646566;
		top: 10px;
	}
	#pubWelfare_list{
		position: absolute;
		width: 100%;
	}
	#pubWelfare_list img {
		width: 100%;
	}
</style>
