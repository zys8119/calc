/*eslint-disable*/
// @ts-ignore
import main_import from "@/store/main";

// @ts-ignore
export function getApi<
  T extends
    | {
        default: any;
      }
    | Record<any, any>,
  V = T extends {
    default: any;
  }
    ? T["default"]
    : T,
>(data: T): V {
  if (Object.keys(data).includes("default")) {
    return data.default;
  } else {
    return data as unknown as V;
  }
}

export const $apiData = {
  main: main_import,
};

export const main = main_import;

export default $apiData;

declare global {
  const $storeAuto: typeof $apiData;
}
