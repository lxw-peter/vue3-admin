<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'login' }">login</router-link>
  </div>
  <RouterView />
</template>
