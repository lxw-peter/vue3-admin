<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>部门管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-form ref="formRef" :model="form" :rules="rules" style="max-width: 600px; text-align: left">
      <el-form-item label="部门名称" prop="departmentName">
        <el-input type="text" v-model="form.departmentName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Plus" @click="handleAdd">添加部门</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号">
        <template #default="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="部门名称" prop="rights">
        <template #default="scope">
          <el-input v-model="scope.row.departmentName" :disabled="scope.row.id !== editId"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <div v-if="scope.$index > 0">
            <el-button v-show="editId === null || scope.row.id !== editId" type="text" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <div v-show="scope.row.id === editId" style="white-space: nowrap">
              <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
              <el-popconfirm title="确定删除吗?" @confirm="handleDelete(scope.row.id, scope.$index)">
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
getDepartmentList()

const editId = ref(null)
const originRow = ref({ departmentName: '' })
const formRef = ref(null)
const form = reactive({
  departmentName: '',
})

const rules = ref({
  departmentName: [
    {
      required: true,
      message: '请输入角色',
    },
  ],
})

async function getDepartmentList() {}

function handleEdit(row) {
  editId.value = row.id
  originRow.value = { ...row }
}

async function handleSave() {}

async function handleDelete() {}

function handleCancel() {}

async function handleAdd() {}
</script>
<style></style>
