<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import dayjs from 'dayjs'

const tableData = ref([])

onMounted(getData)
// 获取数据
async function getData() {}
// 格式化日期
function formateDate(cellValue) {
  return dayjs(cellValue).format('YYYY-MM-DD')
}

const dialogVisible = ref(false)
const form = reactive({ date: '' })
const formRef = ref(null)
// 编辑
function handleEdit() {
  dialogVisible.value = true
}
// 删除
function handleDelete(scope) {
  console.log(scope.row, scope.$index)
  ElMessageBox.confirm('确认删除吗', '警告', {
    confirmButtonText: '确定',
    callback: (action) => {
      action === 'confirm' && tableData.value.splice(scope.$index, 1)
    },
  })
}
</script>
<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="60"></el-table-column>
      <el-table-column prop="contactName" label="姓名"></el-table-column>
      <el-table-column prop="phoneNumber" label="电话"></el-table-column>
      <el-table-column prop="plateNumber" label="车牌号"></el-table-column>
      <el-table-column prop="itinerary" label="行程"></el-table-column>
      <el-table-column prop="departureDate" label="用车日期" :formatter="formateDate"></el-table-column>
      <el-table-column prop="vehicleDays" label="天数"></el-table-column>
      <el-table-column prop="seatsNumber" label="座位数"></el-table-column>

      <el-table-column prop="expenses" label="单价"></el-table-column>
      <el-table-column prop="phoneNumber" label="合计"></el-table-column>

      <el-table-column prop="phoneNumber" label="公户"></el-table-column>
      <el-table-column prop="phoneNumber" label="中心户"></el-table-column>
      <el-table-column prop="phoneNumber" label="普票"></el-table-column>
      <el-table-column prop="phoneNumber" label="专票"></el-table-column>

      <el-table-column prop="invoiceHeader" label="开票抬头"></el-table-column>
      <el-table-column prop="phoneNumber" label="开票票号"></el-table-column>
      <el-table-column prop="InvoiceAmount" label="开票金额"></el-table-column>
      <el-table-column prop="InvoiceDate" label="开票日期"></el-table-column>
      <el-table-column prop="receiptDate" label="到账日期"></el-table-column>

      <el-table-column prop="phoneNumber" label="返还"></el-table-column>

      <el-table-column prop="remarks" label="备注"></el-table-column>
      <el-table-column width="120">
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="修改">
      <el-form ref="formRef" :model="form" label-width="auto" label-position="right">
        <el-form-item label="公户"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="中心户"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="普票"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="专票"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="开票抬头"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="开票票号"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="开票金额"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="开票日期"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="到账日期"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="返还金额"><el-input v-model="form.date"></el-input></el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.date" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<style>
.el-table__cell .cell {
  /* white-space: nowrap; */
}
</style>
