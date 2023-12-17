export default async function (options: { content: any; width?: any }) {
  return new Promise<void>((resolve) => {
    $alert.dialog({
      title: "温馨提示",
      content: import("@/components/confirm.vue"),
      width: options.width || "500px",
      props: {
        content: options.content,
        onSave() {
          resolve();
        },
      },
    });
  });
}
