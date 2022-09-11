import { getBirthDay, getBirthMonth, getBirthYear } from "./utils"

export const getBirthDate: (cnp: string) => Date | undefined = cnp => {
  const year = getBirthYear(cnp)!
  const month = getBirthMonth(cnp)!
  const day = getBirthDay(cnp)

  return new Date(year, month, day)
}