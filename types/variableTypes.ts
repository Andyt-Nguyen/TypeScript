export {};

//** ~ tsc variableTypes.ts */

/*
 * Declaring types
 * Boolean
 * String
 * Number
*/

//** Any
let myVar: any = 5;
myVar = '2abc';
myVar = true;
myVar = ['Hello bingo bango', 5, false];

//** String
const str: string = 'I am a string';

//** Boolean
const flag: boolean = true;

//** Number
const floatingNumber: number = 3.4;

//**  Number
const number: number = 3;

//**  Null
const nl: null = null;

//**  Undefined
const und: undefined = undefined;

//**  Array of numbers
const list: number[] = [1,2,3];
const list2: Array<number> = [1,2,3];

/* 
 * Tuples
 * have to go in a specific order depending on how it is first created 
 * and has a fixed length
*/
const tuple: [string, number] = ['Hello', 5];

//** Enumerations
enum Status {Success, Waiting, Failure};
const status: Status = Status.Waiting;


//** Union of types
let unionType: number | boolean;
unionType = 1;
unionType = true;
