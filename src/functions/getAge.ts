import { getBirthDate } from "./getBirthDate"

export const getAge: (cnp: string) => number | undefined = cnp => {
  const birthDate = getBirthDate(cnp)!
  const difference = Date.now() - birthDate.getTime()
  const date = new Date(difference)

  return Math.abs(date.getUTCFullYear() - 1970)
}