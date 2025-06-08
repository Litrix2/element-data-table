export type Override<
  T extends object,
  R extends Partial<T> | {} = {},
  O extends keyof T = never,
> = Omit<T, keyof R | O> & R;
export type Func<R = void, P extends unknown[] = []> = (...args: P) => R;
export type MaybeArray<T, R extends boolean = false> = T | (R extends false ? T[] : readonly T[]);
export type OmitFrom<T, K extends keyof T> = Omit<T, K>;
export type Slot<P> = (props: P) => unknown;
export type EmptySlot = () => unknown;
