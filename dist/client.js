/* delivery-board-dsh client bundle (esbuild) */
window.__ModuleLoader__.load({
  id: "delivery-board-dsh",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

var __cssTagId = "delivery-board-dsh/Dbd.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(__cssTagId) + "]") === null) {
  var __styleTag = document.createElement("style");
  __styleTag.dataset.plugin = "delivery-board-dsh";
  __styleTag.dataset.pluginCss = __cssTagId;
  __styleTag.textContent = "/* client/Dbd.module.css */\n.Dbd_page {\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-base);\n  color: var(--dsw-alias-label-primary);\n  font-size: 14px;\n  line-height: 1.6;\n}\n.Dbd_scroll {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  scrollbar-gutter: stable;\n}\n.Dbd_content {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 clamp(24px, 4vw, 48px) 48px;\n}\n.Dbd_heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-top: 28px;\n}\n[data-platform=darwin] .Dbd_heading {\n  padding-top: calc(28px + var(--dsh-frame-top-clearance, 0px));\n}\n.Dbd_headingMain {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.Dbd_headingTitle {\n  flex: 1;\n  min-width: 0;\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 28px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Dbd_headingSub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_headingActions {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.Dbd_toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 12px;\n  margin-bottom: 16px;\n}\n.Dbd_search {\n  flex: 1 1 220px;\n  min-width: 0;\n  max-width: 320px;\n}\n.Dbd_stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(104px, 1fr));\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.Dbd_focus {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 12px 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n}\n.Dbd_focusTitle {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--dsw-alias-label-secondary);\n}\n.Dbd_focusList {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 14px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.Dbd_focusItem {\n  appearance: none;\n  border: 0;\n  background: none;\n  padding: 0;\n  font: inherit;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-link);\n  cursor: pointer;\n  text-align: left;\n}\n.Dbd_focusItem:hover {\n  text-decoration: underline;\n}\n.Dbd_focusItem:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n.Dbd_focusMore {\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_remind {\n  margin-bottom: 16px;\n  padding: 12px 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n}\n.Dbd_remindHead {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.Dbd_remindTitle {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--dsw-alias-label-secondary);\n}\n.Dbd_remindList {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.Dbd_remindItem {\n  appearance: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  width: 100%;\n  padding: 3px 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: none;\n  font: inherit;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: left;\n  cursor: pointer;\n}\n.Dbd_remindItem:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.Dbd_remindItem:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n.Dbd_remindBadge {\n  flex: none;\n  padding: 0 6px;\n  border-radius: 999px;\n  font-size: 11px;\n  line-height: 17px;\n  font-weight: 500;\n}\n.Dbd_remindBadgeOverdue {\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_remindBadgeToday {\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 12%, transparent);\n  color: var(--dsw-alias-state-warn-primary);\n}\n.Dbd_remindKind {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_remindName {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-primary);\n}\n.Dbd_remindProject {\n  flex: none;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_remindDue {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n.Dbd_stat {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n}\n.Dbd_statValue {\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 28px;\n  font-variant-numeric: tabular-nums;\n}\n.Dbd_statLabel {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_statAlert .Dbd_statValue {\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));\n  gap: 12px;\n}\n.Dbd_card {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: background 120ms ease;\n}\n.Dbd_card:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.Dbd_card:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n.Dbd_cardMoves {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.Dbd_cardTop {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.Dbd_cardName {\n  flex: 1;\n  min-width: 0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 22px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Dbd_cardTags {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.Dbd_progressRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.Dbd_track {\n  flex: 1;\n  min-width: 0;\n  height: 6px;\n  border-radius: 999px;\n  background: var(--dsw-alias-fill-l2);\n  overflow: hidden;\n}\n.Dbd_bar {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--dsw-alias-brand-primary);\n  transition: width 200ms ease;\n}\n.Dbd_barDone {\n  background: var(--dsw-alias-state-success-primary);\n}\n.Dbd_barRisk {\n  background: var(--dsw-alias-state-error-primary);\n}\n.Dbd_progressText {\n  flex: none;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n.Dbd_metaLine {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Dbd_metaLineStrong {\n  color: var(--dsw-alias-label-secondary);\n}\n.Dbd_counts {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px 10px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Dbd_countAlert {\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_section {\n  margin-bottom: 20px;\n  padding: 16px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n}\n.Dbd_sectionHead {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.Dbd_sectionTitle {\n  flex: 1;\n  min-width: 0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 22px;\n}\n.Dbd_sectionHint {\n  flex: none;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n.Dbd_grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.Dbd_field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.Dbd_fieldLabel {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n}\n.Dbd_fieldError {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_select,\n.Dbd_textarea {\n  width: 100%;\n  box-sizing: border-box;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 14px;\n  line-height: 22px;\n  padding: 0 8px;\n}\n.Dbd_select {\n  height: 32px;\n  cursor: pointer;\n}\n.Dbd_textarea {\n  min-height: 64px;\n  padding: 6px 8px;\n  resize: vertical;\n}\n.Dbd_select:focus-visible,\n.Dbd_textarea:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n  border-color: var(--dsw-alias-state-business-primary);\n}\n.Dbd_rows {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0 0 12px;\n  padding: 0;\n  list-style: none;\n}\n.Dbd_row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  min-height: 32px;\n  padding: 2px 6px;\n  border-radius: var(--dsw-radius-sm);\n}\n.Dbd_row:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.Dbd_rowMain {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Dbd_rowDim {\n  color: var(--dsw-alias-label-tertiary);\n  text-decoration: line-through;\n}\n.Dbd_rowAside {\n  flex: none;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n.Dbd_rowAsideAlert {\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_rowStatus {\n  flex: none;\n  width: 104px;\n  height: 26px;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 0 6px;\n}\n.Dbd_rowInput {\n  flex: 1 1 120px;\n  min-width: 0;\n  height: 26px;\n  box-sizing: border-box;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 0 6px;\n}\n.Dbd_rowDate {\n  flex: none;\n  width: 132px;\n  height: 26px;\n  box-sizing: border-box;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 0 6px;\n}\n.Dbd_rowInput:focus-visible,\n.Dbd_rowDate:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n  border-color: var(--dsw-alias-state-business-primary);\n}\n.Dbd_rowTask {\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.Dbd_rowRisk {\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.Dbd_addRow {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.Dbd_addRowGrow {\n  flex: 1;\n  min-width: 140px;\n}\n.Dbd_addRowInline {\n  flex: none;\n  width: 150px;\n}\n.Dbd_addRowDate {\n  flex: none;\n  width: 150px;\n}\n.Dbd_empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 44px 20px;\n  text-align: center;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 14px;\n}\n.Dbd_emptyGlyph {\n  margin-bottom: 12px;\n  color: var(--dsw-alias-label-caption);\n}\n.Dbd_emptyTitle {\n  margin: 0 0 6px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 22px;\n  color: var(--dsw-alias-label-secondary);\n}\n.Dbd_emptyText {\n  margin: 0;\n  max-width: 420px;\n  font-size: 13px;\n  line-height: 20px;\n}\n.Dbd_emptyAction {\n  margin-top: 16px;\n}\n.Dbd_notice {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  padding: 8px 12px;\n  border-radius: var(--dsw-radius-sm);\n  font-size: 12px;\n  line-height: 20px;\n}\n.Dbd_noticeError {\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);\n  color: var(--dsw-alias-state-error-primary);\n}\n.Dbd_noticeIcon {\n  flex: none;\n  display: inline-flex;\n}\n.Dbd_noticeText {\n  flex: 1;\n  min-width: 0;\n}\n.Dbd_detailHead {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  padding: 20px 0 0;\n}\n.Dbd_backButton {\n  flex: none;\n}\n.Dbd_detailTags {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.Dbd_detailSpacer {\n  flex: 1;\n  min-width: 0;\n}\n.Dbd_modalForm {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.Dbd_modalGrid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.Dbd_modalActions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.Dbd_srOnly {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n@media (prefers-reduced-motion: reduce) {\n  .Dbd_card,\n  .Dbd_bar {\n    transition: none;\n  }\n}\n";
  document.head.appendChild(__styleTag);
}

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// client/index.tsx
var index_exports = {};
__export(index_exports, {
  NS: () => NS,
  PANEL_ID: () => PANEL_ID,
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var React = __toESM(require("react"), 1);
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// client/Dbd.module.css
var Dbd_default = {
  page: "Dbd_page",
  scroll: "Dbd_scroll",
  content: "Dbd_content",
  heading: "Dbd_heading",
  headingMain: "Dbd_headingMain",
  headingTitle: "Dbd_headingTitle",
  headingSub: "Dbd_headingSub",
  headingActions: "Dbd_headingActions",
  toolbar: "Dbd_toolbar",
  search: "Dbd_search",
  stats: "Dbd_stats",
  focus: "Dbd_focus",
  focusTitle: "Dbd_focusTitle",
  focusList: "Dbd_focusList",
  focusItem: "Dbd_focusItem",
  focusMore: "Dbd_focusMore",
  remind: "Dbd_remind",
  remindHead: "Dbd_remindHead",
  remindTitle: "Dbd_remindTitle",
  remindList: "Dbd_remindList",
  remindItem: "Dbd_remindItem",
  remindBadge: "Dbd_remindBadge",
  remindBadgeOverdue: "Dbd_remindBadgeOverdue",
  remindBadgeToday: "Dbd_remindBadgeToday",
  remindKind: "Dbd_remindKind",
  remindName: "Dbd_remindName",
  remindProject: "Dbd_remindProject",
  remindDue: "Dbd_remindDue",
  stat: "Dbd_stat",
  statValue: "Dbd_statValue",
  statLabel: "Dbd_statLabel",
  statAlert: "Dbd_statAlert",
  cards: "Dbd_cards",
  card: "Dbd_card",
  cardMoves: "Dbd_cardMoves",
  cardTop: "Dbd_cardTop",
  cardName: "Dbd_cardName",
  cardTags: "Dbd_cardTags",
  progressRow: "Dbd_progressRow",
  track: "Dbd_track",
  bar: "Dbd_bar",
  barDone: "Dbd_barDone",
  barRisk: "Dbd_barRisk",
  progressText: "Dbd_progressText",
  metaLine: "Dbd_metaLine",
  metaLineStrong: "Dbd_metaLineStrong",
  counts: "Dbd_counts",
  countAlert: "Dbd_countAlert",
  section: "Dbd_section",
  sectionHead: "Dbd_sectionHead",
  sectionTitle: "Dbd_sectionTitle",
  sectionHint: "Dbd_sectionHint",
  grid: "Dbd_grid",
  field: "Dbd_field",
  fieldLabel: "Dbd_fieldLabel",
  fieldError: "Dbd_fieldError",
  select: "Dbd_select",
  textarea: "Dbd_textarea",
  rows: "Dbd_rows",
  row: "Dbd_row",
  rowMain: "Dbd_rowMain",
  rowDim: "Dbd_rowDim",
  rowAside: "Dbd_rowAside",
  rowAsideAlert: "Dbd_rowAsideAlert",
  rowStatus: "Dbd_rowStatus",
  rowInput: "Dbd_rowInput",
  rowDate: "Dbd_rowDate",
  rowTask: "Dbd_rowTask",
  rowRisk: "Dbd_rowRisk",
  addRow: "Dbd_addRow",
  addRowGrow: "Dbd_addRowGrow",
  addRowInline: "Dbd_addRowInline",
  addRowDate: "Dbd_addRowDate",
  empty: "Dbd_empty",
  emptyGlyph: "Dbd_emptyGlyph",
  emptyTitle: "Dbd_emptyTitle",
  emptyText: "Dbd_emptyText",
  emptyAction: "Dbd_emptyAction",
  notice: "Dbd_notice",
  noticeError: "Dbd_noticeError",
  noticeIcon: "Dbd_noticeIcon",
  noticeText: "Dbd_noticeText",
  detailHead: "Dbd_detailHead",
  backButton: "Dbd_backButton",
  detailTags: "Dbd_detailTags",
  detailSpacer: "Dbd_detailSpacer",
  modalForm: "Dbd_modalForm",
  modalGrid: "Dbd_modalGrid",
  modalActions: "Dbd_modalActions",
  srOnly: "Dbd_srOnly"
};

// client/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var { useCallback, useEffect, useMemo, useState } = React;
var PANEL_ID = "delivery-board";
var NS = "deliveryBoard";
var API = {
  state: "/api/delivery-board/state",
  project: "/api/delivery-board/project",
  projectDelete: "/api/delivery-board/project/delete",
  projectReorder: "/api/delivery-board/project/reorder",
  task: "/api/delivery-board/task",
  taskDelete: "/api/delivery-board/task/delete",
  milestone: "/api/delivery-board/milestone",
  milestoneDelete: "/api/delivery-board/milestone/delete",
  export: "/api/delivery-board/export",
  import: "/api/delivery-board/import"
};
var zh = {
  "panel": "\u9879\u76EE\u7BA1\u7406",
  "board.subtitle": "\u591A\u9879\u76EE\u4EA4\u4ED8\u770B\u677F \xB7 \u4ECA\u5929 {today}",
  "board.new": "\u65B0\u5EFA\u9879\u76EE",
  "board.search": "\u641C\u7D22\u9879\u76EE / \u5BA2\u6237 / \u8D1F\u8D23\u4EBA",
  "board.searchLabel": "\u641C\u7D22\u9879\u76EE",
  "board.loading": "\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026",
  "board.loadFailed": "\u52A0\u8F7D\u770B\u677F\u5931\u8D25\uFF1A{error}",
  "board.retry": "\u91CD\u8BD5",
  "filter.label": "\u6309\u72B6\u6001\u7B5B\u9009",
  "filter.all": "\u5168\u90E8",
  "filter.active": "\u8FDB\u884C\u4E2D",
  "filter.blocked": "\u963B\u585E",
  "filter.risk": "\u6709\u98CE\u9669",
  "filter.delivered": "\u5DF2\u4EA4\u4ED8",
  "filter.archived": "\u5DF2\u5F52\u6863",
  "sort.label": "\u6392\u5E8F\u65B9\u5F0F",
  "sort.manual": "\u624B\u52A8",
  "sort.due": "\u6309\u622A\u6B62\u65E5",
  "focus.title": "\u4ECA\u65E5\u7126\u70B9",
  "focus.empty": "\u6CA1\u6709\u8FDB\u884C\u4E2D\u7684\u9879\u76EE\uFF0C\u53BB\u65B0\u5EFA\u4E00\u4E2A\u5427\u3002",
  "focus.item": "{name}\uFF1A{action}",
  "focus.more": "\u8FD8\u6709 {count} \u9879",
  "remind.title": "\u5230\u671F\u63D0\u9192",
  "remind.overdue": "\u5DF2\u903E\u671F",
  "remind.today": "\u4ECA\u5929",
  "remind.days": "\u5269 {n} \u5929",
  "remind.task": "\u4EFB\u52A1",
  "remind.milestone": "\u91CC\u7A0B\u7891",
  "remind.none": "\u672A\u6765 3 \u5929\u5185\u6CA1\u6709\u5230\u671F\u4E8B\u9879\u3002",
  "remind.goto": "\u67E5\u770B\u300C{name}\u300D",
  "data.export": "\u5BFC\u51FA",
  "data.import": "\u5BFC\u5165",
  "data.importTitle": "\u5BFC\u5165\u9879\u76EE\u6570\u636E",
  "data.importBody": "\u5BFC\u5165\u4F1A\u7528\u6240\u9009\u6587\u4EF6\u8986\u76D6\u5F53\u524D\u5168\u90E8\u9879\u76EE\u3002\u73B0\u6709\u6570\u636E\u4F1A\u5148\u81EA\u52A8\u5907\u4EFD\u4E3A .bak \u6587\u4EF6\uFF0C\u4F46\u6B64\u64CD\u4F5C\u4ECD\u4E0D\u53EF\u64A4\u9500\u3002",
  "data.importAction": "\u786E\u8BA4\u5BFC\u5165",
  "data.importing": "\u5BFC\u5165\u4E2D\u2026",
  "data.importFileLabel": "\u9009\u62E9 JSON \u6587\u4EF6",
  "data.imported": "\u6570\u636E\u5DF2\u5BFC\u5165",
  "data.importFailed": "\u5BFC\u5165\u5931\u8D25\uFF1A{error}",
  "stat.total": "\u9879\u76EE\u603B\u6570",
  "stat.active": "\u8FDB\u884C\u4E2D",
  "stat.blocked": "\u963B\u585E",
  "stat.delivered": "\u5DF2\u4EA4\u4ED8",
  "stat.atRisk": "\u6709\u98CE\u9669",
  "stat.avgProgress": "\u5E73\u5747\u8FDB\u5EA6",
  "card.dueAt": "{date} \u622A\u6B62",
  "card.noDue": "\u672A\u8BBE\u622A\u6B62",
  "card.noClient": "\u672A\u586B\u5BA2\u6237",
  "card.noOwner": "\u672A\u6307\u6D3E",
  "card.atRisk": "\u6709\u98CE\u9669",
  "card.overdue": "\u903E\u671F",
  "card.dueSoon": "\u5373\u5C06\u5230\u671F",
  "card.priorityHigh": "\u9AD8\u4F18\u5148",
  "card.next": "\u4E0B\u4E00\u6B65\uFF1A{action}",
  "card.noNext": "\u672A\u586B\u4E0B\u4E00\u6B65\u884C\u52A8",
  "card.counts": "\u91CC\u7A0B\u7891 {mdone}/{mtotal} \xB7 \u4EFB\u52A1 {tdone}/{ttotal} \xB7 \u98CE\u9669 {risks}",
  "card.open": "\u6253\u5F00\u9879\u76EE {name}",
  "card.moveUp": "\u4E0A\u79FB\u300C{name}\u300D",
  "card.moveDown": "\u4E0B\u79FB\u300C{name}\u300D",
  "status.planning": "\u89C4\u5212\u4E2D",
  "status.active": "\u8FDB\u884C\u4E2D",
  "status.blocked": "\u963B\u585E",
  "status.delivered": "\u5DF2\u4EA4\u4ED8",
  "status.archived": "\u5DF2\u5F52\u6863",
  "priority.high": "\u9AD8",
  "priority.medium": "\u4E2D",
  "priority.low": "\u4F4E",
  "task.todo": "\u5F85\u529E",
  "task.doing": "\u8FDB\u884C\u4E2D",
  "task.done": "\u5DF2\u5B8C\u6210",
  "risk.high": "\u9AD8",
  "risk.medium": "\u4E2D",
  "risk.low": "\u4F4E",
  "empty.boardTitle": "\u8FD8\u6CA1\u6709\u9879\u76EE",
  "empty.boardText": "\u521B\u5EFA\u7B2C\u4E00\u4E2A\u4EA4\u4ED8\u9879\u76EE\u540E\uFF0C\u8FD9\u91CC\u4F1A\u6C47\u603B\u5B83\u7684\u8FDB\u5EA6\u3001\u98CE\u9669\u4E0E\u4E0B\u4E00\u6B65\u884C\u52A8\u3002",
  "empty.boardAction": "\u65B0\u5EFA\u9879\u76EE",
  "empty.filterTitle": "\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u9879\u76EE",
  "empty.filterText": "\u8BD5\u8BD5\u66F4\u6362\u72B6\u6001\u7B5B\u9009\u6216\u6E05\u7A7A\u641C\u7D22\u5173\u952E\u8BCD\u3002",
  "detail.back": "\u8FD4\u56DE\u770B\u677F",
  "detail.delete": "\u5220\u9664\u9879\u76EE",
  "detail.archive": "\u5F52\u6863\u9879\u76EE",
  "detail.restore": "\u6062\u590D\u9879\u76EE",
  "detail.deliveredAt": "\u5DF2\u4EA4\u4ED8\uFF1A{date}",
  "detail.archiveTitle": "\u5F52\u6863\u8FD9\u4E2A\u9879\u76EE\uFF1F",
  "detail.archiveBody": "\u300C{name}\u300D\u4F1A\u79FB\u5165\u5DF2\u5F52\u6863\u89C6\u56FE\uFF0C\u968F\u65F6\u53EF\u4EE5\u6062\u590D\u3002\u5DF2\u5F52\u6863\u9879\u76EE\u4E0D\u518D\u8BA1\u5165\u98CE\u9669\u63D0\u9192\u3002",
  "action.delete": "\u5220\u9664",
  "action.archive": "\u5F52\u6863",
  "action.cancel": "\u53D6\u6D88",
  "detail.deleteTitle": "\u5220\u9664\u8FD9\u4E2A\u9879\u76EE\uFF1F",
  "detail.deleteBody": "\u300C{name}\u300D\u7684\u91CC\u7A0B\u7891\u3001\u4EFB\u52A1\u4E0E\u98CE\u9669\u9879\u4F1A\u4E00\u5E76\u5220\u9664\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\uFF0C\u4F46\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B83\u9879\u76EE\u3002",
  "detail.cancel": "\u53D6\u6D88",
  "detail.confirmDelete": "\u786E\u8BA4\u5220\u9664",
  "progress.title": "\u4EA4\u4ED8\u8FDB\u5EA6",
  "progress.derived": "{progress}%\uFF08\u7531 {done}/{total} \u4E2A\u4EFB\u52A1\u81EA\u52A8\u8BA1\u7B97\uFF09",
  "progress.manual": "{progress}%\uFF08\u624B\u52A8\u586B\u5199\uFF09",
  "progress.manualLabel": "\u624B\u52A8\u8FDB\u5EA6\uFF080\u2013100\uFF09",
  "info.title": "\u9879\u76EE\u4FE1\u606F",
  "info.save": "\u4FDD\u5B58\u4FEE\u6539",
  "info.saving": "\u4FDD\u5B58\u4E2D\u2026",
  "info.saved": "\u5DF2\u4FDD\u5B58",
  "info.updatedAt": "\u6700\u540E\u66F4\u65B0\uFF1A{time}",
  "field.name": "\u9879\u76EE\u540D\u79F0",
  "field.client": "\u5BA2\u6237",
  "field.owner": "\u8D1F\u8D23\u4EBA",
  "field.status": "\u72B6\u6001",
  "field.priority": "\u4F18\u5148\u7EA7",
  "field.startDate": "\u5F00\u59CB\u65E5\u671F",
  "field.dueDate": "\u622A\u6B62\u65E5\u671F",
  "field.overview": "\u9879\u76EE\u6982\u8FF0",
  "field.nextAction": "\u4E0B\u4E00\u6B65\u884C\u52A8",
  "field.overviewPlaceholder": "\u4EA4\u4ED8\u8303\u56F4\u3001\u5173\u952E\u7EA6\u675F\u3001\u9A8C\u6536\u65B9\u5F0F",
  "field.nextActionPlaceholder": "\u63A5\u4E0B\u6765\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B",
  "field.required": "\u5FC5\u586B",
  "milestone.title": "\u91CC\u7A0B\u7891",
  "milestone.hint": "{done}/{total} \u5DF2\u5B8C\u6210",
  "milestone.add": "\u65B0\u589E\u91CC\u7A0B\u7891",
  "milestone.addPlaceholder": "\u4F8B\u5982\uFF1AUAT \u901A\u8FC7",
  "milestone.addAction": "\u6DFB\u52A0",
  "milestone.dueLabel": "\u622A\u6B62",
  "milestone.overdue": "\u5DF2\u903E\u671F",
  "milestone.empty": "\u6682\u65E0\u91CC\u7A0B\u7891\u3002",
  "milestone.done": "\u6807\u8BB0\u300C{title}\u300D\u4E3A\u5DF2\u5B8C\u6210",
  "milestone.remove": "\u5220\u9664\u91CC\u7A0B\u7891\u300C{title}\u300D",
  "task.title": "\u4EFB\u52A1",
  "task.hint": "{done}/{total} \u5DF2\u5B8C\u6210",
  "task.add": "\u65B0\u589E\u4EFB\u52A1",
  "task.addPlaceholder": "\u4F8B\u5982\uFF1A\u5B8C\u6210\u63A5\u53E3\u8054\u8C03",
  "task.addAction": "\u6DFB\u52A0",
  "task.empty": "\u6682\u65E0\u4EFB\u52A1\u3002",
  "task.statusLabel": "\u300C{title}\u300D\u7684\u72B6\u6001",
  "task.assigneeLabel": "\u300C{title}\u300D\u7684\u8D1F\u8D23\u4EBA",
  "task.assigneePlaceholder": "\u8D1F\u8D23\u4EBA",
  "task.dueLabel": "\u300C{title}\u300D\u7684\u622A\u6B62\u65E5\u671F",
  "task.duePlaceholder": "\u622A\u6B62",
  "task.remove": "\u5220\u9664\u4EFB\u52A1\u300C{title}\u300D",
  "task.overdue": "\u5DF2\u903E\u671F",
  "task.dueSoon": "\u5373\u5C06\u5230\u671F",
  "risk.title": "\u98CE\u9669\u9879",
  "risk.hint": "{count} \u9879",
  "risk.add": "\u65B0\u589E\u98CE\u9669\u9879",
  "risk.addPlaceholder": "\u4F8B\u5982\uFF1A\u5BA2\u6237\u4FA7\u63A5\u53E3\u6587\u6863\u672A\u5B9A\u7A3F",
  "risk.addAction": "\u6DFB\u52A0",
  "risk.empty": "\u6682\u65E0\u98CE\u9669\u9879\u3002",
  "risk.remove": "\u5220\u9664\u98CE\u9669\u9879\u300C{title}\u300D",
  "risk.severityLabel": "\u300C{title}\u300D\u7684\u7EA7\u522B",
  "risk.note": "\u5E94\u5BF9\u63AA\u65BD",
  "risk.noteLabel": "\u300C{title}\u300D\u7684\u5E94\u5BF9\u63AA\u65BD",
  "risk.notePlaceholder": "\u5E94\u5BF9\u63AA\u65BD\uFF08\u53EF\u9009\uFF09",
  "new.title": "\u65B0\u5EFA\u9879\u76EE",
  "new.create": "\u521B\u5EFA\u9879\u76EE",
  "new.creating": "\u521B\u5EFA\u4E2D\u2026",
  "new.namePlaceholder": "\u4F8B\u5982\uFF1A\u534E\u4E1C\u533A ERP \u4E0A\u7EBF",
  "new.clientPlaceholder": "\u4F8B\u5982\uFF1A\u67D0\u67D0\u96C6\u56E2",
  "new.ownerPlaceholder": "\u4F8B\u5982\uFF1A\u5F20\u4E09",
  "new.templateLabel": "\u9879\u76EE\u6A21\u677F",
  "new.templateNone": "\u7A7A\u767D\u9879\u76EE",
  "template.software": "\u8F6F\u4EF6\u4EA4\u4ED8",
  "template.website": "\u5B98\u7F51\u6539\u7248",
  "toast.created": "\u9879\u76EE\u5DF2\u521B\u5EFA",
  "toast.saved": "\u5DF2\u4FDD\u5B58",
  "toast.taskSaved": "\u4EFB\u52A1\u5DF2\u4FDD\u5B58",
  "toast.taskDeleted": "\u4EFB\u52A1\u5DF2\u5220\u9664",
  "toast.milestoneSaved": "\u91CC\u7A0B\u7891\u5DF2\u4FDD\u5B58",
  "toast.milestoneDeleted": "\u91CC\u7A0B\u7891\u5DF2\u5220\u9664",
  "toast.deleted": "\u9879\u76EE\u5DF2\u5220\u9664",
  "toast.archived": "\u9879\u76EE\u5DF2\u5F52\u6863",
  "toast.restored": "\u9879\u76EE\u5DF2\u6062\u590D",
  "toast.imported": "\u6570\u636E\u5DF2\u5BFC\u5165",
  "toast.exported": "\u5DF2\u5F00\u59CB\u5BFC\u51FA",
  "toast.failed": "\u64CD\u4F5C\u672A\u6210\u529F\uFF0C\u8BF7\u91CD\u8BD5",
  "error.action": "\u64CD\u4F5C\u5931\u8D25\uFF1A{error}",
  "error.nameRequired": "\u9879\u76EE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
};
var en = {
  "panel": "Projects",
  "board.subtitle": "Delivery board \xB7 today {today}",
  "board.new": "New project",
  "board.search": "Search project, client, or owner",
  "board.searchLabel": "Search projects",
  "board.loading": "Loading board\u2026",
  "board.loadFailed": "Could not load the board: {error}",
  "board.retry": "Retry",
  "filter.label": "Filter by status",
  "filter.all": "All",
  "filter.active": "Active",
  "filter.blocked": "Blocked",
  "filter.risk": "At risk",
  "filter.delivered": "Delivered",
  "filter.archived": "Archived",
  "sort.label": "Sort",
  "sort.manual": "Manual",
  "sort.due": "By due date",
  "focus.title": "Today's focus",
  "focus.empty": "No active projects yet \u2014 create one.",
  "focus.item": "{name}: {action}",
  "focus.more": "{count} more",
  "remind.title": "Due soon",
  "remind.overdue": "Overdue",
  "remind.today": "Today",
  "remind.days": "{n}d left",
  "remind.task": "Task",
  "remind.milestone": "Milestone",
  "remind.none": "Nothing due in the next 3 days.",
  "remind.goto": "Open \u201C{name}\u201D",
  "data.export": "Export",
  "data.import": "Import",
  "data.importTitle": "Import project data",
  "data.importBody": "Importing replaces all current projects with the selected file. Existing data is backed up to a .bak file first, but this cannot be undone.",
  "data.importAction": "Import",
  "data.importing": "Importing\u2026",
  "data.importFileLabel": "Choose a JSON file",
  "data.imported": "Data imported",
  "data.importFailed": "Import failed: {error}",
  "stat.total": "Projects",
  "stat.active": "Active",
  "stat.blocked": "Blocked",
  "stat.delivered": "Delivered",
  "stat.atRisk": "At risk",
  "stat.avgProgress": "Avg progress",
  "card.dueAt": "due {date}",
  "card.noDue": "no due date",
  "card.noClient": "no client",
  "card.noOwner": "unassigned",
  "card.atRisk": "At risk",
  "card.overdue": "Overdue",
  "card.dueSoon": "Due soon",
  "card.priorityHigh": "High",
  "card.next": "Next: {action}",
  "card.noNext": "No next action",
  "card.counts": "Milestones {mdone}/{mtotal} \xB7 Tasks {tdone}/{ttotal} \xB7 Risks {risks}",
  "card.open": "Open project {name}",
  "card.moveUp": "Move \u201C{name}\u201D up",
  "card.moveDown": "Move \u201C{name}\u201D down",
  "status.planning": "Planning",
  "status.active": "Active",
  "status.blocked": "Blocked",
  "status.delivered": "Delivered",
  "status.archived": "Archived",
  "priority.high": "High",
  "priority.medium": "Medium",
  "priority.low": "Low",
  "task.todo": "To do",
  "task.doing": "Doing",
  "task.done": "Done",
  "risk.high": "High",
  "risk.medium": "Medium",
  "risk.low": "Low",
  "empty.boardTitle": "No projects yet",
  "empty.boardText": "Create your first delivery project and its progress, risks, and next action show up here.",
  "empty.boardAction": "New project",
  "empty.filterTitle": "No projects match the filter",
  "empty.filterText": "Try another status filter or clear the search box.",
  "detail.back": "Back to board",
  "detail.delete": "Delete project",
  "detail.archive": "Archive project",
  "detail.restore": "Restore project",
  "detail.deliveredAt": "Delivered: {date}",
  "detail.archiveTitle": "Archive this project?",
  "detail.archiveBody": "\u201C{name}\u201D moves to the archived view and can be restored at any time. Archived projects are excluded from due reminders.",
  "action.delete": "Delete",
  "action.archive": "Archive",
  "action.cancel": "Cancel",
  "detail.deleteTitle": "Delete this project?",
  "detail.deleteBody": "The milestones, tasks, and risks of \u201C{name}\u201D are deleted with it. This cannot be undone, and other projects are unaffected.",
  "detail.cancel": "Cancel",
  "detail.confirmDelete": "Delete",
  "progress.title": "Delivery progress",
  "progress.derived": "{progress}% (from {done}/{total} tasks)",
  "progress.manual": "{progress}% (entered manually)",
  "progress.manualLabel": "Manual progress (0\u2013100)",
  "info.title": "Project info",
  "info.save": "Save changes",
  "info.saving": "Saving\u2026",
  "info.saved": "Saved",
  "info.updatedAt": "Last updated: {time}",
  "field.name": "Name",
  "field.client": "Client",
  "field.owner": "Owner",
  "field.status": "Status",
  "field.priority": "Priority",
  "field.startDate": "Start date",
  "field.dueDate": "Due date",
  "field.overview": "Overview",
  "field.nextAction": "Next action",
  "field.overviewPlaceholder": "Scope, key constraints, acceptance",
  "field.nextActionPlaceholder": "The most important next step",
  "field.required": "required",
  "milestone.title": "Milestones",
  "milestone.hint": "{done}/{total} done",
  "milestone.add": "Add milestone",
  "milestone.addPlaceholder": "e.g. UAT signed off",
  "milestone.addAction": "Add",
  "milestone.dueLabel": "Due",
  "milestone.overdue": "overdue",
  "milestone.empty": "No milestones yet.",
  "milestone.done": "Mark \u201C{title}\u201D done",
  "milestone.remove": "Delete milestone \u201C{title}\u201D",
  "task.title": "Tasks",
  "task.hint": "{done}/{total} done",
  "task.add": "Add task",
  "task.addPlaceholder": "e.g. finish API integration",
  "task.addAction": "Add",
  "task.empty": "No tasks yet.",
  "task.statusLabel": "Status of \u201C{title}\u201D",
  "task.assigneeLabel": "Assignee of \u201C{title}\u201D",
  "task.assigneePlaceholder": "Assignee",
  "task.dueLabel": "Due date of \u201C{title}\u201D",
  "task.duePlaceholder": "Due",
  "task.remove": "Delete task \u201C{title}\u201D",
  "task.overdue": "overdue",
  "task.dueSoon": "due soon",
  "risk.title": "Risks",
  "risk.hint": "{count}",
  "risk.add": "Add risk",
  "risk.addPlaceholder": "e.g. client API spec not signed off",
  "risk.addAction": "Add",
  "risk.empty": "No risks recorded.",
  "risk.remove": "Delete risk \u201C{title}\u201D",
  "risk.severityLabel": "Severity of \u201C{title}\u201D",
  "risk.note": "Mitigation",
  "risk.noteLabel": "Mitigation for \u201C{title}\u201D",
  "risk.notePlaceholder": "Mitigation (optional)",
  "new.title": "New project",
  "new.create": "Create",
  "new.creating": "Creating\u2026",
  "new.namePlaceholder": "e.g. ERP rollout, East China",
  "new.clientPlaceholder": "e.g. Acme Group",
  "new.ownerPlaceholder": "e.g. Zhang San",
  "new.templateLabel": "Template",
  "new.templateNone": "Blank project",
  "template.software": "Software delivery",
  "template.website": "Website redesign",
  "toast.created": "Project created",
  "toast.saved": "Saved",
  "toast.taskSaved": "Task saved",
  "toast.taskDeleted": "Task deleted",
  "toast.milestoneSaved": "Milestone saved",
  "toast.milestoneDeleted": "Milestone deleted",
  "toast.deleted": "Project deleted",
  "toast.archived": "Project archived",
  "toast.restored": "Project restored",
  "toast.imported": "Data imported",
  "toast.exported": "Export started",
  "toast.failed": "The action did not complete \u2014 try again",
  "error.action": "Action failed: {error}",
  "error.nameRequired": "The project name is required"
};
var STATUS_ORDER = ["planning", "active", "blocked", "delivered", "archived"];
var PRIORITY_ORDER = ["high", "medium", "low"];
var TASK_ORDER = ["todo", "doing", "done"];
var SEVERITY_ORDER = ["high", "medium", "low"];
var STATUS_TONE = {
  planning: "neutral",
  active: "info",
  blocked: "danger",
  delivered: "success",
  archived: "quiet"
};
var FIELD_KEYS = [
  "name",
  "client",
  "owner",
  "status",
  "priority",
  "startDate",
  "dueDate",
  "overview",
  "nextAction"
];
var EMPTY_DRAFT = {
  name: "",
  client: "",
  owner: "",
  status: "planning",
  priority: "medium",
  startDate: "",
  dueDate: "",
  overview: "",
  nextAction: ""
};
var TEMPLATES = {
  software: {
    overview: "\u5B8C\u6210\u9700\u6C42 \u2192 \u8BBE\u8BA1 \u2192 \u5F00\u53D1 \u2192 \u8054\u8C03 \u2192 UAT \u2192 \u4E0A\u7EBF\u7684\u5B8C\u6574\u4EA4\u4ED8\u3002",
    nextAction: "\u786E\u8BA4\u9700\u6C42\u8303\u56F4\u5E76\u62C6\u5206\u4EFB\u52A1",
    milestones: [{ title: "\u9700\u6C42\u51BB\u7ED3" }, { title: "\u5F00\u53D1\u5B8C\u6210" }, { title: "UAT \u901A\u8FC7" }, { title: "\u4E0A\u7EBF" }],
    tasks: [{ title: "\u9700\u6C42\u8BC4\u5BA1" }, { title: "\u6280\u672F\u65B9\u6848\u8BBE\u8BA1" }, { title: "\u63A5\u53E3\u8054\u8C03" }, { title: "\u4E0A\u7EBF\u68C0\u67E5\u5355" }]
  },
  website: {
    overview: "\u5B98\u7F51\u6539\u7248\uFF1A\u89C6\u89C9\u91CD\u6784 + \u5185\u5BB9\u66F4\u65B0 + \u53D1\u5E03\u3002",
    nextAction: "\u68B3\u7406\u6539\u7248\u8303\u56F4\u4E0E\u9875\u9762\u6E05\u5355",
    milestones: [{ title: "\u89C6\u89C9\u7A3F\u786E\u8BA4" }, { title: "\u9875\u9762\u5F00\u53D1\u5B8C\u6210" }, { title: "\u5185\u5BB9\u8FC1\u79FB\u5B8C\u6210" }, { title: "\u53D1\u5E03\u4E0A\u7EBF" }],
    tasks: [{ title: "\u9996\u9875\u8BBE\u8BA1" }, { title: "\u5B50\u9875\u9762\u5F00\u53D1" }, { title: "\u5185\u5BB9\u5F55\u5165" }, { title: "\u53D1\u5E03\u524D\u9A8C\u6536" }]
  }
};
function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
function textOf(value, fallback) {
  const s = typeof value === "string" ? value.trim() : "";
  return s || fallback;
}
function formatStamp(iso) {
  if (typeof iso !== "string" || iso === "") return "\u2014";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 16).replace("T", " ");
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}
async function getState() {
  const r = await fetch(API.state, { headers: { accept: "application/json" } });
  const data = await r.json();
  if (!r.ok || data?.ok === false) throw new Error(data?.error ?? `HTTP ${r.status}`);
  return data;
}
async function post(path, body) {
  const r = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  let data;
  try {
    data = await r.json();
  } catch {
    return { ok: false, error: `HTTP ${r.status}` };
  }
  if (!r.ok || data?.ok === false) return { ok: false, error: data?.error ?? `HTTP ${r.status}` };
  return data;
}
function StatusTag({ status, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tag, { tone: STATUS_TONE[status] ?? "outline", children: t(`status.${status}`) });
}
function ProgressBar({ value, tone }) {
  const v = Math.max(0, Math.min(100, Number(value) || 0));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.track, role: "progressbar", "aria-valuenow": v, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cx(Dbd_default.bar, tone === "done" && Dbd_default.barDone, tone === "risk" && Dbd_default.barRisk), style: { width: `${v}%` } }) });
}
function StatCard({ label, value, alert }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cx(Dbd_default.stat, alert && Dbd_default.statAlert), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.statValue, children: String(value) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.statLabel, children: label })
  ] });
}
function Notice({ children, tone = "error" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cx(Dbd_default.notice, tone === "error" && Dbd_default.noticeError), role: "alert", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.noticeIcon, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconWarningOutlineRegular, { size: 16 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.noticeText, children })
  ] });
}
function EmptyState({ glyph, title, body, action }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.empty, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.emptyGlyph, "aria-hidden": "true", children: glyph }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: Dbd_default.emptyTitle, children: title }),
    body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.emptyText, children: body }) : null,
    action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.emptyAction, children: action }) : null
  ] });
}
function Field({ label, hint, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: Dbd_default.field, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.fieldLabel, children: label }),
    children,
    hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.fieldError, children: hint }) : null
  ] });
}
function TextField({ label, value, onChange, placeholder, type = "text", ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dsh_client_ui_primitives.Input,
    {
      type,
      value: value ?? "",
      placeholder: placeholder ?? "",
      onChange: (e) => onChange(e.target.value),
      ...rest
    }
  ) });
}
function SelectField({ label, value, onChange, options }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { className: Dbd_default.select, value, onChange: (e) => onChange(e.target.value), children: options.map(([v, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: v, children: text }, v)) }) });
}
function TextAreaField({ label, value, onChange, placeholder }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "textarea",
    {
      className: Dbd_default.textarea,
      value: value ?? "",
      placeholder: placeholder ?? "",
      onChange: (e) => onChange(e.target.value)
    }
  ) });
}
function ProjectCard({ project, onOpen, t, canMove, moveUpDisabled, moveDownDisabled, onMoveUp, onMoveDown }) {
  const progress = project.progress ?? 0;
  const meta = [
    textOf(project.client, t("card.noClient")),
    textOf(project.owner, t("card.noOwner")),
    project.dueDate ? t("card.dueAt", { date: project.dueDate }) : t("card.noDue")
  ].join(" \xB7 ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: Dbd_default.card,
      role: "button",
      tabIndex: 0,
      onClick: () => onOpen(project.id),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project.id);
        }
      },
      "aria-label": t("card.open", { name: project.name }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.cardTop, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: Dbd_default.cardName, children: project.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: Dbd_default.cardTags, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusTag, { status: project.status, t }),
            project.atRisk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tag, { tone: "warning", children: project.overdue ? t("card.overdue") : t("card.atRisk") }) : null,
            project.dueSoon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tag, { tone: "warning", children: t("card.dueSoon") }) : null,
            project.priority === "high" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tag, { tone: "outline", children: t("card.priorityHigh") }) : null
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.progressRow, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ProgressBar,
            {
              value: progress,
              tone: progress >= 100 ? "done" : project.atRisk ? "risk" : void 0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: Dbd_default.progressText, children: [
            progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.metaLine, children: meta }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: cx(Dbd_default.metaLine, Dbd_default.metaLineStrong), children: project.nextAction ? t("card.next", { action: project.nextAction }) : t("card.noNext") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.counts, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("card.counts", {
            mdone: project.milestoneCounts?.done ?? 0,
            mtotal: project.milestoneCounts?.total ?? 0,
            tdone: project.taskCounts?.done ?? 0,
            ttotal: project.taskCounts?.total ?? 0,
            risks: project.riskCount ?? 0
          }) }),
          (project.overdueMilestones?.length ?? 0) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.countAlert, children: `${project.overdueMilestones.length} ${t("milestone.overdue")}` }) : null,
          canMove ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: Dbd_default.cardMoves, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_dsh_client_ui_primitives.Button,
              {
                variant: "ghost",
                size: "sm",
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronUpOutlineRegular, { size: 14 }),
                disabled: moveUpDisabled,
                "aria-label": t("card.moveUp", { name: project.name }),
                title: t("card.moveUp", { name: project.name }),
                onClick: (e) => {
                  e.stopPropagation();
                  onMoveUp();
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_dsh_client_ui_primitives.Button,
              {
                variant: "ghost",
                size: "sm",
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutlineRegular, { size: 14 }),
                disabled: moveDownDisabled,
                "aria-label": t("card.moveDown", { name: project.name }),
                title: t("card.moveDown", { name: project.name }),
                onClick: (e) => {
                  e.stopPropagation();
                  onMoveDown();
                }
              }
            )
          ] }) : null
        ] })
      ]
    }
  );
}
var FILTERS = ["all", "active", "blocked", "risk", "delivered", "archived"];
var SORTS = ["manual", "due"];
function FocusStrip({ projects, onOpen, t }) {
  const focus = projects.filter(
    (p) => (p.status === "planning" || p.status === "active") && textOf(p.nextAction, "") !== ""
  );
  if (focus.length === 0) return null;
  const shown = focus.slice(0, 4);
  const more = focus.length - shown.length;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.focus, "aria-label": t("focus.title"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: Dbd_default.focusTitle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconCheckCircleOutlineRegular, { size: 16 }),
      t("focus.title")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: Dbd_default.focusList, children: [
      shown.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: Dbd_default.focusItem, onClick: () => onOpen(p.id), children: t("focus.item", { name: p.name, action: p.nextAction }) }) }, p.id)),
      more > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: Dbd_default.focusMore, children: t("focus.more", { count: more }) }) : null
    ] })
  ] });
}
function ReminderStrip({ reminders, onOpen, t }) {
  if (!Array.isArray(reminders) || reminders.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.remind, role: "region", "aria-label": t("remind.title"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.remindHead, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: Dbd_default.remindTitle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconAlarmClockOutlineRegular, { size: 16 }),
      t("remind.title")
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: Dbd_default.remindList, children: reminders.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: Dbd_default.remindItem, onClick: () => onOpen(r.projectId), "aria-label": t("remind.goto", { name: r.projectName }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx(Dbd_default.remindBadge, r.overdue ? Dbd_default.remindBadgeOverdue : Dbd_default.remindBadgeToday), children: r.overdue ? t("remind.overdue") : r.dueInDays === 0 ? t("remind.today") : t("remind.days", { n: r.dueInDays }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.remindKind, children: r.kind === "task" ? t("remind.task") : t("remind.milestone") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.remindName, children: r.title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.remindProject, children: r.projectName }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.remindDue, children: r.due })
    ] }) }, `${r.projectId}-${r.kind}-${r.title}-${i}`)) })
  ] });
}
function BoardView({ snapshot, onOpen, onNew, onReorder, onExport, onImportFile, t }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("manual");
  const fileRef = React.useRef(null);
  const projects = snapshot?.projects ?? [];
  const reminders = snapshot?.reminders ?? [];
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matched = projects.filter((p) => {
      if (filter === "risk") {
        if (!p.atRisk) return false;
      } else if (filter !== "all" && p.status !== filter) {
        return false;
      }
      if (!q) return true;
      const base = [p.name, p.client, p.owner, p.nextAction].some(
        (v) => String(v ?? "").toLowerCase().includes(q)
      );
      if (base) return true;
      const tasks = Array.isArray(p.tasks) ? p.tasks : [];
      const milestones = Array.isArray(p.milestones) ? p.milestones : [];
      return [...tasks, ...milestones].some((x) => String(x.title ?? "").toLowerCase().includes(q));
    });
    if (sort === "due") {
      return [...matched].sort((a, b) => {
        const an = a.dueInDays === null ? Number.MAX_SAFE_INTEGER : a.dueInDays;
        const bn = b.dueInDays === null ? Number.MAX_SAFE_INTEGER : b.dueInDays;
        return an - bn;
      });
    }
    return matched;
  }, [projects, filter, query, sort]);
  const s = snapshot?.summary ?? {};
  const move = (index, delta) => {
    const target = index + delta;
    if (target < 0 || target >= visible.length) return;
    const ids = visible.map((p) => p.id);
    const a = ids[index];
    ids[index] = ids[target];
    ids[target] = a;
    onReorder(ids);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.heading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.headingMain, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: Dbd_default.headingTitle, children: t("panel") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.headingSub, children: t("board.subtitle", { today: snapshot?.today ?? "\u2014" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.headingActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", size: "sm", onClick: onExport, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconDownloadOutlineRegular, { size: 16 }), children: t("data.export") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => fileRef.current?.click(),
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconDataOutlineRegular, { size: 16 }),
            children: t("data.import")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            ref: fileRef,
            type: "file",
            accept: "application/json,.json",
            className: Dbd_default.srOnly,
            "aria-label": t("data.importFileLabel"),
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) onImportFile(file);
              e.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", size: "sm", onClick: onNew, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 16 }), children: t("board.new") })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusStrip, { projects, onOpen, t }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReminderStrip, { reminders, onOpen, t }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.search, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_dsh_client_ui_primitives.Input,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconSearchOutlineRegular, { size: 16 }),
          value: query,
          placeholder: t("board.search"),
          "aria-label": t("board.searchLabel"),
          onChange: (e) => setQuery(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_dsh_client_ui_primitives.SegmentedControl,
        {
          id: "dbd-filter",
          value: filter,
          onChange: setFilter,
          label: t("filter.label"),
          options: FILTERS.map((value) => ({ value, label: t(`filter.${value}`) }))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_dsh_client_ui_primitives.SegmentedControl,
        {
          id: "dbd-sort",
          value: sort,
          onChange: setSort,
          label: t("sort.label"),
          options: SORTS.map((value) => ({ value, label: t(`sort.${value}`) }))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.stats, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.total"), value: s.total ?? 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.active"), value: s.active ?? 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.blocked"), value: s.blocked ?? 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.delivered"), value: s.delivered ?? 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.atRisk"), value: s.atRisk ?? 0, alert: (s.atRisk ?? 0) > 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { label: t("stat.avgProgress"), value: `${s.avgProgress ?? 0}%` })
    ] }),
    projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      EmptyState,
      {
        glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconProjectAddOutlineRegular, { size: 28 }),
        title: t("empty.boardTitle"),
        body: t("empty.boardText"),
        action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", onClick: onNew, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 16 }), children: t("empty.boardAction") })
      }
    ) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      EmptyState,
      {
        glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconFlatListOutlineRegular, { size: 28 }),
        title: t("empty.filterTitle"),
        body: t("empty.filterText")
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.cards, children: visible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ProjectCard,
      {
        project: p,
        onOpen,
        t,
        canMove: sort === "manual",
        moveUpDisabled: i === 0,
        moveDownDisabled: i === visible.length - 1,
        onMoveUp: () => move(i, -1),
        onMoveDown: () => move(i, 1)
      },
      p.id
    )) })
  ] });
}
function NewProjectModal({ open, busy, error, onClose, onCreate, t }) {
  const [draft, setDraft] = useState(EMPTY_DRAFT);
  const [template, setTemplate] = useState("");
  useEffect(() => {
    if (open) {
      setDraft(EMPTY_DRAFT);
      setTemplate("");
    }
  }, [open]);
  const set = (k) => (v) => setDraft((d) => ({ ...d, [k]: v }));
  const applyTemplate = (key) => {
    setTemplate(key);
    const tpl = TEMPLATES[key];
    if (!tpl) return;
    setDraft((d) => ({
      ...d,
      overview: d.overview || tpl.overview,
      nextAction: d.nextAction || tpl.nextAction,
      milestones: tpl.milestones.map((m) => ({ title: m.title, due: "", done: false })),
      tasks: tpl.tasks.map((x) => ({ title: x.title, status: "todo", assignee: "", due: "" }))
    }));
  };
  const nameMissing = draft.name.trim() === "";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dsh_client_ui_primitives.Modal,
    {
      open,
      onClose,
      title: t("new.title"),
      closeLabel: t("detail.cancel"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: onClose, children: t("detail.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: busy || nameMissing, onClick: () => onCreate(draft), children: busy ? t("new.creating") : t("new.create") })
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalForm, children: [
        error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SelectField,
          {
            label: t("new.templateLabel"),
            value: template,
            onChange: applyTemplate,
            options: [
              ["", t("new.templateNone")],
              ...Object.keys(TEMPLATES).map((key) => [key, t(`template.${key}`)])
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          TextField,
          {
            label: t("field.name"),
            value: draft.name,
            onChange: set("name"),
            placeholder: t("new.namePlaceholder"),
            required: true,
            "data-modal-autofocus": true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalGrid, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.client"), value: draft.client, onChange: set("client"), placeholder: t("new.clientPlaceholder") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.owner"), value: draft.owner, onChange: set("owner"), placeholder: t("new.ownerPlaceholder") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalGrid, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            SelectField,
            {
              label: t("field.status"),
              value: draft.status,
              onChange: set("status"),
              options: STATUS_ORDER.map((v) => [v, t(`status.${v}`)])
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            SelectField,
            {
              label: t("field.priority"),
              value: draft.priority,
              onChange: set("priority"),
              options: PRIORITY_ORDER.map((v) => [v, t(`priority.${v}`)])
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.startDate"), type: "date", value: draft.startDate, onChange: set("startDate") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.dueDate"), type: "date", value: draft.dueDate, onChange: set("dueDate") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          TextAreaField,
          {
            label: t("field.overview"),
            value: draft.overview,
            onChange: set("overview"),
            placeholder: t("field.overviewPlaceholder")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          TextAreaField,
          {
            label: t("field.nextAction"),
            value: draft.nextAction,
            onChange: set("nextAction"),
            placeholder: t("field.nextActionPlaceholder")
          }
        )
      ] })
    }
  );
}
function DeleteProjectModal({ open, project, busy, onCancel, onConfirm, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dsh_client_ui_primitives.Modal,
    {
      open,
      onClose: onCancel,
      title: t("detail.deleteTitle"),
      closeLabel: t("detail.cancel"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: onCancel, children: t("detail.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: busy, onClick: onConfirm, children: t("detail.confirmDelete") })
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.emptyText, children: t("detail.deleteBody", { name: project?.name ?? "" }) })
    }
  );
}
function ArchiveModal({ open, project, busy, onCancel, onConfirm, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dsh_client_ui_primitives.Modal,
    {
      open,
      onClose: onCancel,
      title: t("detail.archiveTitle"),
      closeLabel: t("detail.cancel"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: onCancel, children: t("detail.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: busy, onClick: onConfirm, children: t("action.archive") })
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.emptyText, children: t("detail.archiveBody", { name: project?.name ?? "" }) })
    }
  );
}
function ImportModal({ open, busy, file, onCancel, onConfirm, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_dsh_client_ui_primitives.Modal,
    {
      open,
      onClose: onCancel,
      title: t("data.importTitle"),
      closeLabel: t("detail.cancel"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.modalActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: onCancel, children: t("detail.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: busy || !file, onClick: onConfirm, children: busy ? t("data.importing") : t("data.importAction") })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.emptyText, children: t("data.importBody") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.metaLine, style: { marginTop: 12 }, children: file ? file.name : t("data.importFileLabel") })
      ]
    }
  );
}
function DetailView({
  project,
  busy,
  error,
  onBack,
  onSave,
  onPatch,
  onAskDelete,
  onAskArchive,
  onRestore,
  t
}) {
  const [draft, setDraft] = useState(() => ({ ...project }));
  const [taskTitle, setTaskTitle] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [mileTitle, setMileTitle] = useState("");
  const [mileDue, setMileDue] = useState("");
  const [riskTitle, setRiskTitle] = useState("");
  const [riskSeverity, setRiskSeverity] = useState("medium");
  const [riskNote, setRiskNote] = useState("");
  useEffect(() => {
    setDraft({ ...project });
  }, [project]);
  const set = (k) => (v) => setDraft((d) => ({ ...d, [k]: v }));
  const dirty = useMemo(
    () => FIELD_KEYS.some((k) => (draft[k] ?? "") !== (project[k] ?? "")) || draft.progress !== project.progress,
    [draft, project]
  );
  const tasks = project.tasks ?? [];
  const milestones = project.milestones ?? [];
  const risks = project.risks ?? [];
  const overdue = new Set(project.overdueMilestones ?? []);
  const saveProject = (patch) => onSave({
    id: project.id,
    name: project.name,
    client: project.client,
    owner: project.owner,
    status: project.status,
    priority: project.priority,
    startDate: project.startDate,
    dueDate: project.dueDate,
    overview: project.overview,
    nextAction: project.nextAction,
    progress: project.progress,
    deliveredAt: project.deliveredAt,
    milestones: project.milestones,
    tasks: project.tasks,
    risks: project.risks,
    ...patch
  });
  const isArchived = project.status === "archived";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.heading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.headingMain, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: Dbd_default.headingTitle, children: project.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.headingSub, children: project.deliveredAt ? t("detail.deliveredAt", { date: project.deliveredAt }) + " \xB7 " + t("info.updatedAt", { time: formatStamp(project.updatedAt) }) : t("info.updatedAt", { time: formatStamp(project.updatedAt) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.headingActions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "ghost", size: "sm", onClick: onBack, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronLeftOutlineRegular, { size: 16 }), children: t("detail.back") }),
        isArchived ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", size: "sm", disabled: busy, onClick: onRestore, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconUnarchiveOutlineRegular, { size: 16 }), children: t("detail.restore") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", size: "sm", disabled: busy, onClick: onAskArchive, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconArchiveOutlineRegular, { size: 16 }), children: t("detail.archive") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", size: "sm", disabled: busy, onClick: onAskDelete, children: t("detail.delete") })
        ] })
      ] })
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: error }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.section, "aria-label": t("progress.title"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.sectionHead, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: Dbd_default.sectionTitle, children: t("progress.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.sectionHint, children: project.progressDerived ? t("progress.derived", {
          progress: project.progress,
          done: project.taskCounts?.done ?? 0,
          total: project.taskCounts?.total ?? 0
        }) : t("progress.manual", { progress: project.progress }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ProgressBar,
        {
          value: project.progress,
          tone: project.progress >= 100 ? "done" : project.atRisk ? "risk" : void 0
        }
      ),
      project.progressDerived ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        TextField,
        {
          label: t("progress.manualLabel"),
          type: "number",
          min: 0,
          max: 100,
          value: String(draft.progress ?? 0),
          onChange: (v) => setDraft((d) => ({ ...d, progress: Number.parseInt(v || "0", 10) || 0 }))
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.section, "aria-label": t("info.title"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.sectionHead, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: Dbd_default.sectionTitle, children: t("info.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.sectionHint, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusTag, { status: project.status, t }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.grid, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.name"), value: draft.name, onChange: set("name") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.client"), value: draft.client, onChange: set("client") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.owner"), value: draft.owner, onChange: set("owner") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SelectField,
          {
            label: t("field.status"),
            value: draft.status,
            onChange: set("status"),
            options: STATUS_ORDER.map((v) => [v, t(`status.${v}`)])
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SelectField,
          {
            label: t("field.priority"),
            value: draft.priority,
            onChange: set("priority"),
            options: PRIORITY_ORDER.map((v) => [v, t(`priority.${v}`)])
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.startDate"), type: "date", value: draft.startDate, onChange: set("startDate") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("field.dueDate"), type: "date", value: draft.dueDate, onChange: set("dueDate") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, { label: t("field.overview"), value: draft.overview, onChange: set("overview") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, { label: t("field.nextAction"), value: draft.nextAction, onChange: set("nextAction") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: 12, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_dsh_client_ui_primitives.Button,
        {
          variant: "primary",
          disabled: busy || draft.name.trim() === "" || !dirty,
          onClick: () => onSave({
            ...draft,
            id: project.id,
            milestones: project.milestones,
            tasks: project.tasks,
            risks: project.risks
          }),
          children: !dirty ? t("info.saved") : busy ? t("info.saving") : t("info.save")
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.section, "aria-label": t("milestone.title"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.sectionHead, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: Dbd_default.sectionTitle, children: t("milestone.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.sectionHint, children: t("milestone.hint", {
          done: project.milestoneCounts?.done ?? 0,
          total: project.milestoneCounts?.total ?? 0
        }) })
      ] }),
      milestones.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.metaLine, children: t("milestone.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: Dbd_default.rows, children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: Dbd_default.row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Checkbox,
          {
            checked: m.done === true,
            label: "",
            title: t("milestone.done", { title: m.title }),
            onChange: () => onPatch({ kind: "milestone", milestone: { ...m, done: !m.done } })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx(Dbd_default.rowMain, m.done && Dbd_default.rowDim), children: m.title }),
        m.due ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx(Dbd_default.rowAside, overdue.has(m.id) && Dbd_default.rowAsideAlert), children: overdue.has(m.id) ? `${m.due} \xB7 ${t("milestone.overdue")}` : m.due }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "ghost",
            size: "sm",
            "aria-label": t("milestone.remove", { title: m.title }),
            onClick: () => onPatch({ kind: "milestoneDelete", milestoneId: m.id }),
            children: t("action.delete")
          }
        )
      ] }, m.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.addRow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowGrow, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("milestone.add"), value: mileTitle, onChange: setMileTitle, placeholder: t("milestone.addPlaceholder") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowDate, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("milestone.dueLabel"), type: "date", value: mileDue, onChange: setMileDue }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "outline",
            disabled: busy || mileTitle.trim() === "",
            onClick: () => {
              onPatch({ kind: "milestone", milestone: { title: mileTitle, due: mileDue, done: false } });
              setMileTitle("");
              setMileDue("");
            },
            children: t("milestone.addAction")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.section, "aria-label": t("task.title"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.sectionHead, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: Dbd_default.sectionTitle, children: t("task.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.sectionHint, children: t("task.hint", {
          done: project.taskCounts?.done ?? 0,
          total: project.taskCounts?.total ?? 0
        }) })
      ] }),
      tasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.metaLine, children: t("task.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: Dbd_default.rows, children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: cx(Dbd_default.row, Dbd_default.rowTask), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "select",
          {
            className: cx(Dbd_default.select, Dbd_default.rowStatus),
            value: task.status,
            "aria-label": t("task.statusLabel", { title: task.title }),
            onChange: (e) => onPatch({ kind: "task", task: { ...task, status: e.target.value } }),
            children: TASK_ORDER.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: v, children: t(`task.${v}`) }, v))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx(Dbd_default.rowMain, task.status === "done" && Dbd_default.rowDim), children: task.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: Dbd_default.rowInput,
            value: task.assignee ?? "",
            placeholder: t("task.assigneePlaceholder"),
            "aria-label": t("task.assigneeLabel", { title: task.title }),
            onChange: (e) => onPatch({ kind: "task", task: { ...task, assignee: e.target.value } })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: Dbd_default.rowDate,
            type: "date",
            value: task.due ?? "",
            "aria-label": t("task.dueLabel", { title: task.title }),
            onChange: (e) => onPatch({ kind: "task", task: { ...task, due: e.target.value } })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "ghost",
            size: "sm",
            "aria-label": t("task.remove", { title: task.title }),
            onClick: () => onPatch({ kind: "taskDelete", taskId: task.id }),
            children: t("action.delete")
          }
        )
      ] }, task.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.addRow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowGrow, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("task.add"), value: taskTitle, onChange: setTaskTitle, placeholder: t("task.addPlaceholder") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowInline, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("task.assigneePlaceholder"), value: taskAssignee, onChange: setTaskAssignee, placeholder: t("task.assigneePlaceholder") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowDate, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("task.duePlaceholder"), type: "date", value: taskDue, onChange: setTaskDue }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "outline",
            disabled: busy || taskTitle.trim() === "",
            onClick: () => {
              onPatch({ kind: "task", task: { title: taskTitle, status: "todo", assignee: taskAssignee, due: taskDue } });
              setTaskTitle("");
              setTaskAssignee("");
              setTaskDue("");
            },
            children: t("task.addAction")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.section, "aria-label": t("risk.title"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.sectionHead, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: Dbd_default.sectionTitle, children: t("risk.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.sectionHint, children: t("risk.hint", { count: risks.length }) })
      ] }),
      risks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.metaLine, children: t("risk.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: Dbd_default.rows, children: risks.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: cx(Dbd_default.row, Dbd_default.rowRisk), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "select",
          {
            className: cx(Dbd_default.select, Dbd_default.rowStatus),
            value: r.severity,
            "aria-label": t("risk.severityLabel", { title: r.title }),
            onChange: (e) => saveProject({ risks: risks.map((x) => x.id === r.id ? { ...x, severity: e.target.value } : x) }),
            children: SEVERITY_ORDER.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: v, children: t(`risk.${v}`) }, v))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: Dbd_default.rowMain, children: r.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: Dbd_default.rowInput,
            value: r.note ?? "",
            placeholder: t("risk.notePlaceholder"),
            "aria-label": t("risk.noteLabel", { title: r.title }),
            onChange: (e) => saveProject({ risks: risks.map((x) => x.id === r.id ? { ...x, note: e.target.value } : x) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "ghost",
            size: "sm",
            "aria-label": t("risk.remove", { title: r.title }),
            onClick: () => saveProject({ risks: risks.filter((x) => x.id !== r.id) }),
            children: t("action.delete")
          }
        )
      ] }, r.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.addRow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowGrow, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("risk.add"), value: riskTitle, onChange: setRiskTitle, placeholder: t("risk.addPlaceholder") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowInline, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SelectField,
          {
            label: t("risk.title"),
            value: riskSeverity,
            onChange: setRiskSeverity,
            options: SEVERITY_ORDER.map((v) => [v, t(`risk.${v}`)])
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.addRowGrow, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, { label: t("risk.note"), value: riskNote, onChange: setRiskNote, placeholder: t("risk.notePlaceholder") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_dsh_client_ui_primitives.Button,
          {
            variant: "outline",
            disabled: busy || riskTitle.trim() === "",
            onClick: () => {
              saveProject({ risks: [...risks, { title: riskTitle, severity: riskSeverity, note: riskNote }] });
              setRiskTitle("");
              setRiskSeverity("medium");
              setRiskNote("");
            },
            children: t("risk.addAction")
          }
        )
      ] })
    ] })
  ] });
}
var identityTranslate = (key) => key;
function BoardPage(props) {
  const t = props.t ?? identityTranslate;
  const toast = props.toast;
  const [snapshot, setSnapshot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [view, setView] = useState({ kind: "board" });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmArchive, setConfirmArchive] = useState(false);
  const [importFile, setImportFile] = useState(null);
  const [importParsed, setImportParsed] = useState(null);
  const refresh = useCallback(async () => {
    try {
      const data = await getState();
      setSnapshot(data);
      setError(null);
      return data;
    } catch (e) {
      setError(t("board.loadFailed", { error: e?.message ?? String(e) }));
      return null;
    } finally {
      setLoading(false);
    }
  }, [t]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  const run = useCallback(
    async (path, body, okKey) => {
      setBusy(true);
      try {
        const data = await post(path, body);
        if (!data.ok) {
          setError(data.error);
          if (toast !== void 0) toast.report("toast.failed", "error");
          return false;
        }
        setSnapshot(data);
        setError(null);
        if (toast !== void 0 && okKey !== void 0) toast.report(okKey);
        return true;
      } catch (e) {
        setError(t("error.action", { error: e?.message ?? String(e) }));
        if (toast !== void 0) toast.report("toast.failed", "error");
        return false;
      } finally {
        setBusy(false);
      }
    },
    [t, toast]
  );
  const detailProject = view.kind === "detail" ? snapshot?.projects?.find((p) => p.id === view.id) : void 0;
  const onPatch = useCallback(
    async (action) => {
      if (!action) return false;
      const pid = detailProject?.id;
      if (!pid) return false;
      switch (action.kind) {
        case "task":
          return run(API.task, { projectId: pid, task: action.task }, "toast.taskSaved");
        case "taskDelete":
          return run(API.taskDelete, { projectId: pid, taskId: action.taskId }, "toast.taskDeleted");
        case "milestone":
          return run(API.milestone, { projectId: pid, milestone: action.milestone }, "toast.milestoneSaved");
        case "milestoneDelete":
          return run(
            API.milestoneDelete,
            { projectId: pid, milestoneId: action.milestoneId },
            "toast.milestoneDeleted"
          );
        default:
          return false;
      }
    },
    [detailProject?.id, run]
  );
  const onSaveProject = useCallback(
    async (project) => {
      const ok = await run(API.project, { project }, "toast.saved");
      if (ok) setView({ kind: "detail", id: project.id });
      return ok;
    },
    [run]
  );
  const onArchiveConfirm = useCallback(async () => {
    if (!detailProject) return;
    const ok = await onSaveProject({ ...detailProject, status: "archived" });
    if (ok) setConfirmArchive(false);
  }, [detailProject, onSaveProject]);
  const onRestore = useCallback(async () => {
    if (!detailProject) return;
    await onSaveProject({ ...detailProject, status: "planning" });
  }, [detailProject, onSaveProject]);
  const onReorder = useCallback(
    async (ids) => {
      await run(API.projectReorder, { ids });
    },
    [run]
  );
  const onExport = useCallback(() => {
    if (typeof window !== "undefined") window.location.href = API.export;
    if (toast !== void 0) toast.report("toast.exported");
  }, [toast]);
  const onImportFile = useCallback(
    (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result ?? ""));
          setImportParsed(parsed);
          setImportFile(file);
        } catch {
          setError(t("data.importFailed", { error: "JSON \u89E3\u6790\u5931\u8D25" }));
        }
      };
      reader.onerror = () => setError(t("data.importFailed", { error: "\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25" }));
      reader.readAsText(file);
    },
    [t]
  );
  const onImportConfirm = useCallback(async () => {
    if (!importParsed) return;
    const ok = await run(API.import, { state: importParsed }, "toast.imported");
    if (ok) {
      setImportFile(null);
      setImportParsed(null);
    }
  }, [importParsed, run]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: Dbd_default.page, "aria-label": t("panel"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.scroll, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.content, children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.heading, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: Dbd_default.headingSub, children: t("board.loading") }) }) : error && snapshot === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: Dbd_default.heading, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Dbd_default.headingMain, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, { children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: refresh, children: t("board.retry") }) })
    ] }) }) : view.kind === "detail" && detailProject === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      EmptyState,
      {
        glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconFlatListOutlineRegular, { size: 28 }),
        title: t("empty.filterTitle"),
        body: t("empty.filterText"),
        action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", onClick: () => setView({ kind: "board" }), children: t("detail.back") })
      }
    ) : view.kind === "detail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      DetailView,
      {
        project: detailProject,
        busy,
        error,
        t,
        onBack: () => setView({ kind: "board" }),
        onAskDelete: () => setConfirmDelete(true),
        onPatch,
        onSave: onSaveProject,
        onAskArchive: () => setConfirmArchive(true),
        onRestore
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      BoardView,
      {
        snapshot,
        t,
        onOpen: (id) => setView({ kind: "detail", id }),
        onNew: () => {
          setCreateError(null);
          setCreating(true);
        },
        onReorder,
        onExport,
        onImportFile
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      NewProjectModal,
      {
        open: creating,
        busy,
        error: createError,
        t,
        onClose: () => setCreating(false),
        onCreate: async (draft) => {
          if (!draft.name.trim()) {
            setCreateError(t("error.nameRequired"));
            return;
          }
          if (await run(API.project, { project: draft }, "toast.created")) setCreating(false);
          else setCreateError(error);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      DeleteProjectModal,
      {
        open: confirmDelete,
        project: detailProject,
        busy,
        t,
        onCancel: () => setConfirmDelete(false),
        onConfirm: async () => {
          if (detailProject && await run(API.projectDelete, { id: detailProject.id }, "toast.deleted")) {
            setConfirmDelete(false);
            setView({ kind: "board" });
          }
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ArchiveModal,
      {
        open: confirmArchive,
        project: detailProject,
        busy,
        t,
        onCancel: () => setConfirmArchive(false),
        onConfirm: onArchiveConfirm
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ImportModal,
      {
        open: importFile !== null,
        busy,
        file: importFile,
        t,
        onCancel: () => {
          setImportFile(null);
          setImportParsed(null);
        },
        onConfirm: onImportConfirm
      }
    )
  ] });
}
function PanelIcon({ size }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconProjectAddOutlineRegular, { size: size ?? 16 });
}
function createToastSource() {
  let state = null;
  let seq = 0;
  const listeners = /* @__PURE__ */ new Set();
  const publish = (next) => {
    state = next;
    for (const listener of listeners) listener();
  };
  return {
    hooks: {
      toast: {
        getSnapshot: () => state,
        subscribe(listener) {
          listeners.add(listener);
          return () => {
            listeners.delete(listener);
          };
        }
      }
    },
    report(kind, tone = "success") {
      publish({ kind, tone, seq: ++seq });
    },
    dismiss() {
      publish(null);
    }
  };
}
function BoardToast({ useToast, dismiss, t }) {
  const toast = useToast((current) => current);
  if (toast === null) return null;
  const failed = toast.tone === "error";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dsh_client_ui_primitives.Toast,
    {
      text: t(toast.kind),
      tone: failed ? void 0 : "success",
      icon: failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconWarningOutlineRegular, { size: 16 }) : void 0,
      holdMs: failed ? 6e3 : void 0,
      onDone: dismiss
    },
    `dbd-toast-${String(toast.seq)}`
  );
}
var inject = ["slots", "locale"];
function apply(ctx) {
  const locale = ctx.locale ?? ctx.get("locale");
  if (locale !== void 0) {
    ctx.effect(() => locale.register(NS, { zh, en }), "delivery-board: dictionaries");
  }
  const toast = createToastSource();
  ctx.slots.inject(
    "shell.overlay",
    () => ctx.slots.register(
      {
        name: "shell.overlay",
        id: `${PANEL_ID}-toast`,
        locale: NS,
        inject: () => ({ hooks: toast.hooks, dismiss: toast.dismiss })
      },
      BoardToast
    )
  );
  ctx.slots.inject(
    "sidebar.panellist",
    () => ctx.slots.register(
      {
        name: "sidebar.panellist",
        id: PANEL_ID,
        order: 20,
        locale: NS,
        // label 必须是 thunk：侧栏每次投影时重新读取，切语言即跟随
        label: () => locale !== void 0 ? locale.bind(NS)("panel") : "panel"
      },
      PanelIcon
    )
  );
  ctx.slots.inject(
    "main",
    () => ctx.slots.register(
      {
        name: "main",
        key: PANEL_ID,
        locale: NS,
        // t 由 locale 席位注入；这里只补自己的东西
        inject: () => ({ toast })
      },
      BoardPage
    )
  );
}

    return module.exports;
  }
});
