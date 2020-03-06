<template>
  <div class="header">
    <span style="float: left">后台管理系统</span>
    <span style="float: right">用户</span>
      <el-dropdown style="float: right">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>切换</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {

    }
  }
</script>

<style scoped>

</style>
