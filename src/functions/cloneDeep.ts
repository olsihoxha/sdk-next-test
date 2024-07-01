export function cloneDeep<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    const cloneArray = value.map((item) => cloneDeep(item));
    return cloneArray as unknown as T;
  }

  const clone: Partial<T> = {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = cloneDeep(value[key]);
    }
  }

  return clone as T;
}
