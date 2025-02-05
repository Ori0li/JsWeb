import { elements } from "./elements.js";
import { changeLight } from "./func.js";
import { validateLength, validateSpecial } from "./validator.js";

export const handleInputEvent = (e) => {
  const { value } = e.target;
  const isLengthValid = validateLength(value);
  const isSpecialValid = validateSpecial(value);

  const validation = [
    { element: elements.charlength, valid: isLengthValid },
    { element: elements.char, valid: isSpecialValid },
    { element: elements.btn, valid: isLengthValid && isSpecialValid },
  ];
  validation.forEach((v) => changeLight(v.element, v.valid));
};
