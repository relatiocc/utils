/**
 * Represents the available color options.
 *
 * The `ColorOptions` type includes a set of predefined color names that can be used
 * throughout the application.
 */
export type ColorOptions =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink";

/**
 * Returns a color class based on the first letter of the given username.
 * The color is selected from a predefined list of color classes.
 *
 * @param username - The username to derive the color from.
 * @param colors - An optional array of color classes to choose from. Defaults to a predefined list of Tailwind CSS color classes.
 * @returns A string representing the selected color class.
 */
export const getColorFromUsername = (
  username: string,
  colors: string[] = [
    "bg-red-100 dark:bg-red-900",
    "bg-orange-100 dark:bg-orange-900",
    "bg-amber-100 dark:bg-amber-900",
    "bg-yellow-100 dark:bg-yellow-900",
    "bg-lime-100 dark:bg-lime-900",
    "bg-green-100 dark:bg-green-900",
    "bg-emerald-100 dark:bg-emerald-900",
    "bg-teal-100 dark:bg-teal-900",
    "bg-cyan-100 dark:bg-cyan-900",
    "bg-sky-100 dark:bg-sky-900",
    "bg-blue-100 dark:bg-blue-900",
    "bg-indigo-100 dark:bg-indigo-900",
    "bg-violet-100 dark:bg-violet-900",
    "bg-purple-100 dark:bg-purple-900",
    "bg-fuchsia-100 dark:bg-fuchsia-900",
    "bg-pink-100 dark:bg-pink-900",
    "bg-rose-100 dark:bg-rose-900",
  ],
): string => {
  const firstLetter = username.charAt(0).toLowerCase();
  const index = firstLetter.charCodeAt(0) % colors.length;

  return colors[index];
};

/**
 * Extracts the color name from a background color class string.
 *
 * @param input - The background color class string to extract the color from.
 *                 It should follow the format `bg-colorName-number`.
 * @returns The extracted color name if the input matches the expected format, otherwise `null`.
 *
 * @example
 * ```typescript
 * extractColorFromBg('bg-red-500'); // returns 'red'
 * extractColorFromBg('bg-blue-300'); // returns 'blue'
 * extractColorFromBg('text-red-500'); // returns null
 * ```
 */
export const extractColorFromBg = (input: string): string | null => {
  const match = input.match(/^bg-([a-zA-Z]+)-\d+$/);
  if (match) return match[1];

  return null;
};
