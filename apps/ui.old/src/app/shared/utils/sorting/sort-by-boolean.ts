export function sortByBoolean<T>(arg: T[], key: string): T[] {
  if (!arg) {
    return arg;
  }
  return arg.sort((a, b) => b[key] - a[key]);
}
