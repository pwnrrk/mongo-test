import Command from "../libs/interfaces/command";

export default class Hello implements Command {
  excecute() {
    console.log("Hello command");
  }
}
