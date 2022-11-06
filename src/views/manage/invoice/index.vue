<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const tableData = ref([])

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
    confirmButtonText: '确认',
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
        <el-breadcrumb-item>发票管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-table :dada="tableData">
      <el-table-column label="序号" type="index" width="60"></el-table-column>
      <el-table-column label="订单号"></el-table-column>
      <el-table-column label="开票时间"></el-table-column>
      <el-table-column label="发票号码"></el-table-column>
      <el-table-column label="发票类型"></el-table-column>
      <el-table-column label="购方名称"></el-table-column>
      <el-table-column label="发票金额"></el-table-column>
      <el-table-column label="结算方式"></el-table-column>
      <el-table-column label="经办人"></el-table-column>
      <el-table-column label="经受人"></el-table-column>
      <el-table-column label="备注"></el-table-column>
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
