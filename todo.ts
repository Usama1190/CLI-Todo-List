#! /usr/bin/env node

// SHABANG

import inquirer from 'inquirer'

let todos = [];

let condition = true;

while(condition) {
    let userQuestion = await inquirer.prompt([
        {
            name: 'firstQuestion',
            type: 'input',
            message : 'What would you like to add in your todos'
        },
        {
            name: 'secondQuestion',
            type: 'confirm',
            message : 'Would you like to add more in your todos',
            default: true
        }
    ]);

    todos.push(userQuestion.firstQuestion);

    console.log(todos);
    
    condition = userQuestion.secondQuestion;
}

