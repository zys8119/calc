const useStore = defineStore("nav", {
  state: () => {
    return {
      menusActive: 0,
      menusActiveInfo: {},
      munes: [
        {
          filename: "./src/views/pages/home",
          icon: "home",
          title: "首页",
        },
        {
          filename: "./src/views/pages/client-server",
          icon: "kehu",
          title: "客户",
          children: [
            {
              filename:
                "./src/views/pages/client-server/customer-high-seas/Index.vue",
              icon: "khgl",
              title: "客户公海",
            },
            {
              filename:
                "./src/views/pages/client-server/intended-customer/Index.vue",
              icon: "aixin",
              title: "意向客户",
            },
            {
              filename:
                "./src/views/pages/client-server/contract-customer/Index.vue",
              icon: "qianyue",
              title: "签约客户",
            },
          ],
        },
        {
          filename: "./src/views/pages/home",
          icon: "gwb",
          title: "销售",
        },
        {
          filename: "./src/views/pages/home",
          icon: "diannao",
          title: "工作",
        },
      ],
    };
  },
  getters: {},
  actions: {
    setMenusActive(key: number) {
      this.menusActive = key;
    },
    setMenusActiveInfo(info: any) {
      this.menusActiveInfo = info;
    },
  },
});

export default useStore;
