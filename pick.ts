interface Todo {
  title: string;
  desc: string;
}

type TodoPick = Pick<Todo, 'title'>;

/*
interface TodoPick {
  title: string;
}
*/