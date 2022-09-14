export const isEmailValid = (input) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input)
}

export const hasOneDigit = (input) => {
  return /\d/.test(input)
}

export const hasOneLetter = (input) => {
  return /[a-zA-Z]/.test(input)
}

export const isLongEnough = (input, inputLength) => {
  return input.length >= inputLength
}

export const isUserOlderThan = (birthDate, minAge) => {
  const dateOfBirth = new Date(birthDate);
  const monthDifference = Date.now() - dateOfBirth.getTime();
  const ageInDateFormat = new Date(monthDifference);
  const year = ageInDateFormat.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age >= minAge
}
