const useStore = defineStore("main", {
  state: () => {
    return {
      userInfo: {
        token: "asda",
      },
      requests: new Set() as Set<Promise<any>>,
    };
  },
  getters: {
    token({ userInfo }) {
      return userInfo.token;
    },
  },
  actions: {},
});

export default useStore;
