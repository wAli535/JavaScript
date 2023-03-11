
class Department{
    constructor(id,name){
        this.Id=id;
        this.Name=name;
    }
    get Name(){
        return this._Name;
    }
    set Name(value){
         this._Name = value;
    }

    get Id(){
        return this._Id;
    }
    set Id(value){
         this._Id = value;
    }

    get summary(){
        return `${this.id},${this.name},${this.cell},${this.department}`
    }
}

class Employee{
    constructor(id,name,cell,department){
        this.Id = id;
        this.Naame =  name;
        this.Cell = cell;
        this.Department=department;
    }
}

class Datahandler{
    constructor(){
        let deatcounter = 0;
        this._Department=[
            new Department (++deatcounter,"Admin"),
            new Department (++deatcounter,"Markiting"),
            new Department (++deatcounter,"Development"),

        ];
        let empcounter=0;
        this._Department=[
            new Employee (++empcounter,"Ali","03136868535",Department[1]),
            new Employee (++empcounter,"Ahmed","03136868535",Department[2]),
            new Employee (++empcounter,"Atif","03136868535",Department[3]),

        ];

    }
    Getdepartment(){
        let tempArray=[...this._Department];

        return this._Department;
    }
    Adddepartment(department){
        this._Department.push(department);
    }

    AddEmployee(Employee){
        this._Employees.push(Employee);
    }
    GetEmployee(){
        let EmployeeArray=[...this._Employees];
        return this._Employees;
    }
}