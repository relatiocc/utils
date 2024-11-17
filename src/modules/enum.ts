/**
 * Checks if a given value is a valid value of the specified enum type.
 *
 * @template T - The enum type.
 * @param enumType - The enum type to check against.
 * @param value - The value to check.
 * @returns `true` if the value is a valid value of the enum type, otherwise `false`.
 */
export function isEnumValue<T extends object>(
  enumType: T,
  value: unknown,
): value is T[keyof T] {
  return Object.values(enumType).includes(value);
}
