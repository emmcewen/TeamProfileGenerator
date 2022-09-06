const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const generateHTML = require("./src/generateHTML")
const employeeArray = []
const managerQuestions = [
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Manager's id",
        name: "managerId"
    },
    {
        type: "input",
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
        type: "input",
        message: "What is the Engineer email",
        name: "engineerEmail"
    },

    {
        type: "input",
        message: "What is the Engineer github?",
        name: "engineerGithub"
    },

]
const internQuestions = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the Intern's id",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the Intern's email",
        name: "internEmail"
    },

    {
        type: "input",
        message: "What is the Intern's school?",
        name: "internSchool"
    },
]

function init() {
    inquirer.prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber
            )
            employeeArray.push(manager)
            confirmNext()
        })
}

function confirmNext() {
    inquirer.prompt([{
        type: "confirm",
        message: "Add more employees?",
        name: "addMore"
    }])


        .then(response => {
            if (response.addMore === true) {
                addEmployee()
            }

            else {
                createHTML()
            }
        })
}

function addEmployee() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to add Engineer or Intern",
        choices: ["Engineer", "Intern"],
        name: "selection"
    }])

        .then(response => {
            if (response.selection === "Engineer") {
                addEngineer()
            }
            else {
                addIntern()
            }
        })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        employeeArray.push(engineer)
        confirmNext()
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
            employeeArray.push(Intern)
            confirmNext()
        })

}
function finishBuild() {
    fs.writeFileSync (
        path.join (path.resolve (__dirname,"dist"),"index.html"),
        generateHTML(employeeArray),
    )
    console.log("Team Profile Generated")
}
init()