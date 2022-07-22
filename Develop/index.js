const inquirer = requirer("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const generateHTML = require("./src/generateHTML")
const employeeArray = []
const managerQuestions = [
    {
        type: "inupt",
        message: "What is the Manager's name?",
        name: "managerName"
    },
    {
        type: "inupt",
        message: "What is the Manager's id",
        name: "managerId"
    },
    {
        type: "inupt",
        message: "What is the Manager's email",
        name: "managerEmail"
    },

    {
        type: "inupt",
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber"
    },

]

const engineerQuestions = [
    {
        type: "inupt",
        message: "What is the Engineer's name?",
        name: "engineerName"
    },
    {
        type: "inupt",
        message: "What is the Engineer id",
        name: "engineerId"
    },
    {
        type: "inupt",
        message: "What is the Engineer email",
        name: "engineerEmail"
    },

    {
        type: "inupt",
        message: "What is the Engineer github?",
        name: "engineerGithub"
    },

]
const internQuestions = [
    {
        type: "inupt",
        message: "What is the Intern's name?",
        name: "internName"
    },
    {
        type: "inupt",
        message: "What is the Intern's id",
        name: "internId"
    },
    {
        type: "inupt",
        message: "What is the Intern's email",
        name: "internEmail"
    },

    {
        type: "inupt",
        message: "What is the Intern's github?",
        name: "internGithub"
    },
]

function init() {
    inquirer.prompt(managerQuestions)
        .then(respsonse => {
            const manager = new Manager(respsonse.managerName)
            response.managerId,
            respsonse.managerEmail,
            response.managerOfficeNumber
        
            employeeArray.push(manager)
            confirmNext()
        })
}

function confirmNext(){
    inquirer.prompt([{
        type:"confirm",
        message:"Add more employees?",
        name:"addMore"
    }])
}

    then(response =>{
        if(addMore===true){
            addEmployee()
        }

    else{
        createHTML() 
    }
    })


function addEmployee(){
    inquirer.prompt([{
        type:"list",
        message:"Do you want to add Engineer or Intern",
        choices:["Engineer","Intern"],
        name:"selection"
    }])
    .then(response =>{
        if(response.selection==="Engineer"){
            addEngineer()
        }
        else{
            addIntern()
        }
    })
}
function addEngineer(){
 inquirer.prompt(engineerQuestions)
 .then(response=>{

 })
}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then(response=>{
   
    })

}
function createHTML(){
console.log(employeeArray)
}
init()