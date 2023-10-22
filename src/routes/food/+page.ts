export const load = ({ params }) => {
  return {
    shops: [
      {
        name: "大鼓涼皮肉夾饃",
        addr: "300新竹市東區光復路二段398號",
        busy: "不如平常繁忙",
        time: "步行 10分鐘",
        likes: "4.9K",

        desc: [],
        comments: [
          {
            img: "/img/1.jpg",
            text: "位於摩斯漢堡跟星巴克附近，人行道比...",
            tags: ["口水雞"],
            rating: "5.0"
          },
          {
            img: "/img/2.jpg",
            text: "我點招牌豬肉肉夾膜，餅皮脆與熱呼呼...",
            tags: ["招牌"],
            rating: "4.0"
          },
          {
            img: "/img/3.png",
            text: "買了招牌豬肉肉夾饃 豆漿 饃皮跟 口...",
            tags: ["豆漿"],
            rating: "5.0"
          },
          {
            img: "/img/4.jpg",
            text: "買了招牌豬肉肉夾饃 豆漿 饃皮跟...",
            tags: ["豆漿"],
            rating: "5.0"
          },
        ],
        services: ['内用', '外帶', '外送'],
        status: '已打烊',
        open: '開始營業時間：周一下午 12:00',
        website: 'https://www.facebook.com/....',
        phone: '09-12345678',
      },

      {
        name: "小木屋鬆餅",
        addr: "300新竹市東區光復路二段101號清大水木餐廳1F",
        busy: "不如平常繁忙",
        time: "步行 30分鐘",
        likes: "419",

        desc: [],
        comments: [
          {
            img: "/img/5.jpg",
            text: "從高雄來新竹受訓三天，慕名而來買小木屋鬆餅，第一次...",
            tags: ["草莓鬆餅"],
            rating: "5.0"
          },
          {
            img: "/img/6.jpg",
            text: "難得喝到不會苦澀又微微回甘的四季春茶！",
            tags: ["四季春茶"],
            rating: "4.0"
          },
          {
            img: "/img/7.jpg",
            text: "在清大餐廳享受現烤鬆餅好吃又便宜，旁邊的成功湖...",
            tags: ["成功湖"],
            rating: "4.0"
          },
          {
            img: "/img/8.jpg",
            text: "鬆餅好吃，外帶沒有立即要吃請店員幫忙吹涼後再裝...",
            tags: ["鬆餅"],
            rating: "5.0"
          },
        ],
        services: ['内用', '外帶', '外送'],
        status: '已打烊',
        open: '開始營業時間：周一下午 12:00',
        website: 'https://www.facebook.com/....',
        phone: '09-12345678',
      }
    ]
  }
};