// class Industry {
//     constructor(id, name) {
//         this.Name = name;
//         this.Id = id;
//     }

//     get Name() {
//         return this._Name;
//     }

//     set Name(value) {
//         this._Name = value;
//     }

//     get Id() {
//         return this._Id;
//     }

//     set Id(value) {
//         this._Id = value;
//     }

//     summary() {
//         return `Name : ${this.name},Date of join : ${this.dtjoin},Departent : ${this.department}`;
//     }
// }

// class Worker {
//     constructor(id, name, dtjoin, department) {
//         this.Id = id;
//         this.Name = name;
//         this.Datejoin = dtjoin;
//         this.Department = department;
//     }
// }

// class DataHandler {
//     constructor() {
//         const Department = ["MAD", "WAD", "Devops"];

//         let worcounter = 0;
//         this._Worker = [
//             new Worker(++worcounter, "Ali", "21-05-2021", Department[1]),
//             new Worker(++worcounter, "Atif", "22-08-2021", Department[0]),
//             new Worker(++worcounter, "Aizaz", "04-09-2021", Department[2]),
//         ];
//     }

//     Getemployee() {
//         let EmpArray = [...this._Worker];
//         return this._Worker;
//     }

// }

    // Getdepartment() {
    //     let tempArray = [...this._Industry];
    //     return this._Industry;
    // }

    // Adddepartment(industry) {
    //     this._Industry.push(industry);
    // }

    

    // Addemployee(employee) {
    //     this._Worker.push(employee);
    // }
// }

//  let a ="Muhammad";
//  let b  ="Ali";
// myfun();
//   function myfun(){
//     let i = "ishu";
//     if(i == "ishu"){
//         document.write(`${i} ${b}`)
//     }
//   }

//   function  print_current_page()
//   {
//     window.print();
//   }

// function current_date(){
//     let date = [1,2,3,4,5,6,7,8,9,9]
// }

/*function leapyear(l){
    
    return(l%100 === 0 ? l%4 === 0 : l%400 === 0 )
}
        document.write(leapyear(2000));
        document.write(leapyear(2030));
        document.write(leapyear(2010));*/

   function input(){
    var c = document.querySelector("input").value;
    if(c === 0,1,2,3,4,5,6,7,8,9,10){
        document.write("Good work");
    }
    else{
        document.write("Not Matched");
    }
   } 
