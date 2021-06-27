var cmd = prompt("Enter the command:")
console.log(cmd);
var todos = [];

while (cmd !== "quit" && cmd !== "q") {
    if (cmd == "new") {
        todos.push(prompt("Enter the todo:"));
    }
    if (cmd == "list") {
        console.log("**************************")
        for (var i = 0; i < todos.length; i++) {
            console.log(i, todos[i]);
        }
        console.log("**************************")
    }
    if (cmd == "delete") {
        todos.splice(prompt("Enter the no of todo which you want to remove:"),1);
    }
    cmd = prompt("Enter the new command:")
}

console.log("Ok!! Quit the app");