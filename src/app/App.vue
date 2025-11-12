<template>
  <AppShell>
    <router-view />
  </AppShell>
  <Toaster position="top-right" rich-colors />
</template>

<script setup lang="ts">
import AppShell from '@/components/layout/AppShell.vue'
import { Toaster } from 'vue-sonner'
</script>
