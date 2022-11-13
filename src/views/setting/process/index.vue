<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>流程管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-button type="primary" @click="handleCreate">创建流程</el-button>
    <el-divider></el-divider>
    <el-table :data="processList" border>
      <el-table-column prop="processName" label="流程名" width="120" />
      <el-table-column prop="steps" label="流程步骤" min-width="600">
        <template #default="scope">
          <el-steps :active="scope.row.steps.length">
            <el-step
              v-for="item of scope.row.steps"
              :key="item.stepId"
              :title="item.stepName"
              :description="item.stepDesc"
            ></el-step>
          </el-steps>
        </template>
      </el-table-column>
      <el-table-column prop="used" label="流程开启" width="100px" align="center">
        <template #default="scope">
          <el-switch
            v-model="scope.row.used"
            :active-value="1"
            :inactive-value="0"
            @change="switchHandler(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <div>
            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除吗?" @confirm="handleDelete(scope.row.id, scope.$index)">
              <template #reference>
                <el-button type="text">删除</el-button>
              </template>
            </el-popconfirm>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 创建流程弹窗 -->
    <DialogForm
      v-model="dialogVisible"
      :title="editId ? '编辑流程' : '创建流程'"
      :edit-id="editId"
      width="80%"
      @confirm="handleConfirm"
      @closed="handleClosed"
    >
      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" label-suffix=":">
        <el-form-item v-for="item of fromConfig" :key="item.value" :label="item.label" :prop="item.prop">
          <el-select v-if="item.component === 'select'" v-model="form[item.prop]" :style="item.style">
            <el-option v-for="i of item.data" :key="i.label" :value="i.value" :label="i.label"></el-option>
          </el-select>
          <user-select
            v-else-if="item.component === 'search'"
            v-model="form[item.prop]"
            :style="item.style"
          ></user-select>
          <el-button v-else-if="item.component === 'button'" :type="item.type">{{ item.text }}</el-button>
          <el-input v-else v-model="form[item.prop]"></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="steps" border>
        <el-table-column label="步骤" width="50">
          <template #default="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="stepName" label="步骤名">
          <template #default="scope">
            <el-input v-model="scope.row.stepName"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="stepDesc" label="步骤描述">
          <template #default="scope">
            <el-input v-model="scope.row.stepDesc"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="executiveDepartment" label="执行部门">
          <template #default="scope">
            <el-select v-model="scope.row.executiveDepartment" type="text" style="width: 100%">
              <el-option
                v-for="item of departmentList"
                :key="item.id"
                :label="item.departmentName"
                :value="item.departmentName"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="executor" label="执行人">
          <template #default="scope">
            <user-select v-model="scope.row.executor" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-popconfirm title="确定删除吗?" @confirm="handleDeleteStep(scope.row.id, scope.$index)">
              <template #reference>
                <el-button type="text">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </DialogForm>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import UserSelect from './UserSelect.vue'
import { useFormConfig } from './formConfig'
import type { FormInstance } from 'element-plus'
import type { ISteps, IProcessList } from './type/index'

const processName = ref('')
const dialogVisible = ref(false)
const dialogTitle = ref('创建流程')
const formRef = ref<FormInstance | null>(null)
const form = ref({
  progressName: '',
  stepId: null,
  stepName: '',
  stepDesc: '',
  stepStatus: '',
  executor: '',
  executorId: '',
  executiveDepartment: '',
})

const rules = ref({
  stepName: [
    {
      required: true,
      message: '请输入步骤名称',
    },
  ],
})

const steps = ref<ISteps[] | null>(null)
const processList = ref<IProcessList[] | null>([
  {
    id: 2,
    processName: '用车申请',
    steps: [
      {
        stepId: 0.35690374814993375,
        executor: '',
        stepDesc: '',
        stepName: '提交用车申请',
        executorId: '',
        executiveDepartment: '业务部门',
      },
      {
        stepId: 0.7907862648177852,
        executor: '',
        stepDesc: '',
        stepName: '调度室接单 ',
        executorId: '',
        stepStatus: '',
        executiveDepartment: '调度室',
      },
      {
        stepId: 0.31312903478453347,
        executor: 'hy0031',
        stepDesc: '',
        stepName: '审核',
        executorId: '',
        stepStatus: '',
        executiveDepartment: '董事长',
      },
      {
        stepId: 0.2679913982869613,
        executor: '',
        stepDesc: '',
        stepName: '办理用车手续',
        executorId: '',
        stepStatus: '',
        executiveDepartment: '综合办公室',
      },
      {
        stepId: 0.34793443964877646,
        executor: 'hy0035',
        stepDesc: '',
        stepName: '财务审核',
        executorId: '',
        stepStatus: '',
        executiveDepartment: '财务部',
      },
    ],
    used: 1,
  },
])

const departmentList = ref([])
const editId = ref<number | null>(null)
const fromConfig = useFormConfig()

function handleCreate() {
  dialogVisible.value = true
  dialogTitle.value = '创建流程'
}

function handleClosed() {
  editId.value = null
  steps.value = null
  formRef.value?.resetFields()
}

/**
 * 编辑
 */
function handleEdit(row: IProcessList) {
  editId.value = row.id
  dialogTitle.value = '编辑流程'
  dialogVisible.value = true
  processName.value = row.processName
  steps.value = [...row.steps]
}

function handleConfirm() {
  dialogVisible.value = false
}

// 删除流程
async function handleDelete() {}

// 删除步骤
function handleDeleteStep() {}

// 切换
async function switchHandler() {}
</script>
