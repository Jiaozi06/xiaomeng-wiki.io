import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "#",

  author: {
    name: "初小梦",
    // TODO: 改成你自己的联系方式（QQ群链接 / 主页等）
    url: "https://qm.qq.com/q/你的QQ群加群链接",
  },

  iconAssets: "iconify",

  logo: "./logo.ico",

  // TODO: 改成你自己的 GitHub 仓库（没有可以删掉这一行）
  repo: "你的GitHub用户名/你的仓库名",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  // TODO: 部署上线并完成 ICP 备案后，把下面备案号换成你自己的；暂时没有备案可整行删除
  footer: "初小梦 Wiki · Powered by VuePress",
  displayFooter: true,

  // 加密配置（示例：给某个页面加访问密码，不需要可整段删除）
  // encrypt: {
  //   config: {
  //     "/某个页面.html": ["密码"],
  //   },
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    sitemap: false,

    // 评论系统（Waline）。需要你自己部署一个 Waline 服务端再填 serverURL，
    // 不需要评论功能就把整个 comment 段删掉。
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://你的waline服务端地址",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
