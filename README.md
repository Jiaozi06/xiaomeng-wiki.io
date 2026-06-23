# 初小梦 Wiki

初小梦机器人使用文档，基于 [VuePress 2](https://vuepress.vuejs.org/) + [vuepress-theme-hope](https://theme-hope.vuejs.press/) 构建。

## 本地开发

```bash
pnpm install      # 安装依赖
pnpm docs:dev     # 本地预览（默认 http://localhost:8080）
pnpm docs:build   # 构建静态站点，产物在 src/.vuepress/dist
```

## 部署

把 `src/.vuepress/dist` 目录里的内容上传到任意静态托管即可（Vercel / Netlify / GitHub Pages / 自己的服务器 nginx 都行）。

## 需要你自己填的地方

全局搜索 `TODO` 或 `你的`，把下面这些换成你自己的信息：
- `src/.vuepress/theme.ts`：作者联系方式、GitHub 仓库、页脚备案号、Waline 评论服务端
- `src/.vuepress/navbar.ts`：免费查身高网站链接
- `src/friends/README.md`：友情链接里的自有服务
- `src/height/more/README.md`：发卡购买链接、查身高群链接
- `src/awesome.md`：公屏广播申请表单链接
