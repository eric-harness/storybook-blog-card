import { format } from "date-fns"

export const dateFormatToString = (date) => {
  return format(new Date(date), `MMM dd, yyyy`)
}