<template>
  <el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的申请" name="first">
        <el-table :data="tableData" height="550" style="width: 100%" :border="true">
          <el-table-column prop="applicationId" label="订单ID" width="180">
            <template #default="scope">
              <router-link class="table-cell-link" :to="'/CarApplicationDetail/' + scope.row.applicationId">
                {{ scope.row.applicationId }}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="contactName" label="联系人" width="180" />
          <el-table-column prop="phoneNumber" label="联系电话" width="180" />
          <el-table-column prop="itinerary" label="地址" />
          <el-table-column prop="status" label="状态" />
          <el-table-column sortable prop="submitDate" label="申请日期" width="180" />
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="我的待办" name="second">
        <el-table :data="todoData" height="550" style="width: 100%" :border="true">
          <el-table-column prop="applicationId" label="订单ID" width="180">
            <template #default="scope">
              <router-link class="table-cell-link" :to="'/CarApplicationDetail/' + scope.row.applicationId">
                {{ scope.row.applicationId }}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="contactName" label="联系人" width="180" />
          <el-table-column prop="phoneNumber" label="联系电话" width="180" />
          <el-table-column prop="itinerary" label="地址" />
          <el-table-column prop="status" label="状态" />
          <el-table-column sortable prop="submitDate" label="申请日期" width="180" />
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="我的已办" name="third">
        <el-table :data="hasDoneData" height="550" style="width: 100%" :border="true">
          <el-table-column prop="applicationId" label="订单ID" width="180">
            <template #default="scope">
              <router-link class="table-cell-link" :to="'/CarApplicationDetail/' + scope.row.applicationId">
                {{ scope.row.applicationId }}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="contactName" label="联系人" width="180" />
          <el-table-column prop="phoneNumber" label="联系电话" width="180" />
          <el-table-column prop="itinerary" label="地址" />
          <el-table-column prop="status" label="状态" />
          <el-table-column sortable prop="submitDate" label="申请日期" width="180" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const activeName = ref('first')
let tableData = reactive([])
let todoData = reactive([])
let hasDoneData = reactive([])

getCurrentUserCarApplicationList()
getTodoList()
getHasDoneList()
async function getCurrentUserCarApplicationList() {}

async function getTodoList() {}

async function getHasDoneList() {}

function handleClick(tab, event) {
  console.log(tab, event)
}
</script>

<style>
.table-cell-link {
  color: #508ffe;
}
.table-cell-link:hover {
  text-decoration: underline;
}
</style>
