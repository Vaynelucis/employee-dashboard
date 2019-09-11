<template>
  <!-- <nav>
  </nav>-->
  <div class="row center my-nav">
    <div class="col m2">
      <h5>BOARDASH</h5>
    </div>
    <div id="search-container" class="input-field col m6">
      <!-- <span> -->
      <input
        class="browser-default"
        id="search"
        name="search"
        type="text"
        placeholder="Search message, people, ticket"
      >
      <!-- <label for="search" class="prefix">Search</label> -->
      <button class="browser-default" id="search-btn">
        <i class="small material-icons">search</i>
      </button>
      <!-- </span> -->
    </div>
    <div id="alert-icon" class="col m2">
      <!-- <span > -->
      <img src="../assets/alert.svg" alt>
      <p>Set Alert</p>
      <!-- </span> -->
    </div>
    <div id="user-profile" class="col m2">
      <img class="circle" src="http://lorempixel.com/400/400/people" alt>
      <p>username</p>
      <img id="plus" src="../assets/plus.svg" alt>
    </div>
  </div>
</template>