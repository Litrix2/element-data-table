<script setup lang="ts">
import { ElTableColumn } from 'element-plus';
import DataTable from '../src/DataTable.vue';
</script>

<template>
  <DataTable :rows="[]">
    <ElTableColumn prop="a" label="test"></ElTableColumn>
  </DataTable>
</template>
