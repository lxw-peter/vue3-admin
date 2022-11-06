<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ArrowRight, Plus } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const tableData = ref([])

getCarList()
async function getCarList() {}

const carFormRef = ref(null)
const carForm = reactive({
  plateNumber: '',
  seatsNumber: '',
})
const carRules = ref({
  plateNumber: [
    {
      required: true,
      message: '请输入车牌号',
    },
  ],
  seatsNumber: [
    {
      required: true,
      message: '请输入座位数',
    },
  ],
})

async function handleAdd() {
  try {
    await carFormRef.value.validate()
  } catch (error) {
    ElMessage.error('请补充信息')
    return
  }
}

const dialogVisible = ref(false)
const form = ref({
  used: false,
  plateNumber: '',
  seatsNumber: '',
  vehicleMode: '',
  itinerary: '',
  departureDate: '',

  returnDate: '',
  vehicleDays: '',
  expenses: '',
  invoiceOrNot: '',
  invoiceHeader: '',
  InvoiceAmount: '',
  driver1: '',
  driver2: '',
  remarks: '',
})

const formRef = ref(null)
// 编辑
function handleEdit(row) {
  dialogVisible.value = true
  form.value = row
}
// 删除
function handleDelete(scope) {
  console.log(scope.row, scope.$index)
  ElMessageBox.confirm('确认删除吗', '警告', {
    confirmButtonText: '确认',
    callback: (action) => {
      action === 'confirm' && tableData.value.splice(scope.$index, 1)
    },
  })
}

// 确认修改
function handleEditList() {}
</script>
<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>派车管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-form ref="carFormRef" :model="carForm" :rules="carRules" style="max-width: 600px; text-align: left">
      <el-form-item label="车牌号" prop="plateNumber">
        <el-input v-model="carForm.plateNumber" type="text"></el-input>
      </el-form-item>
      <el-form-item label="座位数" prop="seatsNumber">
        <el-input v-model="carForm.seatsNumber" type="number" min="1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Plus" @click="handleAdd">添加客车</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="60"></el-table-column>
      <el-table-column label="车牌号" width="100">
        <template #default="scope">
          <router-link :to="{ name: 'Operation', params: { id: scope.row.plateNumber } }">{{
            scope.row.plateNumber
          }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="seatsNumber" label="座位数"></el-table-column>
      <el-table-column prop="vehicleMode" label="租车方式"></el-table-column>
      <el-table-column prop="used" label="客户"></el-table-column>
      <el-table-column prop="itinerary" label="行程"></el-table-column>
      <el-table-column prop="used" label="是否运行"></el-table-column>
      <el-table-column prop="departureDate" label="发车日期"></el-table-column>
      <el-table-column prop="returnDate" label="返程日期"></el-table-column>
      <el-table-column prop="vehicleDays" label="天数"></el-table-column>

      <el-table-column prop="driver1" label="司机一"></el-table-column>
      <el-table-column prop="driver2" label="司机二"></el-table-column>

      <el-table-column prop="expenses" label="车费"></el-table-column>
      <el-table-column prop="invoiceOrNot" label="是否开票"></el-table-column>
      <el-table-column prop="invoiceHeader" label="发票抬头"></el-table-column>
      <el-table-column prop="InvoiceAmount" label="发票金额"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
      <el-table-column width="120px">
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" disabled @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="修改">
      <el-form ref="formRef" :model="form" label-width="auto" label-position="right">
        <el-form-item label="车牌号"><el-input v-model="form.plateNumber"></el-input></el-form-item>
        <el-form-item label="座位数"
          ><el-input v-model="form.seatsNumber" type="number" min="0"></el-input
        ></el-form-item>
        <el-form-item label="租车方式">
          <el-select v-model="form.vehicleMode" style="width: 100%">
            <el-option label="大包" value="big"></el-option>
            <el-option label="小包" value="small"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户"><el-input v-model="form.contactName"></el-input></el-form-item>
        <el-form-item label="行程"><el-input v-model="form.itinerary"></el-input></el-form-item>
        <el-form-item label="是否运行">
          <el-switch v-model="form.used"></el-switch>
        </el-form-item>
        <el-form-item label="发车日期">
          <el-date-picker v-model="form.departureDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="返程日期">
          <el-date-picker v-model="form.returnDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="运行天数">
          <el-input v-model="form.vehicleDays" type="number" min="0"></el-input>
        </el-form-item>
        <el-form-item label="司机一"><el-input v-model="form.driver1"></el-input></el-form-item>
        <el-form-item label="司机二"><el-input v-model="form.driver2"></el-input></el-form-item>
        <el-form-item label="车费">
          <el-input v-model="form.expenses" type="number" min="0"></el-input>
        </el-form-item>
        <el-form-item label="是否开票">
          <el-switch v-model="form.invoiceOrNot"></el-switch>
        </el-form-item>
        <el-form-item label="发票抬头">
          <el-input v-model="form.invoiceHeader"></el-input>
        </el-form-item>
        <el-form-item label="发票金额">
          <el-input v-model="form.InvoiceAmount"></el-input>
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="form.date" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEditList">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
