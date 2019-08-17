//** tsc functionTypes */

//** Defined parameter number types */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);

//** Optional defined parameter number types  */
function addOptional(num1: number, num2?: number) {
  return num2 ? num1 + num2 : num1;
}

//** Default optional parameter number types */
function addDefault(num1: number, num2: number = 10): number {
  return num1 + num2;
}