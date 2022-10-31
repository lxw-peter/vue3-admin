<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>订单详情</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-steps align-center>
      <el-step
        v-for="(step, index) of steps"
        :key="step.stepId"
        :title="step.stepName"
        :description="getStepDesc(step, index)"
        :status="getStepDesc(step, index) ? 'finish' : 'wait'"
      ></el-step>
    </el-steps>
    <el-descriptions title="用车申请信息">
      <el-descriptions-item label="项目ID:">
        {{ currentApplicationInfo.applicationId }}
      </el-descriptions-item>
      <el-descriptions-item label="申请人:">{{ currentApplicationInfo.applicant }}</el-descriptions-item>
      <el-descriptions-item label="申请人账号:">{{ currentApplicationInfo.applicantId }}</el-descriptions-item>
      <el-descriptions-item label="申请时间:">{{ currentApplicationInfo.submitDate }}</el-descriptions-item>
      <el-descriptions-item label="用车单位:">{{ currentApplicationInfo.company || '-' }}</el-descriptions-item>
      <el-descriptions-item label="联系人:">{{ currentApplicationInfo.contactName }}</el-descriptions-item>
      <el-descriptions-item label="联系电话:">{{ currentApplicationInfo.phoneNumber }}</el-descriptions-item>
      <el-descriptions-item label="价格（元）：">{{ currentApplicationInfo.expenses }}</el-descriptions-item>
      <el-descriptions-item label="地址:">{{ currentApplicationInfo.itinerary }}</el-descriptions-item>
      <el-descriptions-item label="发车日期:">{{}}</el-descriptions-item>
      <el-descriptions-item label="用车天数:">{{ currentApplicationInfo.vehicleDays }}</el-descriptions-item>
      <el-descriptions-item label="申请状态:">{{ currentApplicationInfo.status }}</el-descriptions-item>
      <el-descriptions-item label="备注:" span="2">
        <el-input type="textarea" disabled v-model="currentApplicationInfo.remarks"></el-input
      ></el-descriptions-item>
    </el-descriptions>
    <div style="text-align: center" v-if="showOptionBtn">
      <template>
        <el-popconfirm title="确定驳回吗" @confirm="handlerSubmit(false)">
          <template #reference>
            <el-button>驳回</el-button>
          </template>
        </el-popconfirm>
        <el-popconfirm title="确定同意吗" @confirm="handlerSubmit">
          <template #reference>
            <el-button type="primary">同意</el-button>
          </template>
        </el-popconfirm>
      </template>
      <template>
        <el-popconfirm title="确定提交吗" @confirm="handlerSubmit">
          <template #reference>
            <el-button type="primary">提交</el-button>
          </template>
        </el-popconfirm>
      </template>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
let currentApplicationInfo = ref({})
const steps = ref([])
// 显示操作区按钮
const showOptionBtn = ref(true)

getCarApplicationInfo()
getProcessInfo()
// 获取订单信息
async function getCarApplicationInfo() {}
// 获取流程信息
async function getProcessInfo() {}
// 提交
async function handlerSubmit() {}
// 获取步骤描述
function getStepDesc() {}
</script>

<style></style>
