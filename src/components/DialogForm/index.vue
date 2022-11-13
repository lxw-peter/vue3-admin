<template>
  <el-dialog ref="dialog" :close-on-click-modal="false" :close-on-press-escape="false">
    <slot />
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IElDialog } from '@/types/element-plus'

const dialog = ref<IElDialog | null>(null)

const handleCancel = () => {
  if (dialog.value?.visible) {
    dialog.value.visible = false
  }
}

interface EmitsType {
  (e: 'confirm'): void
}

const emit = defineEmits<EmitsType>()

const handleConfirm = () => {
  emit('confirm')
}
</script>
