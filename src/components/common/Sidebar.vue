<template>
  <div class="side-bar">
    <el-aside>
      <el-menu :default-active="this.$route.path" background-color="#284157" text-color="white" router>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>数据管理</template>
          <el-menu-item-group>
            <el-menu-item index="datashow">数据展示</el-menu-item>
            <el-menu-item index="customershow">客户展示</el-menu-item>
            <el-menu-item index="eqptconnect">设备连接</el-menu-item>
            <el-menu-item index="frequencyshow">日活频次</el-menu-item>
            <el-menu-item index="dataanalysis">数据分析</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>设备管理</template>
          <el-menu-item-group>
            <el-menu-item index="eqptshow">设备列表</el-menu-item>
            <el-menu-item index="eqptcalibration">设备标定</el-menu-item>
            <el-menu-item index="eqptexception">异常设备</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>设备更新</template>
          <el-menu-item-group>
            <el-menu-item index="uploadupdate">上传更新文件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>
  .el-menu{
    /*解决右侧一个白色条*/
    border-right-width: 0;
  }
</style>
