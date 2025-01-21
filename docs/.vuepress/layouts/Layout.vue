<template>
    <div class="container">
      <div class="content">
        <Content />
      </div>
      <div class="ad-sidebar">
        <a href="广告链接" target="_blank">
            12333
          <img src="" alt="广告" />
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
    .container {
      display: flex;
      justify-content: space-between;
    }
    .content {
      flex: 1;
      padding-right: 20px;
    }
    .ad-sidebar {
      position: fixed;
      top: 20%;
      right: 0;
      width: 200px;
      background-color: white;
      padding: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  </style>
  