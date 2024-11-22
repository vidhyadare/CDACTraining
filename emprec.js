
//Enitity Class
class Employee {
    constructor(id, name, address, salary) {
        this.empId = id
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary
    }
}


class EmpRepo{
    empList = [] //Its a array of size 0

    constructor() {
        if(window.localStorage.getItem("values") == undefined){
            this.empList = [
                new Employee(111, "Phaniraj", "Bangalore", 56000),
                new Employee(112, "Ramanth", "Gorakhpur", 56000),
                new Employee(113, "Vinod", "Shimoga", 56000),
                new Employee(114, "Banu", "Mysore", 56000)
            ]
            window.localStorage.setItem("values", JSON.stringify(this.empList))
        }else{
            this.empList = JSON.parse(window.localStorage.getItem("values"));
        }
    }
    saveRecords(){
        window.localStorage.setItem("values", JSON.stringify(this.empList));
    }
    //addEmployee = (emp) => this.empList.push(emp)
    addEmployee = (emp) => {
        this.empList = [...this.empList, emp]
        this.saveRecords();
    }
    
    getAll = () => [...this.empList];

    /*getById(id){
        for(emp of this.empList){
            if(emp.empId == id)
                return emp;
        }
    }*/

    getById = (id) => this.empList.find((emp) => emp.empId == id);

    updateEmp = (emp) =>{
        debugger;
        //use splice method...
        const index = this.empList.findIndex((e) => e.empId == emp.empId);
        if(index < 0){
           
            return false;
        }
        this.empList.splice(index, 1, emp);
        this.saveRecords();
        return true
    }

    deleteEmp = (id) =>{
        const index = this.empList.findIndex(e => e.empId == id);
        this.empList.splice(index, 1);
        this.saveRecords();
    }
}
