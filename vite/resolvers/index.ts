import { Resolver } from "unplugin-auto-import/types";

export const requestResolvers: Resolver = function (name: string) {
  if (
    [
      "$http",
      "request",
      "requestAll",
      "transParams",
      "RequestPromise",
      "cancelAll",
      "download",
      "dataURIToBlob",
    ].includes(name)
  ) {
    return {
      name,
      from: "wp-request",
    };
  }
};
export const lodashResolvers: Resolver = function (name: string) {
  if (/^l_.+/.test(name)) {
    return {
      name: name.replace(/^l_/, ""),
      as: name,
      from: "lodash",
    };
  }
};
export default function () {
  return [requestResolvers, lodashResolvers];
}
