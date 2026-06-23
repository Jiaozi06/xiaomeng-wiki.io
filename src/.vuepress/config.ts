import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "初小梦 Wiki",
  description: "初小梦机器人使用教程，以及光遇身高查询等指令用法介绍",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
