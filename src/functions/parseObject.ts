export function parseObject<T>(object: string | any): T {
  try {
    return typeof object === 'string' ? (JSON.parse(object) as T) : object;
  } catch (e) {
    console.error('Error parsing object');
  }
  return null;
}
