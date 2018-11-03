<template>
  <div class="about">
    <h3>ルーム一覧</h3>
    <!-- <router-link to="/index/show">ルーム詳細</router-link>
    <router-view/> -->
    <b-container class="bv-example-row">
      <b-row class="content">
          <b-col class="left">

            <div class="form_content">
              <b-form inline >
                <div>
                  <!-- <label class="sr-only" for="inlineFormInputName2">Name</label> -->
                  <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="場所" />
                </div>
                <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inlineFormInputGroupUsername2" placeholder="月日" />
                </b-input-group>
                <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inlineFormInputGroupUsername2" placeholder="時間" />
                </b-input-group>
                <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inlineFormInputGroupUsername2" placeholder="人数" />
                </b-input-group>
                <b-button class="search-botton" variant="primary" size="lg">検索</b-button>
              </b-form>
            </div>
            
              <div>
                <div>
                  <b-card  bg-variant="dark" text-variant="white" title="Hash hub 会議室">
                    <p class="card-text">
                      11/8
                    </p>
                    <p class="card-text">
                      11:00~16:00
                    </p>
                    <p class="card-text">
                      10人
                    </p>
                    <p class="card-text">
                      0.5ETH
                    </p>
                    <b-button href="#/index/show" variant="primary" class="show_button">部屋詳細</b-button>
                  </b-card>
                </div>
                <div>
                  <b-card  bg-variant="dark" text-variant="white" title="Hash hub 会議室">
                    <p class="card-text">
                      11/8
                    </p>
                    <p class="card-text">
                      11:00~16:00
                    </p>
                    <p class="card-text">
                      10人
                    </p>
                    <p class="card-text">
                      0.5ETH
                    </p>
                    <b-button href="#/index/show" variant="primary" class="show_button">部屋詳細</b-button>
                  </b-card>
                </div>
              </div>
             
          </b-col>

          <b-col class="right">

          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.bv-example-row {
  margin-top: 50px;
}
.content {
  height: 1000px;
}
.left {
  background-color: aqua;
}
.form_content {
  background-color: aliceblue;
  padding-left: 20px;
  padding-top: 10px;
}
.search-botton {
  margin-bottom: 30px;
}
.card {
  margin-top: 15px;
}
.card-text {
  display: inline-block;
  margin-left: 5px;
}
.show_button {
  margin-left: 10px;
}
.right {
  background-color: rgb(66, 175, 242);
}
</style>
