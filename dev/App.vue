<script setup lang="ts">
import { DataTable } from '@';
import { ElTable } from 'element-plus';
</script>

<template>
  <ElTable></ElTable>
  <DataTable :rows="[{ a: 1 }]" custom-cols="a">
    <template #a="a">{{ a }}</template>
  </DataTable>
</template>
