import type { MaybeArray } from './types';

export function ensureArray<T>(obj: MaybeArray<T, true>): T[];
export function ensureArray(obj: unknown) {
  return Array.isArray(obj) ? obj : [obj];
}
