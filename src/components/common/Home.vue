<template>
  <div class="wrapper">
    <el-container class="el-container1">
      <el-header>
        <v-header/>
      </el-header>
      <el-container>
        <el-aside>
          <v-sidebar/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vSidebar from './Sidebar'
  export default {
    name: "Home",
    components: {
      vHeader,
      vSidebar,
    }
  }
</script>

<style scoped>
  .el-header {
    background-color:#242F42;
    color: white;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
    background-color: rgb(40,65,87)
  }
  .el-container1{
    height: 1064px;
  }
</style>
