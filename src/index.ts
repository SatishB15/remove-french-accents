import { accentKeywords } from "./constants/accents";

/**
 * @description Function is used to remove the french accented keywords from the given input string
 * @param input inputString
 * @returns {string}
 */
export const removeFrenchAccents=(input:string):string=> {
  return input
    ?.split('')
    ?.map(char => accentKeywords[char] || char)
    ?.join('');
}