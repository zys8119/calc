import { DialogOptions } from "naive-ui/es/dialog/src/DialogProvider";
import { NButton, NSpace } from "naive-ui";

export default async function (option: Partial<DialogOptions>) {
  return new Promise((resolve) => {
    (async () => {
      await $dialog.warning({
        title: "温馨提示",
        ...option,
        content: () =>
          h(
            NSpace,
            {
              vertical: true,
              class: "b b-t-solid b-#d8d8d8 b-1px",
            },
            () => [
              h(
                "div",
                {
                  class: "p-t-30px text-#f00",
                },
                option.content,
              ),
              h(
                NSpace,
                {
                  class: "b b-t-solid b-#d8d8d8 b-1px",
                },
                () => [
                  h(NButton, {}, () => "取消"),
                  h(NButton, {}, () => "确定"),
                ],
              ),
            ],
          ),
      });
    })();
  });
}
