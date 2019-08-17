//** ~ tsc interfaceTypes */

function fullName(person: { firstName: string, lastName: string }): void {
  console.log(person.firstName, person.lastName);
}

const person = {
  firstName: 'Wayne',
  lastName: 'Gaycee'
}

fullName(person);

interface Person {
  firstName: string,
  lastName: string
}

function fullNameInterface(person: Person): void {
  console.log(person.firstName, person.lastName);
}

fullNameInterface(person);