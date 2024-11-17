/**
 * Generates a random string of the specified length.
 *
 * @param length - The length of the string to generate.
 * @returns A randomly generated string containing uppercase letters, lowercase letters, and digits.
 */
export function generateString(length: number): string {
  const keyLength = length;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}
