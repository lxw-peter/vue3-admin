<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-form ref="formRef" :model="form" :rules="rules" style="max-width: 600px; text-align: left">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <el-select v-model="form.department" type="text" style="width: 100%">
          <el-option
            v-for="item of departmentData"
            :key="item.id"
            :label="item.departmentName"
            :value="item.departmentName"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色" prop="roles">
        <el-select v-model="form.roles" type="text" multiple style="width: 100%">
          <el-option v-for="item of roles" :key="item.id" :label="item.role" :value="item.role"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Plus" @click="handleAdd"> 添加角色 </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" :fit="true">
      <el-table-column label="姓名" prop="name" fixed min-width="100px">
        <template #default="scope">
          <span v-show="editId === null || scope.row.id !== editId">
            {{ scope.row.name }}
          </span>
          <div v-show="scope.row.id === editId">
            <el-input v-model="scope.row.name"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="账号" prop="userId"></el-table-column>
      <el-table-column label="部门" prop="department" min-width="160px">
        <template #default="scope">
          <el-select :disabled="scope.row.id !== editId" v-model="scope.row.department" type="text" style="width: 100%">
            <el-option
              v-for="item of departmentData"
              :key="item.id"
              :label="item.departmentName"
              :value="item.departmentName"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="角色" prop="roles" min-width="160px">
        <template #default="scope">
          <el-select multiple v-model="scope.row.roles" :disabled="scope.row.id !== editId">
            <el-option v-for="item of roles" :key="item.id" :label="item.role" :value="item.role"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="最后一次登录时间" prop="lastLoginTime" min-width="160px"></el-table-column>
      <el-table-column label="开启" prop="used">
        <template #default="scope">
          <el-switch
            v-if="scope.row.id !== 0"
            v-model="scope.row.used"
            :disabled="scope.row.id !== editId"
            inline-prompt
            active-text="开"
            inactive-text="关"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column min-width="160px">
        <template #header>
          <span>操作</span>
        </template>
        <template #default="scope">
          <div v-if="scope.row.id !== 0">
            <el-button
              v-show="editId === null || scope.row.id !== editId"
              type="text"
              @click="handleEdit(scope.row)"
              :disabled="scope.row.id === 0"
              >编辑</el-button
            >
            <div v-show="scope.row.id === editId" style="white-space: nowrap">
              <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
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

const roles = reactive([])
const tableData = reactive([])
const departmentData = reactive([])

getAllUsers()

const editId = ref(null)
const originRow = ref(null)
// 表单元素
const formRef = ref(null)
// 表单数据
const form = reactive({
  name: '',
  department: '',
  roles: [],
})
// 表单规则
const rules = ref({
  name: [
    {
      required: true,
      message: '请输入姓名',
    },
  ],
  department: [
    {
      required: true,
      message: '请输入职位',
      trigger: 'change',
    },
  ],
  roles: [
    {
      required: true,
      message: '请输入角色',
      trigger: 'change',
    },
  ],
})

/**
 * 获取所有用户
 */
async function getAllUsers() {}
/**
 * 编辑行
 */
function handleEdit(row) {
  editId.value = row.id
  originRow.value = { ...row }
}
/**
 * 保存当前行
 */
async function handleSave() {}
/**
 * 取消
 */
function handleCancel(index) {
  tableData[index] = originRow.value
  editId.value = null
}
/**
 * 添加数据
 */
async function handleAdd() {}

/**
 * 格式化userId
 */
// function formateId(id) {
//   return 'hy' + id.toString().padStart(4, 0)
// }
</script>
<style></style>
