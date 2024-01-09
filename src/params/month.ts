// 引数 param が 01 から 12 の文字列であることを評価する
export const match = (param: string) => {
  return /^0[1-9]|1[0-2]$/.test(param);
};
