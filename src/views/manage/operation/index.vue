<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const tableData = ref([])
</script>
<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>运行管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-table :dada="tableData">
      <el-table-column label="序号" type="index" width="60"></el-table-column>
      <el-table-column label="用车单位/个人"></el-table-column>
      <el-table-column header-align="center" label="实收">
        <el-table-column label="车票"></el-table-column>
        <el-table-column label="空驶"></el-table-column>
        <el-table-column label="合计"></el-table-column>
      </el-table-column>

      <el-table-column label="是否结清"></el-table-column>
      <el-table-column label="去向"></el-table-column>
      <el-table-column label="运行日期"></el-table-column>
      <el-table-column label="天数"></el-table-column>

      <el-table-column header-align="center" label="油卡">
        <el-table-column label="上次余额"></el-table-column>
        <el-table-column label="当趟"></el-table-column>
        <el-table-column label="剩余"></el-table-column>
        <el-table-column label="充值"></el-table-column>
      </el-table-column>
      <el-table-column label="现金加油"></el-table-column>
      <el-table-column header-align="center" label="ETC">
        <el-table-column label="上月余额"></el-table-column>
        <el-table-column label="当趟"></el-table-column>
        <el-table-column label="剩余"></el-table-column>
        <el-table-column label="充值"></el-table-column>
      </el-table-column>

      <el-table-column header-align="center" label="里程">
        <el-table-column label="上月转"></el-table-column>
        <el-table-column label="加油升数"></el-table-column>
        <el-table-column label="加油地点"></el-table-column>
        <el-table-column header-align="center" label="油料考核">
          <el-table-column label="油价"></el-table-column>
          <el-table-column label="油耗"></el-table-column>
        </el-table-column>
        <el-table-column label="当趟行程里数"></el-table-column>
        <el-table-column label="累计"></el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="司机一考核">
        <el-table-column label="主班"></el-table-column>
        <el-table-column label="工资"></el-table-column>
        <el-table-column label="出勤天数"></el-table-column>
        <el-table-column label="个人里程"></el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="司机二考核">
        <el-table-column label="配班"></el-table-column>
        <el-table-column label="工资"></el-table-column>
        <el-table-column label="出勤天数"></el-table-column>
        <el-table-column label="个人里程"></el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="开支">
        <el-table-column label="现金过路费"></el-table-column>
        <el-table-column label="住宿费"></el-table-column>
        <el-table-column label="停车费"></el-table-column>
        <el-table-column label="餐饮费"></el-table-column>
        <el-table-column label="其他"></el-table-column>
      </el-table-column>

      <el-table-column label="净利润"></el-table-column>
      <el-table-column label="结算方式"></el-table-column>
      <el-table-column label="是否开票"></el-table-column>
      <el-table-column label="开票抬头"></el-table-column>
      <el-table-column label="开票金额"></el-table-column>
      <el-table-column label="开票日期"></el-table-column>
      <el-table-column label="备注"></el-table-column>
    </el-table>
  </el-card>
</template>
