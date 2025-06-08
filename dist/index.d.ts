import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { ElTableColumn } from 'element-plus';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { ShallowUnwrapRef } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};

declare type CustomColumn<K> = Override<ComponentProps<typeof ElTableColumn>, {
    key: K;
    show?: Readonly<Ref<boolean>>;
}, 'prop'>;

declare type DataSlot<T> = Slot<{
    row: T;
}>;

export declare const DataTable: <T extends Record<string, unknown>, K extends string = never>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onSelectionChange?: ((rows: T[]) => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>, "onSelectionChange"> & ({
        rows: T[];
        customCols?: MaybeArray<CustomColumn<K> | K>;
        selectable?: boolean | ((row: T, index: number) => boolean);
    } & {
        showHeader?: boolean;
        emptyText?: string;
    }) & Partial<{}>> & PublicProps;
    expose(exposed: ShallowUnwrapRef<    {}>): void;
    attrs: any;
    slots: Readonly<Record<K, DataSlot<T>> & {
        default: EmptySlot;
        afterCustomCols: EmptySlot;
    }> & Record<K, DataSlot<T>> & {
        default: EmptySlot;
        afterCustomCols: EmptySlot;
    };
    emit: (evt: "selectionChange", rows: T[]) => void;
}>) => VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};

declare type EmptySlot = () => unknown;

declare type MaybeArray<T, R extends boolean = false> = T | (R extends false ? T[] : readonly T[]);

declare type Override<T extends object, R extends Partial<T> | {} = {}, O extends keyof T = never> = Omit<T, keyof R | O> & R;

declare type Slot<P> = (props: P) => unknown;

export { }
