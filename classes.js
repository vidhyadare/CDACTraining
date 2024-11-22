//3yntax for creating classes and objects. 
//old syntax called singleton objects where we can create objects on the fly without any class declarations. 
const customer = {}
customer.name = "test name"


const emp = {
    empId : 123, empName  : "Phaniraj", empAddress : "Bangalore", empSalary : 54000
}
emp.gender = "Male" //This shall add a new property, if the property is already set, it shall change its value. 

const emp2 = emp;

emp2.empAddress = "Hyderabad"


console.log(emp);
console.log(`The name is ${emp.empName} from ${emp.empAddress} earning a salary of Rs. ${emp.empSalary}`);
console.log(`The data type is ${typeof(emp)}`);

console.log("Iterating thru all the attributes of the object");
for(property in emp){
    console.log(`Propertyname: ${property}, Value: ${emp[property]}`);
}

////Old way of creating classes which look like functions...\
const empRecord = function(id, name, address, salary){
    this.empId = id;
    this.empName = name;
    this.empSalary = salary;
    this.empAddress = address

    this.getAllInfo= function(){
        return `Name: ${this.empName}, Address: ${this.empAddress}, Salary: ${this.empSalary}`
    }
}

// const id = parseInt(prompt("Enter the Id"))
// const name = prompt("Enter the Name")
// const address = prompt("Enter the Address")
// const salary = parseInt(prompt("Enter the Salary"))
// const e1 = new empRecord(id, name, address, salary)
const empList = [];
for (let index = 0; index < 2; index++) {
    const id = parseInt(prompt("Enter the Id"))
    const name = prompt("Enter the Name")
    const address = prompt("Enter the Address")
    const salary = parseInt(prompt("Enter the Salary"))
    const e1 = new empRecord(id, name, address, salary)
    empList.push(e1)   //adds the element to the list.  
}

console.log("Now read all of them............");
for (rec of empList)
    console.log(rec.getAllInfo());