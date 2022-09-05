const Intern =require("../lib/Employee")

describe("Intern",() =>{
    describe("test Intern's properties",()=>{
        it ("test all properties", () => {
            const intern=new Intern"Emily",1,"emmcewen@gmail.com")
        expect(intern.name).toEqual("Emily")
        expect(intern.id).toEqual(1)
        expect(intern.email).toEqual("emmcewen@gmail.com")
        })
    })

   

    describe("test Employee's methods", ()=>{})
    it ("test all methods", () => {
        const intern=new Intern("Alex",2,"alexanderdflint@gmail.com")
        expect(intern.getName()).toEqual("Alex")
        expect(intern.getId()).toEqual(2)
        expect(intern.getEmail()).toEqual("alexanderdflint@gmail.com")
        expect(intern.getSchool()).toEqual("CSU")
        expect(intern.getRole()).toEqual("Employee")
    })
})


    