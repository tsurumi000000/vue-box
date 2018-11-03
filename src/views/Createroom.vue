<template>
  <div class="about">
    <h3>ルーム作成</h3>
    <div style="margin: 50px; ">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="会社名・会議室名:"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.company"
                      required
                      placeholder="株式会社○○">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="日時"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.days"
                      required
                      placeholder="2018/11/2">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="時間"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.times"
                      required
                      placeholder="11:00~16:00">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="値段:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.value"
                      required
                      placeholder="0.1ETH">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="人数:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="people"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="住所:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.adless"
                      required
                      placeholder="○○市">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">作成</b-button>
      <b-button type="reset" variant="danger">Resest</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        company: '',
        days: '',
        times: '',
        money: '',
        adless: '',
        people: null,

        checked: [],
      },
      people: [
        {text: '人数選択', value: null},
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


