import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "myBlogger",
  description: "zzydanner's first Blogger",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
});
