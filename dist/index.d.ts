declare function decodeCNP(cnp: number): {
  gender: "Male" | "Female",
  birthDate: Date,
  age: number,
  county: string,
  isResident: string
}