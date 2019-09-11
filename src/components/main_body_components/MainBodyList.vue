<template>
  <div class="row main-body-list">
    <div v-for="(message,index) in messages" :key="index" class="row individual-message">
      <div class="col m1">
        <label>
          <input type="checkbox">
          <span></span>
        </label>
      </div>
      <div class="col m1 avater">
        <img class="circle" :src="`http://lorempixel.com/400/400/people/${message.imageNo}`" alt>
      </div>
      <div class="col m3 full-name">
        <p>
          <span>First Name</span>
          <span>Last Name</span>
        </p>
      </div>
      <div class="col m2 status">
        <p>User Testing</p>
      </div>
      <div class="col m4 message-intro">
        <p>Hi james, we need to do user testing by monday, please add me in slack group</p>
      </div>
      <div class="col m1 menu-icon">
        <p>icon</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          firstName: "john",
          lastName: "sheperd",
          status: "development",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        },
        {
          firstName: "john",
          lastName: "sheperd",
          status: "development",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        },
        {
          firstName: "john",
          lastName: "sheperd",
          status: "development",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        },
        {
          firstName: "john",
          lastName: "sheperd",
          status: "development",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        },
        {
          firstName: "john",
          lastName: "sheperd",
          status: "development",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        }
      ]
    };
  },
  mounted() {
    // console.log(chance.integer({ min: 1, max: 10 }));
  }
};
</script>