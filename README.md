# CNP Decoder

A tiny and simple library that can decode a romanian CNP, extracting informations like the gender, age, the county where the user was born.


## Installation

```bash
  npm install cnp-decoder
```
    
## Usage

```js
    import { decodeCNP } from 'cnp-decoder'

    const cnpData = decodeCNP(cnp)
    // or you can destructure the values
    const { gender, birthDate, age, county, isResident } = decodeCNP(cnp)
```

### Result

| Property      | Type          | Description |
| ------------- | ------------- | ----------- |
| gender  | string  | It returns the gender of the CNP holder |
| birthDate  | Date  | It returns a Javascript date containing the date the holder was born |
| age | number | It returns the age of the holder as a number |
| county | string | It returns the county the holder lives in |
| isResident | boolean | It returns true\false depending if the user is a immigrant in Romania or not
