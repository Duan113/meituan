<template>
	<div id="grabagesout">
		<div id="grabagesout_div1">
			<img class="grabagesout_div1_img" src="../../assets/my/箭头左.png" />
			<span class="grabagesout_div1_span1">垃圾分类助手</span>
			<span class="grabagesout_div1_span2">分享</span>
		</div>
		
		<div id="grabagesout_div2">
			<img src="../../assets/垃圾分类助手.jpg" />
		</div>
		
		<div id="grabagesout_div3">
			<div id="grabagesout_div3_top">
				<img src="../../assets/orde/搜索.png" />
				<span>请输入正确名称(包括材质)</span>
			</div>
			<div id="grabagesout_div3_bottom">
				<span>外卖餐盒</span>
				<span>小龙虾</span>
				<span>塑料袋</span>
				<span>喝过的奶茶杯</span>
				<span>手机</span>
			</div>
		</div>
		
		<div id="grabagesout_div4">
			<span class="grabagesout_div4_span1">外卖包装物投放指南</span>
			<span class="grabagesout_div4_span2">沾有油污的一次性餐盒、杯子、纸巾、餐具包、刀叉勺、吸管、牙签、铝箔/锡纸包装、无纺布袋、
			塑料袋等都是其他垃圾/干垃圾；洁净的塑料餐盒、塑料杯可以投递到可回收物</span>
		</div>
		
		<div id="grabagesout_div5">
			<van-tabs v-model="active" :color="'#fff'">
			  <van-tab>
			      <template #title> <img src="../../assets/my/grabagesort/厨余垃圾.png" style="width: 30px;height: 30px;display: block;margin: 0 auto;"/>厨余垃圾</template>
			      <span class="vantab_span">容易腐烂的生物质废弃物，包括剩饭剩菜、过期食品、瓜皮果核、花卉绿植等。</span>
				  <van-grid>
				    <van-grid-item>
				    	<img src="../../assets/my/grabagesort/面.png" />
				    	<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
				    </van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
					<van-grid-item>
						<img src="../../assets/my/grabagesort/面.png" />
						<span style="font-size: 10px;color: #888;margin-top: 10px;">肉夹馍</span>
					</van-grid-item>
				  </van-grid>
				  <div id="vantab_div">
					  <span class="vantab_div_span1">投放指南</span>
					  <span class="vantab_div_span2">沥干水分后投放，纯流质垃圾(如牛奶)可直接倒进下水口。大骨头、生蚝壳、椰子壳等不适厨余垃圾、而是其他垃圾</span>
				  </div>
			  </van-tab>
			  <van-tab>
			      <template #title> <img src="../../assets/my/grabagesort/其他垃圾.png" style="width: 30px;height: 30px;display: block;margin: 0 auto;"/>其他垃圾</template>
			      厨余垃圾
			  </van-tab>
			  <van-tab>
			      <template #title> <img src="../../assets/my/grabagesort/可回收物.png" style="width: 30px;height: 30px;display: block;margin: 0 auto;"/>可回收物</template>
			      厨余垃圾
			  </van-tab>
			  <van-tab>
			      <template #title> <img src="../../assets/my/grabagesort/有害垃圾.png" style="width: 30px;height: 30px;display: block;margin: 0 auto;"/>有害垃圾</template>
			      厨余垃圾
			  </van-tab>
			</van-tabs>
		</div>
		<div id="grabagesout_div6">
			<span class="grabagesout_div6_span1">美团外卖青山计划呼吁大家保护地球家园，从每一餐餐后的垃圾分类开始。
				<span class="grabagesout_div6_span1">了解更多
				<img class="grabagesout_div6_img" src="../../assets/my/grabagesort/右箭头.png" />
				</span>
			</span>
		</div>
		<div id="grabagesout_div7">
			<span class="grabagesout_div7_span1">华东师范大学生态与环境科学学院联合发布</span>
			<span class="grabagesout_div7_span2">如何找到我:美团/美团外卖-我的-垃圾分类(分类仅供参考)</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#grabagesout{
		position: absolute;
		width: 100%;
		height: 900px;
		background-color: #f7f7f7;
	}
	#grabagesout_div1 {
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.grabagesout_div1_img{
		position: relative;
		width: 20px;
		height: 20px;
		top: 15px;
		left: -100px;
	}
	
	.grabagesout_div1_span1{
		position: relative;
		font-size: 18px;
		font-weight: 600;
		top: 10px;
	}
	.grabagesout_div1_span2{
		position: relative;
		font-size: 14px;
		left: 85px;
		top: 10px;
	}
	
	#grabagesout_div2{
		position: absolute;
		width: 100%;
	}
	#grabagesout_div2 img{
		position: relative;
		width: 100%;
	}
	
	#grabagesout_div3 {
		position: absolute;
		width: 90%;
		height: 85px;
		margin-left: 5%;
		margin-top: 115px;
		border-radius: 10px;
		background-color: #fff;
	}
	#grabagesout_div3_top{
		position: absolute;
		background-color: #eee;
		width: 90%;
		border-radius: 5px;
		height: 40px;
		margin-top: 5px;
		margin-left: 5%;
	}
	#grabagesout_div3_top img{
		position: relative;
		width: 20px;
		height: 20px;
		top: 10px;
		left: -50px;
		
	}
	#grabagesout_div3_top span{
		position: relative;
		font-size: 14px;
		color: #888;
		top: 5px;
		left: -40px;
	}
	#grabagesout_div3_bottom{
		position: absolute;
		width: 90%;
		height: 30px;
		margin-top: 50px;
		margin-left: 5%;
	}
	#grabagesout_div3_bottom span{
		position: relative;
		padding: 5px;
		border-radius: 5px;
		font-size: 12px;
		background-color: #eee;
		margin-left: 5px;
		top: 5px;
	}
	
	#grabagesout_div4 {
		position: absolute;
		text-align: left;
		padding: 6px;
		width: 87%;
		height: 100px;
		margin-left: 5%;
		margin-top: 210px;
		border-radius: 10px;
		background-color: #fff;
	}
	.grabagesout_div4_span1{
		display: block;
		position: relative;
		font-size: 14px;
		font-weight: 600;
		
	}
	.grabagesout_div4_span2{
		position: relative;
		font-size: 14px;
		color: #646566;
		top: 5px;
		
	}
	
	#grabagesout_div5 {
		text-align: left;
		position: absolute;
		padding: 5px;
		width: 87%;
		height: 370px;
		margin-left: 5%;
		margin-top: 330px;
		border-radius: 10px;
		background-color: #fff;
	}
	.vantab_span{
		position: relative;
		top: 10px;
		font-size: 14px;
		color: #646566;
	}
	.van-grid{
		position: relative;
		top: 10px;
	}
	.van-grid-item img{
		width: 30px;
		height: 30px;
	}
	#vantab_div{
		position: relative;
		top: 10px;
		width: 80%;
		padding: 5px;
		height: 100px;
		margin-left: 5%;
		border-radius: 5px;
		background-color: #F7F7F7;
		
	}
	.vantab_div_span1{
		display: block;
		position: relative;
		top: 10px;
		font-size: 14px;
		font-weight: 600;
	}
	.vantab_div_span2{
		position: relative;
		top: 20px;
		font-size: 14px;
		color: #646566;
	}
	
	#grabagesout_div6 {
		padding: 5px;
		position: absolute;
		text-align: left;
		width: 87%;
		height: 50px;
		margin-left: 5%;
		margin-top: 720px;
		border-radius: 10px;
		background-color: #fff;
	}
	.grabagesout_div6_span1{
		position: relative;
		font-size: 14px;
		color: #646566;
	}
	.grabagesout_div6_span2{
		position: relative;
		font-size: 14px;
		color: #FFCC00;
	}
	.grabagesout_div6_img{
		position: relative;
		top: 5px;
		width: 20px;
		height: 20px;
	}
	
	#grabagesout_div7{
		position: absolute;
		width: 90%;
		height: 50px;
		margin-left: 5%;
		margin-top: 790px;
	}
	#grabagesout_div7 span{
		font-size: 10px;
		color: #646566;
	}
	.grabagesout_div7_span1{
		display: block;
	}
</style>
