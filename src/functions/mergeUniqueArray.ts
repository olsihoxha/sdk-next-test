// Fastest way to merge 2 arrays together

export function mergeUnique<T>(a: T[], b: T[]): T[] {
  const hash = {};
  const ret = [];

  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    if (!hash[String(e)]) {
      hash[String(e)] = true;
      ret.push(e);
    }
  }

  for (let i = 0; i < b.length; i++) {
    const e = b[i];
    if (!hash[String(e)]) {
      hash[String(e)] = true;
      ret.push(e);
    }
  }

  return ret;
}
