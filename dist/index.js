import { defineComponent as T, createPropsRestProxy as k, computed as B, createBlock as l, openBlock as r, unref as o, mergeProps as c, withCtx as m, createCommentVNode as d, renderSlot as a, createElementBlock as f, Fragment as i, renderList as g } from "vue";
import { ElTable as P, ElTableColumn as y } from "element-plus";
function v(t) {
  return Array.isArray(t) ? t : [t];
}
const H = /* @__PURE__ */ T({
  __name: "DataTable",
  props: {
    rows: {},
    customCols: { default: () => [] },
    selectable: { type: [Boolean, Function] },
    showHeader: { type: Boolean, default: !0 },
    emptyText: {}
  },
  emits: ["selectionChange"],
  setup(t) {
    const b = k(t, ["rows", "customCols", "selectable", "showHeader"]), p = B(
      () => v(t.customCols).map((e) => typeof e == "string" ? { key: e } : e)
    ), C = (e, s) => typeof t.selectable == "function" ? t.selectable(e, s) : !!t.selectable;
    return (e, s) => (r(), l(o(P), c({
      data: e.rows,
      "show-header": e.showHeader
    }, b), {
      default: m(() => [
        e.selectable ? (r(), l(o(y), {
          key: 0,
          type: "selection",
          selectable: C
        })) : d("", !0),
        a(e.$slots, "default"),
        (r(!0), f(i, null, g(p.value, ({ key: n, show: u, ...h }) => (r(), f(i, { key: n }, [
          !u || u.value ? (r(), l(o(y), c({
            key: 0,
            ref_for: !0
          }, h), {
            default: m(({ row: w }) => [
              a(e.$slots, n, { row: w })
            ]),
            _: 2
          }, 1040)) : d("", !0)
        ], 64))), 128)),
        a(e.$slots, "afterCustomCols")
      ]),
      _: 3
    }, 16, ["data", "show-header"]));
  }
});
export {
  H as DataTable
};
