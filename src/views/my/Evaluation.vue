<template>
	<div id="evaluation">
		<div id="evaluation_top">
			<img src="../../assets/icon_library/evaluation/head.jpg" />
		</div>
		<div id="evaluation_div1">
			<span>评价 2</span>
		</div>
		<van-divider />
		<div id="evaluation_div2">
			<img class="evaluation_div2_img1" src="../../assets/ironman.jpg" />
			<div id="evaluation_right">
				<div id="evaluation_right_div1">
					<span class="right_div1_span1">张三</span>
					<span class="right_div1_span2">2019年11月1日</span>
				</div>
				<div id="evaluation_right_div2">
					<span>打分10</span>
					<img src="../../assets/icon_library/evaluation/星.jpg" />
				</div>
				<div id="evaluation_right_div3">
					<img class="right_div3_img1" src="../../assets/icon_library/evaluation/电影.jpg" />
					<span class="right_div3_span1">天气之子</span>
					<span class="right_div3_span2">2019-11-01大陆上映</span>
					<span class="right_div3_span3">9.0分</span>
					<img class="right_div3_img2" src="../../assets/my/borrow/右箭头.png" />
				</div>
				<div id="evaluation_right_div4">
					<span class="right_div4_span1">浏览13</span>
					<span class="right_div4_span2">赞</span>
					<span class="right_div4_span3">评论</span>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: 8px;background-color: #ddd;margin-top: 8px;"></div>
		<div id="evaluation_div2">
			<img class="evaluation_div2_img1" src="../../assets/ironman.jpg" />
			<div id="evaluation_right">
				<div id="evaluation_right_div1">
					<span class="right_div1_span1">张三</span>
					<span class="right_div1_span2">2019年1月8日</span>
				</div>
				<div id="evaluation_right_div2">
					<span>商家</span>
					<img src="../../assets/icon_library/evaluation/星.jpg" />
					<span>商家自配送59分钟送达</span>
				</div>
				<div id="evaluation_right_div3">
					<img class="right_div3_img1" src="../../assets/icon_library/evaluation/外卖.jpg" />
					<span class="right_div3_span1">卤肉饭</span>
					<img class="right_div3_img2" src="../../assets/my/borrow/右箭头.png" />
				</div>
				<div id="evaluation_right_div4">
					<span class="right_div4_span1">浏览13</span>
					<span class="right_div4_span2">赞</span>
					<span class="right_div4_span3">评论</span>
				</div>
			</div>
		</div>
		<div id="evaluation_div2">
			<img class="evaluation_div2_img1" src="../../assets/ironman.jpg" />
			<div id="evaluation_right">
				<div id="evaluation_right_div1">
					<span class="right_div1_span1">张三</span>
					<span class="right_div1_span2">2019年1月8日</span>
				</div>
				<div id="evaluation_right_div2">
					<span>商家</span>
					<img src="../../assets/icon_library/evaluation/星.jpg" />
					<span>商家自配送59分钟送达</span>
				</div>
				<div id="evaluation_right_div3">
					<img class="right_div3_img1" src="../../assets/icon_library/evaluation/外卖.jpg" />
					<span class="right_div3_span1">卤肉饭</span>
					<img class="right_div3_img2" src="../../assets/my/borrow/右箭头.png" />
				</div>
				<div id="evaluation_right_div4">
					<span class="right_div4_span1">浏览13</span>
					<span class="right_div4_span2">赞</span>
					<span class="right_div4_span3">评论</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#evaluation{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	#evaluation_top{
		width: 100%;
	}
	#evaluation_top img{
		width: 100%;
	}
	#evaluation_div1{
		height: 30px;
		width: 100%;
		text-align: left;
	}
	#evaluation_div1 span{
		position: relative;
		top: 6px;
		left: 40px;
		font-size: 18px;
		font-weight: 600;
	}
	#evaluation_div2{
		padding: 3%;
		width: 94%;
		text-align: left;
	}
	.evaluation_div2_img1{
		float: left;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	#evaluation_right{
		position: relative;
		left: 10px;
	}
	#evaluation_right_div1{
		
	}
	.right_div1_span1{
		position: relative;
		color: #1989FA;
		font-size: 15px;
	}
	.right_div1_span2{
		position: relative;
		color: #bbb;
		font-size: 13px;
		left: 150px;
	}
	
	#evaluation_right_div2{
		margin-top: 5px;
	}
	#evaluation_right_div2 span{
		position: relative;
		font-size: 14px;
	}
	#evaluation_right_div2 img{
		height: 20px;
	}
	
	#evaluation_right_div3{
		background-color: #F7F7F7;
		height: 50px;
		margin-left: 45px;
		margin-top: 5px;
		
	}
	.right_div3_img1{
		position: relative;
		width: 40px;
		height: 40px;
		left: 5px;
		top: 5px;
	}
	.right_div3_span1{
		position: relative;
		font-size: 15px;
		left: 10px;
		top: -20px;
	}
	.right_div3_span2{
		position: relative;
		font-size:12px;
		left: -50px;
		color: #bbb;
		
	}
	.right_div3_span3{
		position: relative;
		font-size: 12px;
		top: -22px;
		color: #bbb;
	}
	.right_div3_img2{
		position: relative;
		width: 12px;
		height: 12px;
		left: 20px;
		top: -10px;
	}
	
	#evaluation_right_div4{
		margin-top: 5px;
	}
	.right_div4_span1{
		position: relative;
		font-size: 12px;
		top: 5px;
		left: 45px;
		color: #bbb;
	}
	.right_div4_span2{
		position: relative;
		padding: 5px;
		border: #aaa 1px solid;
		border-radius: 5px;
		font-size: 12px;
		color: #aaa;
		top: 5px;
		left: 200px;
	}
	.right_div4_span3{
		position: relative;
		padding: 5px;
		border: #aaa 1px solid;
		border-radius: 5px;
		font-size: 12px;
		color: #aaa;
		top: 5px;
		left: 210px;
	}
</style>
