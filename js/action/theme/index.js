import Types from "../types";

/* 组件内会拿着action去调用reducer */
export default function onThemeChange (theme) {
  return { type: Types.THEME_CHANGE, theme: theme }
}