<template>
  <div class="about">
    <h3>ルーム詳細</h3>
    <h4 class="title">hash hub会議室</h4>
    <div>
      <b-container class="bv-example-row">
        <b-row class="content">
            <b-col cols="8" class="left">
              <div class="fot">
                <b-img src="https://picsum.photos/1024/600/?image=41" fluid alt="Responsive image" />
              </div>
              <div class="overview">
                <b-nav-text>＜レンタルスペース概要＞</b-nav-text>
                <p>[利用用途]</p>
                <p>
                  社内会議、作業場所として提供できます。
                </p>
              </div>  
            </b-col>
            <b-col cols="4" class="right">
              <div class="token_content">
                <h4>部屋情報</h4>
                <p class="token_content_text">ご利用日　　:  2018/11/18</p>
                <p class="token_content_text">ご利用時刻　:  11:00~16:00</p>
                <p class="token_content_text">人数　　　　:  10人まで</p>
                <p>お支払い金額 : 0.5ETH</p>
                <div>
                  <b-button href="#" variant="success" class="buy_token">予約する</b-button>
                </div>
              </div>
            </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
}
.title {
  margin-left: 70px;
}
.content {
  height: 1000px;
}
.left {
  background-color: bisque;
}
.fot {
  margin-top: 20px;
}
.overview {
  /* width: 700px; */
  height: 400px;
  padding: 0.5em 1em;
  margin: 2em 0;
  margin-left: 10px;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 3px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
}
.right {
  background-color: aqua;
}
.token_content {
  height: 500px;
  padding: 0.5em 1em;
  margin-top: 20px;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 3px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
}
.token_content_text {
  margin-top: 20px;
}
.buy_token {
  width: 250px;
  margin-left: 20px;
  margin-top: 20px;
}
</style>
