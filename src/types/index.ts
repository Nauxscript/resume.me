export type PartialSome<T extends Object, K extends keyof T> = {
  [KK in keyof T]: KK extends K ? never : T[KK];
} & {
  [KKK in K]?: KKK extends keyof T ? T[KKK] : never
}