/**
 * Deletes specified properties from an object and returns a new object without those properties.
 *
 * @template T - The type of the object.
 * @template K - The keys of the object to be deleted.
 * @param {T} object - The original object from which properties will be deleted.
 * @param {K[]} array - An array of keys representing the properties to be deleted from the object.
 * @returns {Omit<T, K>} A new object with the specified properties removed.
 */
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
