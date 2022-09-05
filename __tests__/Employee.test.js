const Employee =require("../lib/Employee")

describe("Employee",() =>{
    describe("test Employee's properties",()=>{
        it ("test all properties", () => {
            const employee=new Employee("Emily",1,"emmcewen@gmail.com")
        expect(employee.name).toEqual("Emily")
        expect(employee.id).toEqual(1)
        expect(employee.email).toEqual("emmcewen@gmail.com")
        })
    })

   

    describe("test Employee's methods", ()=>{})
    it ("test all methods", () => {
        const employee=new Employee("Alex",2,"alexanderdflint@gmail.com")
        expect(employee.getName()).toEqual("Alex")
        expect(employee.getId()).toEqual(2)
        expect(employee.getEmail()).toEqual("alexanderdflint@gmail.com")
        expect(employee.getRole()).toEqual("Employee")
    })
})


    