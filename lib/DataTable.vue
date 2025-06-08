<template>
  <el-table :data="rows" :show-header :="elTableProps">
    <el-table-column v-if="selectable" type="selection" :selectable="isSelectable" />
    <slot></slot>
    <template v-for="{ key, show, ...props } of colsConverted" :key>
      <el-table-column v-if="!show || show.value" v-slot="{ row, column, $index: index }" :="props">
        <slot :name="key" :row :column :index></slot>
      </el-table-column>
    </template>
    <slot name="afterCustomCols"></slot>
  </el-table>
</template>
<script lang="ts">
type Row = Record<string, unknown>;
export type CustomColumn<K> = Override<
  ComponentProps<typeof ElTableColumn>,
  { key: K; show?: Readonly<Ref<boolean>> },
  'prop'
>;
// TODO add types of column prop
export type DataSlot<T> = Slot<{ row: T; column: Record<string, any>; index: number }>;
export type DataTableSlots<T extends Row, K extends string> = Record<K, DataSlot<T>> & {
  default: EmptySlot;
  afterCustomCols: EmptySlot;
};
type SelfProps<T, K extends string> = {
  rows?: T[];
  customCols?: MaybeArray<CustomColumn<K> | K>;
  selectable?: boolean | ((row: T, index: number) => boolean);
};
// TODO add full ElTable props
type ElTableProps = {
  showHeader?: boolean;
  emptyText?: string;
};
export type DataTableProps<T extends Row, K extends string> = SelfProps<T, K> & ElTableProps;
</script>
<script setup lang="ts" generic="T extends Row, K extends string = never">
import type { EmptySlot, MaybeArray, Override, Slot } from '@/utils';
import { ensureArray } from '@/utils';
import { ElTable, ElTableColumn } from 'element-plus';
import { computed, type Ref } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';

const {
  rows = [],
  customCols = [],
  selectable,
  // ElTable props
  showHeader = true,
  ...elTableProps
} = defineProps<DataTableProps<T, K>>();
defineSlots<DataTableSlots<T, K>>();
defineEmits<{
  selectionChange: [rows: T[]];
}>();
const colsConverted = computed(() =>
  ensureArray(customCols).map((c) => (typeof c === 'string' ? { key: c } : c)),
);
const isSelectable = (row: T, index: number) => {
  if (typeof selectable === 'function') return selectable(row, index);
  return !!selectable;
};
</script>
