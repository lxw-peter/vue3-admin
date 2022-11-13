<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>

    <el-form ref="formRef" :model="form" :rules="rules" style="max-width: 600px; text-align: left">
      <el-form-item label="角色" prop="role">
        <el-input v-model="form.role" type="text"></el-input>
      </el-form-item>
      <el-form-item label="权限" prop="rights">
        <el-select v-model="form.rights" type="text" multiple>
          <el-option v-for="item of rights" :key="item.id" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Plus" @click="handleAdd">添加角色</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="角色" prop="role"></el-table-column>
      <el-table-column label="权限" prop="rights">
        <template #default="scope">
          <el-select v-model="scope.row.rights" type="text" multiple :disabled="scope.row.id !== editId">
            <el-option v-for="item of rights" :key="item.id" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <div v-if="scope.row.id > 1">
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

let tableData = reactive([])
let rights = reactive([])
getAllRoles()

const editId = ref(null)
const originRow = ref({ date: '', name: '', userId: '', department: '' })
const formRef = ref(null)
const form = reactive({
  role: '',
  rights: [],
})

const rules = ref({
  role: [
    {
      required: true,
      message: '请输入角色',
    },
  ],
  rights: [
    {
      required: true,
      message: '请输入权限',
      trigger: 'blur',
    },
  ],
})

async function getAllRoles() {}

function handleEdit(row) {
  editId.value = row.id
  originRow.value = { ...row }
}

async function handleSave() {}

async function handleDelete() {}

function handleCancel(index) {
  tableData[index] = originRow.value
  editId.value = null
}

async function handleAdd() {}
</script>
