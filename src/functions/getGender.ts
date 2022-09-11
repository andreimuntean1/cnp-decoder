export const getGender: (cnp: string) => string | undefined = cnp => {
  switch (cnp.split('')[0]) {
    case '1':
    case '3':
    case '5':
    case '7':
      return 'Male'
    case '2':
    case '4':
    case '6':
    case '8':
      return 'Female'
  }
}