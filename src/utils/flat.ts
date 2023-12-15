export default {
  objectDeep<T>(
    data: T[],
    keyName?: string | ((data: T) => string) | void | null | undefined,
    childKeyName?: string | void | null | undefined,
    returnArray?: boolean,
    isNotFlat?: boolean,
    callback?: (d: any) => any,
  ) {
    const results: any = returnArray ? [] : {};

    function _objectDeep(data: any[]) {
      return data[isNotFlat ? "map" : "forEach"]((e: any) => {
        e = callback?.(e) || e;
        if (returnArray) {
          results.push(e);
        } else {
          const key: string =
            typeof keyName === "function"
              ? keyName(e)
              : l_get(e, keyName || "id");
          results[key] = e;
        }
        const childrenKey = childKeyName || "children";
        const children = l_get(e, childrenKey);
        if (Object.prototype.toString.call(children) === "[object Array]") {
          const newChildren = _objectDeep(children);
          if (isNotFlat) {
            e[childrenKey] = newChildren;
          }
        }
        if (isNotFlat) {
          return e;
        }
      });
    }

    if (isNotFlat) {
      return _objectDeep(data);
    }
    _objectDeep(data);
    return results;
  },
};
