<template>
  <div>
    <div id="home_top">
      <div id="daohang">
        <div id="home_top_daohang_left">
          <span class="daohang_left_span1">
            南京 &nbsp;
            <img src="../../assets/箭头下.png" />
          </span>
          <span class="daohang_left_span2">小雨 25C</span>
        </div>
        <div id="home_top_daohang_middle">
          <van-form>
            <van-field></van-field>
          </van-form>
          <img src="../../assets/orde/搜索.png" />
          <span>1点点(外卖)</span>
        </div>
        <img class="home_top_daohang_img1" src="../../assets/语音.png" />
        <img class="home_top_daohang_img2" src="../../assets/加号.png" />
      </div>

      <div id="home_top_top">
        <span>热搜:</span>
        <span style="margin-left: 10px;">自助餐</span>&nbsp;|
        &nbsp;
        <span>乐活田园</span>&nbsp;|
        &nbsp;
        <span>蔬菜</span>&nbsp;|
        &nbsp;
        <span>胡辣汤</span>&nbsp;|
        &nbsp;
        <span>明孝陵</span>
      </div>
      <div id="home_ul1">
        <ul id="list_ul1">
          <li>
            <a>
              <img src="../../assets/icon_library/扫一扫.png" />
              <span>扫一扫</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/付款码.png" />
              <span>付款码</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/自行车.png" />
              <span>骑车</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/公交.png" />
              <span>查公交</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="home_top_bottom">
        <ul id="list_ul2">
          <li>
            <a>
              <div class="ul2_div1">
                <img src="../../assets/icon_library/外卖.png" />
              </div>
              <span>外卖</span>
            </a>
          </li>
          <li>
            <a>
              <div class="ul2_div2">
                <img src="../../assets/icon_library/美食.png" />
              </div>
              <span>美食</span>
            </a>
          </li>
          <li>
            <a>
              <div class="ul2_div3">
                <img src="../../assets/icon_library/酒店.png" />
              </div>
              <span>酒店住宿</span>
            </a>
          </li>
          <li>
            <a>
              <div class="ul2_div4">
                <img src="../../assets/icon_library/休闲.png" />
              </div>
              <span>休闲/玩乐</span>
            </a>
          </li>
          <li>
            <a>
              <div class="ul2_div5">
                <img src="../../assets/icon_library/猫.png" />
              </div>
              <span>电影/演出</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div id="home_bottom">
      <div id="home_bottom_top">
        <ul id="list_ul3">
          <li>
            <a>
              <img src="../../assets/icon_library/打车.png" />
              <span>打车</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/景点.png" />
              <span>景点/门票</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/超市.png" />
              <span>超市/药店</span>
            </a>
          </li>
          <router-link to="/borrMoney" style="color: #000;">
            <li>
              <a>
                <img src="../../assets/icon_library/钱.png" />
                <span>借钱/信用卡</span>
              </a>
            </li>
          </router-link>
          <router-link to="/ticket" style="color: #000;">
            <li>
              <a>
                <img src="../../assets/icon_library/火车票.png" />
                <span>火车票/机票</span>
              </a>
            </li>
          </router-link>
          <li>
            <a>
              <img src="../../assets/icon_library/果树.png" />
              <span>免费领水果</span>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/icon_library/袋鼠.png" />
              <span>袋鼠快跑</span>
            </a>
          </li>
          <router-link to="/checkIn" style="color: #000;">
            <li>
              <a>
                <img src="../../assets/icon_library/红包.png" />
                <span>红包签到</span>
              </a>
            </li>
          </router-link>
          <li>
            <a>
              <img src="../../assets/icon_library/旅游.png" />
              <span>周边游/旅游</span>
            </a>
          </li>
          <router-link to="/more" style="color: #000;">
            <li>
              <a>
                <img src="../../assets/icon_library/更多.png" />
                <span>更多</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
      <div id="advertising">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../../assets/advertising1.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/advertising2.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/advertising3.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div id="home_bottom_bottom">
        <ul id="list_ul4">
          <li>
            <div id="li_div">
              <div id="li_div1">
                <img src="../../assets/炸鸡.jpg" />
                <span>外卖 · 42分钟送达</span>
                <img />
              </div>
              <div id="li_div2">
                <span id="div2_span1">蜜多多韩式炸鸡</span>
                <span id="div2_span2">
                  <span style="color: #FF9900;">4.9分</span>&nbsp;外包装设计的很人性化
                </span>
                <span id="div2_span3">30减28</span>
                <span id="div2_span3" style="margin-left: -25px;">60减31</span>
                <span id="div2_span4">人均￥25|月售1613</span>
                <img id="div2_png" src="../../assets/icon_library/更多1.png" />
              </div>
            </div>
          </li>
          <li style="position: absolute; margin-left: 195px;">
            <div id="li_div">
              <div id="li_div1">
                <img src="../../assets/汉堡王.jpg" />
                <span>外卖 · 42分钟送达</span>
                <img />
              </div>
              <div id="li_div2">
                <span id="div2_span1">汉堡王【单人餐】</span>
                <span id="div2_span2">
                  <span style="color: #FF9900;font-size: 12px;">￥24.5</span>&nbsp;
                  <span style="text-decoration:line-through">￥49.5</span>
                </span>
                <span id="div2_span3">30减28</span>
                <span id="div2_span4">半年售5000+</span>
                <img id="div2_png" src="../../assets/icon_library/更多1.png" />
              </div>
            </div>
          </li>
          <li style="position: absolute; margin-top: 210px;">
            <div id="li_div">
              <div id="li_div1">
                <img src="../../assets/清江鱼.jpg" />
                <span>外卖 · 42分钟送达</span>
                <img />
              </div>
              <div id="li_div2">
                <span id="div2_span1">清江鱼套餐</span>
                <span id="div2_span2">连锁店</span>
                <span id="div2_span3">30减28</span>
                <span id="div2_span3" style="margin-left: -25px;">60减31</span>
                <span id="div2_span4">已售2525</span>
                <img id="div2_png" src="../../assets/icon_library/更多1.png" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
#home_top {
  background-color: #ffcc00;
  height: 260px;
  position: relative;
}

#home_top:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 -40px 60px 0 #ffffff inset;
}

#daohang {
  padding: 3%;
  margin-left: 2%;
  width: 90%;
  text-align: left;
}
#home_top_daohang_left {
  float: left;
  width: 15%;
}
.daohang_left_span1 {
  display: block;
  font-size: 14px;
  font-weight: 600;
}
.daohang_left_span1 img {
  width: 12px;
  height: 12px;
}
.daohang_left_span2 {
  font-size: 12px;
}

#home_top_daohang_middle {
  float: left;
  margin-left: 10px;
  width: 60%;
}
.van-form {
  position: relative;
  left: 0;
  top: -5px;
  width: 100%;
}

.van-field {
  border-radius: 10px;
  width: 100%;
  height: 30px;
}

#home_top_daohang_middle img {
  position: relative;
  width: 20px;
  height: 20px;
  top: -30px;
  left: 5px;
}

#home_top_daohang_middle span {
  position: relative;
  font-size: 13px;
  color: #999;
  top: -35px;
  left: 8px;
}

.home_top_daohang_img1 {
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
.home_top_daohang_img2 {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

#home_top_top {
  width: 90%;
  position: absolute;
  margin-top: 10px;
  margin-left: 5%;
}

#home_top_top span {
  font-size: 13px;
}

#home_top_bottom {
  position: absolute;
  background-color: #ffffff;
  width: 90%;
  height: 130px;
  margin-left: 5%;
  margin-top: 110px;
  border-radius: 15px;
}

#home_bottom {
  position: absolute;
  background-color: #ffffff;
  width: 100%;
}

#home_ul1 {
  position: absolute;
  width: 90%;
  margin-left: 10%;
  margin-top: 40px;
}

ul {
  list-style: none;
}

#list_ul1 li {
  float: left;
  width: 75px;
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
  font-size: 15px;
}

#list_ul2 {
  position: absolute;
  margin-left: 5%;
}

#list_ul2 li {
  margin-top: 20px;
  float: left;
  width: 65px;
}

#list_ul2 {
  margin: 0 auto;
  overflow: hidden;
}

#list_ul2 a {
  color: black;
}

#list_ul2 a div {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-left: 10px;
}

.ul2_div1 {
  background-color: #ffcc00;
}

.ul2_div2 {
  background-color: #ff9900;
}

.ul2_div3 {
  background-color: #663333;
}

.ul2_div4 {
  background-color: #00ff99;
}

.ul2_div5 {
  background-color: #ffcc00;
}

#list_ul2 li img {
  position: absolute;
  display: block;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-left: 5px;
}

#list_ul2 li span {
  margin-top: 2px;
  display: block;
  font-size: 13px;
}

#home_bottom_top {
  position: absolute;
  width: 90%;
  height: 110px;
  margin-left: 5%;
}

#list_ul3 li {
  float: left;
  margin-left: 2px;
  margin-top: 5px;
  width: 65px;
}

#list_ul3 {
  margin: 0 auto;
  overflow: hidden;
}

#list_ul3 a {
  color: black;
}

#list_ul3 li img {
  display: block;
  margin: 0 auto;
  width: 27px;
  height: 27px;
}

#list_ul3 li span {
  margin-top: 2px;
  display: block;
  font-size: 12px;
}

#advertising {
  position: absolute;
  width: 90%;
  margin-left: 5%;
  margin-top: 120px;
  border-radius: 10px;
}

.my-swipe .van-swipe-item {
  line-height: 100px;
  text-align: center;
  border-radius: 10px;
}

.my-swipe .van-swipe-item img {
  border-radius: 10px;
  width: 100%;
  height: 100px;
}

#home_bottom_bottom {
  margin-top: 220px;
  position: absolute;
  width: 100%;
}

#list_ul4 {
  margin: 0 auto;
  overflow: hidden;
}

#list_ul4 li {
  float: left;
  width: 200px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
}

#li_div1 {
  position: absolute;
  height: 50%;
}

#li_div1 img {
  position: absolute;
  display: block;
  border-radius: 10px 10px 0 0;
  width: 160px;
  height: 100px;
}

#li_div1 span {
  display: block;
  background-color: #000;
  opacity: 0.7;
  font-size: 10px;
  color: #ffffff;
  border-radius: 3px;
  margin-top: 80px;
  margin-left: 10px;
}

#li_div2 {
  margin-top: 100px;
  position: absolute;
  height: 100px;
  width: 160px;
  border-radius: 0 0 10px 10px;
}

#div2_span1 {
  position: absolute;
  font-weight: 900;
  font-size: 14px;
  margin-left: -70px;
}

#div2_span2 {
  position: absolute;
  font-size: 10px;
  margin-left: -70px;
  margin-top: 20px;
}

#div2_span3 {
  padding: 2px;
  position: absolute;
  font-size: 8px;
  margin-left: -70px;
  margin-top: 40px;
  color: #ff3300;
  background-color: #dbdbdb;
  border: #ff3300;
  border-radius: 5px;
}

#div2_span4 {
  position: absolute;
  font-size: 10px;
  margin-left: -70px;
  margin-top: 70px;
}

#div2_png {
  float: left;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: 65px;
  margin-left: 50px;
}
</style>
