export default {
  aa(data: any) {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: {
            list: new Array(10).fill(0).map((_, id) => ({
              id,
              name: "asdas",
              title: "asdas",
            })),
            total: 1000,
          },
          messages: "success",
        });
      });
    });
  },
};
