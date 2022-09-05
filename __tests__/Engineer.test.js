const Engineer =require("../lib/Employee")

describe("Engineer",() =>{
    describe("test Engineer's properties",()=>{
        it ("test all properties", () => {
            const engineer=new Engineer("Emily",1,"emmcewen@gmail.com")
        expect(engineer.name).toEqual("Emily")
        expect(engineer.id).toEqual(1)
        expect(engineer.email).toEqual("emmcewen@gmail.com")
        })
    })

   

    describe("test Engineer methods", ()=>{})
    it ("test all methods", () => {
        const engineer=new Engineer("Alex",2,"alexanderdflint@gmail.com")
        expect(engineer.getName()).toEqual("Alex")
        expect(engineer.getId()).toEqual(2)
        expect(engineer.getEmail()).toEqual("alexanderdflint@gmail.com")
        expect(engineer.getGithub()).toEqual("https://github.com/emmcewen")
        expect(engineer.getRole()).toEqual("Engineer")
    })
})

