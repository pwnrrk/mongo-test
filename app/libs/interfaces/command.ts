interface ExcecuteFunction {
  (args: string[]): void;
}

interface Command {
  excecute: ExcecuteFunction;
}

export default Command;
