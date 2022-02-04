import Command from "./app/libs/command";
import process from "process";

const commandName = process.argv[process.argv.length - 1];
console.log(`Running ${commandName}`);
const command = new Command(commandName);
command.run();
