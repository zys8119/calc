const useStore = defineStore("nav", {
  state: () => {
    return {
      menusActive: 0,
      menusActiveInfo: {},
      munes: [
        {
          filename: "./src/views/pages/home",
          icon: "./images/nav-icon2.png",
          title: "首页",
        },
        {
          filename: "./src/views/pages/client-server",
          icon: "./images/nav-icon2.png",
          title: "客户",
          children: [
            {
              filename:
                "./src/views/pages/client-server/contract-customer/Index.vue",
              icon: "./images/nav-icon3.png",
              title: "签约客户",
            },
            {
              filename:
                "./src/views/pages/client-server/customer-high-seas/Index.vue",
              icon: "./images/nav-icon2.png",
              title: "客户公海",
            },
            {
              filename:
                "./src/views/pages/client-server/intended-customer/Index.vue",
              icon: "./images/nav-icon2.png",
              title: "意向客户",
            },
          ],
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
