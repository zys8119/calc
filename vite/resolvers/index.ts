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
export default function () {
  return [requestResolvers];
}
