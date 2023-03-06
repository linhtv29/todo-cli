const {log, success} = require("signale")
const todo = require("./src/todo")
const todoCLI = (input, flags) => {
  if (flags.task) {
		todo.addTodo(input)
    success(`tao task: ${input}`);
    return;
  }
  if (flags.delete) {
    log("xoa task");
    return;
  }
	log("dir:", todo.showTodo())
};

module.exports = todoCLI;
