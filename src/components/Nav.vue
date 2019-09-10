<template>
  <!-- <nav>
  </nav>-->
  <div class="row">
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
    <div class="col m2">
      <span id="alert-icon">
        <img src="../assets/alert.svg" alt>
        <p>Set Alert</p>
      </span>
    </div>
    <div class="col m2">
      <p>username</p>
    </div>
  </div>
</template>