import { createDiscreteApi, DialogReactive } from "naive-ui";
import dialogAlertTitle from "./dialogAlertTitle.vue";
import App from "@pwd/App.vue";

const { dialog, app } = createDiscreteApi(["dialog"]);
let isUseInitGlobalProperties = false;
const useInitGlobalProperties = () => {
  try {
    if (!isUseInitGlobalProperties) {
      const appRoot: any = document.getElementById("app");
      const globalProperties: Record<any, any> =
        appRoot.__vue_app__.config.globalProperties;
      const globalPropertiesEntries: Array<[string, any]> =
        Object.entries(globalProperties);
      for (const [k, v] of globalPropertiesEntries) {
        app.config.globalProperties[k] = v;
      }
      try {
        for (const [k, v] of Object.entries(
          appRoot.__vue_app__._context.components,
        )) {
          app.component(k, v as any);
        }
      } catch (e) {
        // err
      }
      isUseInitGlobalProperties = true;
    }
  } catch (e) {
    // err
  }
};
type DialogConfigType = {
  content: any;
  title: any;
  props?: Record<string, any>;
  width?: string | undefined;
  onClose?(): void;
};
const dialogCaches: Array<DialogReactive> = [];
interface DialogDefault {
  (config: DialogConfigType): DialogReactive;

  close(): void;

  closeAll(): void;
}
const dialogDefault: DialogDefault = (
  config: DialogConfigType = {} as DialogConfigType,
) => {
  useInitGlobalProperties();
  const dialogApp = dialog.create({
    title: config.title
      ? () =>
          h(dialogAlertTitle, {
            title: config.title,
          })
      : undefined,
    class: "alert-dialog-custom-theme",
    style: `width:${config.width || "70%"}`,
    showIcon: false,
    content: () =>
      typeof config.content === "object"
        ? h(App, () => [
            h(
              defineAsyncComponent({
                loader: () => config.content,
              }),
              config.props,
            ),
          ])
        : config.content,
    onClose: () => config.onClose?.(),
  } as any);
  dialogCaches.push(dialogApp);
  return dialogApp;
};
dialogDefault.close = () => {
  const dialogPop = dialogCaches.pop();
  setTimeout(() => {
    dialogPop?.destroy();
  }, 100);
};
dialogDefault.closeAll = () => {
  while (dialogCaches.length > 0) {
    dialogDefault.close();
  }
};
export default dialogDefault;
