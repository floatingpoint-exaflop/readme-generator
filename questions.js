function userQuestions(){
   return [
    {
        type: "input",
        message: "What's your project title?",
        name: 'title'
    },
    {
        type: "input",
        message: "Describe your project in a couple sentences.",
        name: 'description'
    },
    {
        type: "input",
        message: "What special packages or dependencies should users need to install or run this project?",
        name: 'installation'
    },
    {
        type: "input",
        message: "What steps does a user take to actually use this project?",
        name: 'usage'
    },
    {
        type: "input",
        message: "Any contribution guidelines other users should be aware of?",
        name: 'contributing'
    },
    {
        type: "input",
        message: "How would a user test this project?",
        name: 'tests'
    },
    {
        type: "list",
        message: "What License is this project using?",
        name: 'license',
        choices: ["MIT License","Apache License 2.0","BSD 3-Clause 'Revised'","BSD 2-Clause 'Simplified'","ISC License"]
    },
    {
        type: "input",
        message: "Any credits or acknowledgements needed for this project?",
        name: 'credits'
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: 'github'
    },
    {
        type: "input",
        message: "What is your email address?",
        name: 'email'
    }

]};


module.exports = {
    userQuestions
}


