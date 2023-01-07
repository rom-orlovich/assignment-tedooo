export const uniqueObjArr = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
) => [...new Map(arr.map((item) => [item[key], item])).values()];
