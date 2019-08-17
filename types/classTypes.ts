//** ~ tsc classTypes */

//** Wow just like java and c++ */

class Employee {
  private employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet():void {
    console.log(`Good morning ${this.employeeName}`)
  }
}

let employee1 = new Employee('Andrew');
employee1.greet();



class Manager extends Employee {
  constructor(name: string) {
    super(name);
  }

  delegateWork(): void {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Brocko');
m1.delegateWork();
m1.greet();
