import { getBirthYear } from "./getBirthYear"

export const getBirthDay: (cnp: string) => number | undefined = cnp => {
  const year = getBirthYear(cnp)!
  const date = new Date(year, parseInt(cnp.slice(3, 5)), parseInt(cnp.slice(5, 7)))
  return date.getDay()
}