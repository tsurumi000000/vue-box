<template>
  <div class="about">
    <h3>ルーム一覧</h3>
    <!-- <router-link to="/index/show">ルーム詳細</router-link>
    <router-view/> -->
    <b-container class="bv-example-row">
    <b-row>
        <b-col class="left">
          <div class="form_content">
            <b-form inline>
              <div>
                <!-- <label class="sr-only" for="inlineFormInputName2">Name</label> -->
                <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" />
              </div>
              <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
              <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
              </b-input-group>
              <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
              </b-input-group>
              <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
              </b-input-group>
            </b-form>
            <b-button class="search-botton" variant="primary">検索</b-button>
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
.left {
  background-color: aqua;
  height: 300px;
  width: 400px;
}
.form_content {
  border-color: blanchedalmond;
  background-color: aliceblue;
}
.search-botton {
  margin-left: 340px;
}
.right {
  background-color: rgb(66, 175, 242);
}
</style>
