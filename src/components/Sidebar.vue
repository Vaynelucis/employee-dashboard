<template>
  <section class="sidebar">
    <header>
      <span class="pagemark">
        <img src="../assets/pagemark.svg" alt />
      </span>
      <div class="sidebar-header">
        <img class :src="`http://lorempixel.com/400/400/people/${currentUser.avaterID}`" alt />
        <div class="sidebar-header-welcome">
          <h6>Welcome {{currentUser.firstName}}</h6>
          <p>Super Admin</p>
        </div>
      </div>
    </header>

    <section class="sidebar-body">
      <ul>
        <li></li>

        <li>
          <div class="sidebar-item">
            <span>
              <img src="../assets/layout.svg" alt />
            </span>
            <p>Overview</p>
          </div>
        </li>
        <li></li>
        <div class="sidebar-item">
          <span>
            <img src="../assets/bookmark.svg" alt />
          </span>
          <p>Reservation</p>
        </div>
        <li>
          <div class="sidebar-item">
            <span>
              <img src="../assets/meeting.svg" alt />
            </span>
            <p>Meeting</p>
          </div>
        </li>

        <li>
          <div class="sidebar-item">
            <span class="sidebar-icon">
              <img src="../assets/team.svg" alt />
            </span>
            <p>Customers</p>
          </div>
        </li>
        <li>
          <div class="sidebar-item">
            <span class="sidebar-icon">
              <img src="../assets/ticket.svg" alt />
            </span>
            <p>tickets</p>
          </div>
        </li>

        <li class="active">
          <div class="sidebar-item">
            <span class="sidebar-icon">
              <img src="../assets/chat.svg" alt />
            </span>
            <p>Message</p>
          </div>
        </li>
        <li>
          <div class="sidebar-item">
            <span>
              <img src="../assets/avatar.svg" alt />
            </span>
            <p>Profile</p>
          </div>
        </li>

        <li>
          <div id="logout" class="sidebar-item">
            <span>
              <img src="../assets/power.svg" alt />
            </span>
            <p>Logout</p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: ["currentUser"]
};
</script>