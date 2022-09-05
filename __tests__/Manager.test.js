const Manager =require("../lib/Manager")

describe("Manager",() =>{
    describe("test Manager's properties",()=>{
        it ("test all properties", () => {
            const manager=new Manager("Emily",1,"emmcewen@gmail.com")
        expect(manager.name).toEqual("Emily")
        expect(manager.id).toEqual(1)
        expect(manager.email).toEqual("emmcewen@gmail.com")
        })
    })

   

    describe("test Engineer methods", ()=>{})
    it ("test all methods", () => {
        const manager=new Manager("Alex",2,"alexanderdflint@gmail.com")
        expect(manager.getName()).toEqual("Alex")
        expect(manager.getId()).toEqual(2)
        expect(manager.getEmail()).toEqual("alexanderdflint@gmail.com")
        expect(manager.getRole()).toEqual("Manager")
    })
})

