const todoList = [];

let input = prompt("내용을 입력하세요. 나가려면 quit을 입력하세요");
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("******************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("******************");
  } else if (input === "new") {
    const newTodo = prompt("새로운 할일을 입력하세요.");
    todoList.push(newTodo);
    console.log(`${newTodo}가 추가되었습니다.`);
  } else if (input === "delete") {
    const index = parseint(prompt("삭제하고 싶은 할일을 입력하세요,"));
    if (isNaN(index) || index < 0 || index > todoList.legnth - 1) {
      const deleteTodo = todoList.splice(index, 1);
      console.log(`할일 ${deleteTodo}를 삭제했습니다.`);
    } else {
      console.log("그 주소값은 없습니다.");
    }
  }
  input = prompt("내용을 입력하세요. 나가려면 quit을 입력하세요");
}
