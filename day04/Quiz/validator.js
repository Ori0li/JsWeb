const reg = [..."!@#$%^*_+~"];
const MIN_LENGTH = 6;
const MAX_LENGTH = 20;

export const validateLength = (value) =>
  MIN_LENGTH <= value.length && value.length <= MAX_LENGTH;
export const validateSpecial = (value) => reg.some((v) => value.includes(v));
