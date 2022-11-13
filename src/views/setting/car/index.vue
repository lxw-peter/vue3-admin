<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>客车管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-form ref="formRef" :model="form" :rules="rules" style="max-width: 600px; text-align: left">
      <el-form-item label="车牌号" prop="plateNumber">
        <el-input type="form.plateNumber"></el-input>
      </el-form-item>
      <el-form-item label="座位数" prop="seatsNumber">
        <el-input v-model="form.seatsNumber" type="number" min="1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Plus" @click="handleAdd">添加客车</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%" table-layout="tableLayout">
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="车牌号" prop="plateNumber">
        <template #default="scope">
          <el-input v-model="plateNumber" :disabled="scope.row.id !== editId"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="">
        <template #default="scope">
          <el-input v-model="scope.row.seatsNumber" :disabled="scope.row.id !== editId"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <div>
            <el-button v-show="editId === null || scope.row.id !== editId" type="text" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <div v-show="scope.row.id === editId" style="white-space: nowrap">
              <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
              <el-popconfirm title="确定删除吗?" @confirm="handleDelete(sope.$index)">
                <template #reference>
                  <el-button type="text">删除</el-button>
                </template>
              </el-popconfirm>
              <el-button type="text" @click="handleCancel(scope.$index)">取消</el-button>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Plus, ArrowRight } from '@element-plus/icons-vue'

let tableData = ref([])
getCarList()

const editId = ref(null)
const originRow = ref({ plateNumber: '' })
const formRef = ref(null)
const form = reactive({
  plateNumber: '',
})

const rules = ref({
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

async function getCarList() {}

function handleEdit(row) {
  editId.value = row.id
  originRow.value = { ...row }
}

async function handleSave() {}

async function handleDelete() {}

function handleCancel() {}

async function handleAdd() {}
</script>
