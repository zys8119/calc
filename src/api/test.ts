export default {
  test(data: any) {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: {
            list: new Array(Math.floor(Math.random() * 10))
              .fill(0)
              .map((_, id) => ({
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
