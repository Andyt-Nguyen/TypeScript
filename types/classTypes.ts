//** ~ tsc classTypes */

//** Wow just like java and c++ */

class Employee {
  private _employeeName: string;
  private _isSleeping: boolean;

  constructor(name: string) {
    this._employeeName = name;
    this._isSleeping = false;
  }

  public greet():void {
    console.log(`Good morning ${this._employeeName}`)
  }

  public sleep():void {
    if(this._isSleeping) {
      console.log(`${this._employeeName} is now sleeping under the desk`);
    } else {
      console.log(`${this._employeeName} is not sleeping`);
    }

  }

  public set isSleeping(val: boolean) {
    this._isSleeping = val;
  }
}

class Manager extends Employee {
  constructor(name: string) {
    super(name);
  }

  public delegateWork(): void {
    console.log(`Manager delegating tasks`);
  }
}

const employee1: Employee = new Employee('Andrew');
employee1.greet();
employee1.isSleeping = true;
employee1.sleep();

const m1: Manager = new Manager('Brocko');
m1.delegateWork();
m1.greet();
