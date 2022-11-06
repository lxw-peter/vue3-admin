<template>
  <el-card>
    <template #header>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>流程管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <el-button type="primary" @click="dialogVisible = true">创建流程</el-button>
    <el-divider></el-divider>

    <!-- 创建流程弹窗 -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle">
      <el-form>
        <el-form-item label="流程名称" label-width="85px">
          <el-input v-model.trim="processName"></el-input>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-form ref="formRef" :model="form" :rules="rules" style="text-align: left" label-width="85px">
        <el-form-item label="步骤名" prop="stepName">
          <el-input v-model="form.stepName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="步骤描述" prop="stepDesc">
          <el-input v-model="form.stepDesc" type="text"></el-input>
        </el-form-item>
        <el-form-item label="执行部门" prop="executiveDepartment">
          <el-select v-model="form.executiveDepartment" type="text" style="width: 100%">
            <el-option
              v-for="item of departmentList"
              :key="item.id"
              :label="item.departmentName"
              :value="item.departmentName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="步骤执行人" prop="executor">
          <el-select
            v-model="form.executor"
            remote
            filterable
            placeholder="请输入姓名"
            :remote-method="handlerQueryUserList"
            :loading="loading"
          >
            <el-option v-for="item in userList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <!-- <el-autocomplete
            v-model="form.executor"
            :clearable="true"
            :fetch-suggestions="handlerQueryUserList"
          >
            <template #default="{ item }">
              <div>{{ item.label }}</div>
            </template>
          </el-autocomplete> -->
        </el-form-item>
        <el-form-item label="参数" prop="params">
          <el-select v-model="form.params" placeholder="请输入参数">
            <el-option v-for="item in stepParams" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAddStep">添加步骤</el-button>
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
            <el-select
              v-model="scope.row.executor"
              remote
              filterable
              placeholder="请输入姓名"
              :remote-method="handlerQueryUserList"
              :loading="loading"
            >
              <el-option v-for="item in userList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
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

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitHandler">确定</el-button>
        </span>
      </template>
    </el-dialog>

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
  </el-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const processName = ref('')
const dialogVisible = ref(false)
const dialogTitle = ref('创建流程')
const formRef = ref(null)
const form = reactive({
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

const steps = reactive([])
const processList = ref([])
const departmentList = ref([])
const editId = ref(null)
const originRow = ref({
  stepId: null,
  stepName: '',
  stepDesc: '',
  executor: '',
  executorId: '',
  executiveDepartment: '',
})
const userList = ref([])
const loading = ref(false)
const stepParams = ref([
  {
    label: '车牌号',
    value: '',
  },
  {
    label: '司机',
    value: '',
  },
  {
    label: '手续状态',
    value: '',
  },
  {
    label: '开票抬头',
    value: '',
  },
  {
    label: '开票金额',
    value: '',
  },
  {
    label: '结清',
    value: '',
  },
  {
    label: '备注',
    value: '',
  },
])

getProcessTableList()
getDepartmentList()
/**
 * 获取流程列表
 */
async function getProcessTableList() {}
// 获取部门参数
async function getDepartmentList() {}

/**
 * 添加步骤
 */
async function handleAddStep() {}
/**
 * 提交流程
 */
async function submitHandler() {}

/**
 * 编辑
 */
function handleEdit(row) {
  editId.value = row.id
  originRow.value = { ...row }
  dialogTitle.value = '编辑流程'
  dialogVisible.value = true
  processName.value = row.processName
  steps.length = 0
  steps.push(...row.steps)
}

// 删除流程
async function handleDelete() {}
// 删除步骤
function handleDeleteStep() {}

// 切换
async function switchHandler() {}

async function handlerQueryUserList() {}
</script>
