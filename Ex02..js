//This class shall contain the APIs for the CRUD operations on a data. 

class EmployeeRepo{
    constructor() {
        this.employees = [];//initialized to blank array
        this.nextId = 1; //autogenerating the Ids
    }
getAll=()=>this.employees;
    create(emp){
        if(!emp.name || !emp.salary || !emp.address){
            throw new Error("Invalid Employee data");
        }
        const newObj = { ...emp, id: this.nextId++}
        this.employees.push(newObj);
        return newObj;
    }
    delete(id){
        const index = this.employees.findIndex(e=>e.id==id)

        {
            if(index==-1)
            {
                throw new Error("Employee not found");

            }
            return this.employees.splice(index,1)[0];
        }
    }

    
}
module.exports = EmployeeRepo
//export default EmployeeRepo