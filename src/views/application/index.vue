<template>
  <el-card>
    <el-form
      ref="formRef"
      v-show="!showResult"
      :model="form"
      :rules="rules"
      label-position="top"
      style="margin: 8px auto auto; max-width: 600px; text-align: left"
      label-width="120px"
    >
      <el-form-item label="用车单位" prop="company">
        <el-input v-model="form.company" placeholder="请输入用车单位"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contactName">
        <el-input v-model="form.contactName" placeholder="请输入联系人"> </el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phoneNumber">
        <el-input v-model="form.phoneNumber" placeholder="请输入联系电话"> </el-input>
      </el-form-item>
      <el-form-item label="行程" prop="itinerary">
        <el-input v-model="form.itinerary" placeholder="请输入行程"> </el-input>
      </el-form-item>
      <el-form-item label="发车日期" required>
        <el-date-picker v-model="form.departureDate"> </el-date-picker>
      </el-form-item>
      <el-form-item label="用车天数" required>
        <el-input type="number" min="0" v-model="form.vehicleDays"> </el-input>
      </el-form-item>
      <el-form-item label="费用" prop="expenses">
        <el-input type="number" v-model="form.expenses" placeholder="请输入费用"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input type="textarea" v-model="form.remarks" placeholder="请输入备注"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <div v-if="showResult">
      <el-result icon="success" title="提交成功" sub-title="">
        <template #extra>
          <el-button type="primary" size="medium" @click="returnSubmitPage">返回</el-button>
          <el-descriptions title="项目名称">
            <el-descriptions-item label="项目ID:">
              <router-link :to="'/CarApplicationDetail/' + form.applicationId">
                {{ form.applicationId }}
              </router-link>
            </el-descriptions-item>
            <el-descriptions-item label="申请时间:">
              {{ form.submitDate }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-result>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
const formRef = ref(null)
const form = reactive({
  processName: '用车申请',
  applicationId: '',
  applicant: '',
  applicantId: '',
  submitDate: '',
  company: '',
  contactName: '',
  itinerary: '',
  phoneNumber: '',
  departureDate: '',
  vehicleDays: null,
  expenses: null,
  remarks: '',
})

const rules = ref({
  contactName: [
    {
      required: true,
      message: '请输入联系人',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: '请输入联系电话',
    },
  ],
  departureDate: [
    {
      required: true,
      message: '请输入发车日期',
    },
  ],
  vehicleDays: [
    {
      required: true,
      message: '请输入用车天数',
    },
  ],
  itinerary: [
    {
      required: true,
      message: '请输入行程',
    },
  ],
  expenses: [
    {
      required: true,
      message: '请输入费用',
    },
  ],
})

let showResult = ref(false)

async function submitForm() {
  let isValid = await formRef.value.validate()
  if (isValid) {
    form.applicationId = dayjs().format('YYYYMMDDHHmmssSSS')
    form.submitDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}

function resetForm() {
  formRef.value?.resetFields()
}

function returnSubmitPage() {
  showResult.value = false
  resetForm()
}
</script>
<style scoped>
:deep .el-result__extra {
  width: 100%;
}
</style>
