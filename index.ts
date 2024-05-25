/**
 * This module contains functions to format date
 * @module
 *
 * @example
 * ```
 * import { oneTrueDate } from "@nss/one-true-date"
 *
 * console.log(oneTrueDate(new Date()))
 * ```
 */

import { format } from "date-fns";
/** only correct way to format date
 */
export function oneTrueDate(d: Date): string {
  return format(d, "yyyy-MM-dd");
}
