#! /usr/bin/env node
//import inquirer for prompt and chalk for coloring ,from npm
import inquirer from "inquirer";
import chalk from "chalk";
//make two variables of mybalance and mypin
let myBalance = 50000;
let myPin = 4444;
console.log(`Wellcom to our ATM machine`);
//use inquirer prompt to get input from user and save it in a variable
const ansewrsPin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter you pin"),
    },
]);
//if else condition
if (ansewrsPin.pin === myPin) {
    console.log(chalk.magenta("Your pin is correct"));
    await main();
}
else {
    console.log(chalk.red(`Incoorect pin plz try again`));
}
//main function
async function main() {
    let exit = false;
    do {
        const answerAction = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: chalk.yellow("Choose an action"),
                choices: ["withdrow", "fast cash", "check balance", "Exit"],
            },
        ]);
        if (answerAction.operation === "withdrow") {
            await withDrow();
        }
        else if (answerAction.operation === "fast cash") {
            await fastCash();
        }
        else if (answerAction.operation === "check balance") {
            await checkBalance();
        }
        else if (answerAction.operation === "Exit") {
            console.log(chalk.cyan(`You exited from ATM.Good bye hanve a nice day`));
            exit = true;
        }
    } while (!exit);
    //withdrow function
    async function withDrow() {
        const ansewrsAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.yellow("Enter your amount"),
            },
        ]);
        if (ansewrsAmount.amount > myBalance && myBalance > 0) {
            console.log(chalk.redBright(`You entered an amount  higher than your balance`));
        }
        else if (myBalance === 0) {
            console.log(chalk.redBright(`You have insufficient balance`));
        }
        else {
            myBalance -= ansewrsAmount.amount;
            console.log(chalk.greenBright(`You withdrow ${ansewrsAmount.amount} from your balance`));
        }
    }
    //fast cash function;
    async function fastCash() {
        const answerFastcash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: chalk.yellow("Select amount to withdrow"),
                choices: ["1000", "5000", "10000", "15000", "30000", "50000"],
            },
        ]);
        // (if else conditon) for different amounts
        if (answerFastcash.fastcash === "1000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
        else if (answerFastcash.fastcash === "5000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
        else if (answerFastcash.fastcash === "10000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
        else if (answerFastcash.fastcash === "15000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
        else if (answerFastcash.fastcash === "30000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
        else if (answerFastcash.fastcash === "50000") {
            myBalance -= answerFastcash.fastcash;
            console.log(chalk.greenBright(`You withdrow ${answerFastcash.fastcash} from your balance`));
        }
    }
    //check balance function
    function checkBalance() {
        console.log(chalk.blueBright(`Your balance is ${myBalance}`));
    }
}
