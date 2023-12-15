import config from "@/config/config";
import baseConfig from "@/config/base";

const useStore = defineStore("main", {
  state: () => {
    return {
      userInfo: {
        token: "",
      } as Partial<LoginUserInfo>,
      requests: new Set() as Set<Promise<any>>,
    };
  },
  getters: {
    token({ userInfo }) {
      return userInfo.token;
    },
    loading(state) {
      return state.requests.size > 0;
    },
  },
  actions: {
    setToken(token = "") {
      const storage = config.router.session ? sessionStorage : localStorage;
      return new Promise<void>((resolve) => {
        this.userInfo.token = token;
        storage.setItem(baseConfig.unique + "token", token);
        resolve();
      });
    },
    setUserinfo(userInfo: Partial<LoginUserInfo>) {
      const storage = config.router.session ? sessionStorage : localStorage;
      if (!userInfo) {
        this.userInfo = {};
        storage.removeItem(baseConfig.unique + "userInfo");
      } else {
        this.userInfo = userInfo;
        storage.setItem(
          baseConfig.unique + "userInfo",
          JSON.stringify(userInfo),
        );
      }
    },
  },
});

export default useStore;

export interface LoginUserInfo {
  avatar: {
    url: string;
  };
  createdAt: number;
  email: string;
  id: string;
  mobile: string;
  nickname: string;
  status: number;
  defaultTenantID: string;
  updatedAt: number;
  username: string;
  token: string;
}
