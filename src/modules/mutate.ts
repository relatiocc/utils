export function deleteProps<T extends object, K extends keyof T>(
  object: T,
  array: K[],
): Omit<T, K> {
  const newObject = { ...object };
  array.forEach((prop) => {
    delete newObject[prop];
  });

  return newObject;
}
