export default {
  test() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: {
            list: new Array(8).fill(0).map((_, id) => ({
              id,
              name: "asdas",
              title: "asdas",
            })),
            total: 100,
          },
          messages: "success",
        });
      });
    });
  },
};
