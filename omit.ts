interface Todo {
  title: string;
  desc: string;
}

type TodoOmit = Omit<Todo, 'title'>;

/*
interface TodoOmit {
  desc: string;
}
*/