<template>
  <div class="main-body-list">
    <div v-for="(message,index) in messages" :key="index" class="individual-message-container">
      <div class="individual-message">
        <div class="checkbox">
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        </div>
        <div class="avater">
          <img
            class="circle"
            :src="`http://lorempixel.com/400/400/people/${message.imageNo}`"
            alt="Avater"
          />
        </div>
        <div class="full-name">
          <p>
            <span>{{message.firstName}}</span>
            <span>&nbsp</span>
            <span>{{message.lastName}}</span>
          </p>
        </div>
        <div class="status-container">
          <div class="status">
            <p>{{message.status}}</p>
          </div>
          <div class="message-intro">
            <p>{{message.message}}</p>
          </div>
        </div>
        <div class="menu-icon">
          <img id="menu" src="../../assets/menu.svg" alt />
        </div>
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
          firstName: chance.first(),
          lastName: chance.last(),
          status: "User Testing",
          loaded: false,
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in the slack group"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "Design",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Every week, we bring you the stories of people across the globe - Shopify"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "development",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Kaspars Upmanis is now following you. You have a new follower on driibble"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "Meeting with Jack",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi james, we need to do user testing by monday, please add me in slack group"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "Interview",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi Devan Hope you are well. Haven't heard back from you. Are you still interested in the role?"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "Slack",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "Hi Devan Hope you are well. Haven't heard back from you. Are you still interested in the role?"
        },
        {
          firstName: chance.first(),
          lastName: chance.last(),
          status: "Gmail team",
          image: "",
          imageNo: chance.integer({ min: 1, max: 10 }),
          message:
            "In this digital generation where information can be easily obtained within seeconds..."
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
