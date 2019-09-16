<template>
  <div class="my-nav">
    <div class="logo">
      <h5>BOARDASH</h5>
    </div>

    <div class="nav-grid-container">
      <div id="search-container" class="input-field">
        <input
          class="browser-default"
          id="search"
          name="search"
          type="text"
          placeholder="Search message, people, ticket"
        />

        <button class="browser-default" id="search-btn">
          <i class="small material-icons">search</i>
        </button>
      </div>
      <div id="alert-icon" class>
        <img src="../assets/alert.svg" alt />
        <p>Set Alert</p>
      </div>
      <div id="user-profile" class>
        <img
          class="circle"
          :src="`http://lorempixel.com/400/400/people/${currentUser.avaterID}`"
          alt
        />
        <p>{{currentUser.firstName}} {{currentUser.lastName}}</p>
      </div>
    </div>
    <img id="plus" src="../assets/plus.svg" alt />
  </div>
</template>

<script>
export default {
  props: ["currentUser"]
};
</script>