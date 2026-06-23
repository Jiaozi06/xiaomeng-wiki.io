import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "机器人",
    icon: "ri:robot-3-line",
    prefix: "/bot/",
    children: [
      {
        text: "机器人基础指令",
        icon: "mynaui:terminal",
        prefix: "basic/",
        children: [""],
      },
      {
        text: "机器人拓展指令",
        icon: "mynaui:terminal-solid",
        prefix: "more/",
        children: [""],
      },
      {
        text: "其他",
        icon: "ri:image-2-line",
        children: [
          {
            text: "公屏使用指南",
            icon: "tabler:speakerphone",
            prefix: "awesome",
            link: "/awesome.html",
          },
          {
            text: "按钮指南",
            icon: "game-icons:button-finger",
            link: "/BUG.html",
          },
        ],
      },
    ],
  },

  {
    text: "光遇相关",
    icon: "arcticons:sky",
    prefix: "/height/",
    children: [
      {
        text: "身高相关",
        icon: "mynaui:user-height",
        children: [
          {
            text: "三服身高查询教程",
            icon: "tabler:book-filled",
            link: "more/",
          },
          {
            text: "免费查身高",
            icon: "pixelarticons:human-height",
            // TODO: 换成你自己的免费查身高网站，没有就删掉这一项
            link: "https://你的查身高网站",
          },
        ],
      },
      {
        text: "其他",
        icon: "ri:image-2-line",
        children: [
          {
            text: "光遇养成价格计算",
            icon: "arcticons:sky",
            link: "/瞎几把算.html",
          },
        ],
      },
    ],
  },

  {
    text: "友情链接",
    icon: "ri:links-line",
    link: "/friends/",
  },
]);
