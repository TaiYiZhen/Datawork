<template>
  <div class="wrapper">
    <el-container style="height: 1064px; border: 1px solid #eee">
      <el-header>
        <v-header/>
      </el-header>
      <el-container>
        <el-aside width="299px" style="background-color: rgb(40,65,87)">
          <v-sidebar/>
        </el-aside>
        <el-main>
         <h1>主页</h1>
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
  }
</style>
