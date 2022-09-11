export const getBirthYear: (cnp: string) => number | undefined = (cnp) => {
  switch (cnp.split('')[0]) {
    case '3':
    case '4':
      return parseInt(`18${cnp.split('')[1]}${cnp.split('')[2]}`)
    case '1':
    case '2':
      return parseInt(`19${cnp.split('')[1]}${cnp.split('')[2]}`)
    case '5':
    case '6':
      return parseInt(`20${cnp.split('')[1]}${cnp.split('')[2]}`)
  }
}