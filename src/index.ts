import { checkIfResident, getBirthDate, getGender } from "./functions"
import { getAge } from "./functions/getAge"
import { getCounty } from "./functions/getCounty"
import { validateCNP } from "./functions/utils"

export function decodeCNP(input: number) {
  const cnp = input.toString()
  const cnpIsValid = validateCNP(cnp)

  if (!cnpIsValid) {
    throw new Error('Provided CNP is not valid')
    return
  }

  const gender = getGender(cnp)
  const birthDate = getBirthDate(cnp)
  const age = getAge(cnp)
  const county = getCounty(cnp)
  const isResident = checkIfResident(cnp)

  return {
    gender,
    birthDate,
    age,
    county,
    isResident
  }
}