import { DateFormat } from "./DateFormat";
import { format } from "date-fns";

export function formatDateLong(dateVal: string) {
  return format(new Date(dateVal), DateFormat.LONG);
}
export function formatDateLongCompact(dateVal: string) {
  return format(new Date(dateVal), DateFormat.MEDIUM);
}

export function getYear(dateVal: string) {
  const date = new Date(dateVal);
  return date.getFullYear();
}
