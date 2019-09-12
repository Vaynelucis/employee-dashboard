<template>
  <section class="sidebar">
    <header>
      <div class="sidebar-header">
        <img class :src="`http://lorempixel.com/400/400/people/${currentUser.avaterID}`" alt>
        <div class="sidebar-header-welcome">
          <h6>Welcome {{currentUser.firstName}}</h6>
          <p>Super Admin</p>
        </div>
      </div>
    </header>

    <section class="sidebar-body">
      <div class="sidebar-item">
        <span>
          <img src="../assets/layout.svg" alt>
        </span>
        <p>Overview</p>
      </div>
      <div class="sidebar-item">
        <span>
          <img src="../assets/bookmark.svg" alt>
        </span>
        <p>Reservation</p>
      </div>
      <div class="sidebar-item">
        <span>
          <img src="../assets/meeting.svg" alt>
        </span>
        <p>Meeting</p>
      </div>
      <div class="sidebar-item">
        <span class="sidebar-icon">
          <img src="../assets/team.svg" alt>
        </span>
        <p>Customers</p>
      </div>
      <div class="sidebar-item">
        <span class="sidebar-icon">
          <img src="../assets/ticket.svg" alt>
        </span>
        <p>tickets</p>
      </div>
      <div class="sidebar-item">
        <span class="sidebar-icon">
          <img src="../assets/chat.svg" alt>
        </span>
        <p>Message</p>
      </div>
      <div class="sidebar-item">
        <span>
          <img src="../assets/avatar.svg" alt>
        </span>
        <p>Profile</p>
      </div>
      <div id="logout" class="sidebar-item">
        <span>
          <img src="../assets/power.svg" alt>
        </span>
        <p>Logout</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ["currentUser"]
};
</script>