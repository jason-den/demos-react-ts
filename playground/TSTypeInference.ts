/*
 * https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */

const stringAndUndefinedArr: (string | undefined)[] = ['hello', undefined, 'world', undefined]
const stupidStringArr = stringAndUndefinedArr.filter((e) => e !== undefined)
// stupidStringArr is (string | undefined)[]
const stringArr = stringAndUndefinedArr.filter((e): e is string => e !== undefined)
// stringArr is string[]

export const TypeInferenceDemos = {
  stringAndUndefinedArr
}
