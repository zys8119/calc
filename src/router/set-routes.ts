/**
 * 是否已经加载好路由了
 */
export const status = {
  registerRouteFresh: true,
};

export const setRoutes = async (filter = true) => {
  if (filter) {
    // ....
  }
  status.registerRouteFresh = false;
};
