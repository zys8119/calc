export default async function (options: {
  content: any;
  width?: any;
  title?: any;
}) {
  return new Promise<void>((resolve) => {
    $alert.dialog({
      title: options.title || "温馨提示",
      content: import("@/components/confirm.vue"),
      width: options.width || "400px",
      props: {
        content: options.content,
        onSave() {
          resolve();
        },
      },
    });
  });
}
