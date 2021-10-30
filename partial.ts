interface Todo {
  title: string;
  desc: string;
}

type TodoPartial = Partial<Todo>;
/*
interface Todo {
  title?: string;
  desc?: string;
}
*/

const todoPartial: TodoPartial = {};