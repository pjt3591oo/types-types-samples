interface Todo {
  title: string;
  desc: string;
}

type TodoReadonly = Readonly<Todo>;

const todoReadonly: TodoReadonly = {
  title: 'title',
  desc: 'desc',
}


// 값 변경 시도시 에러발생
// todoReadonly.title = 'new title';

const t = {
  title: 'title',
  desc: 'desc',
}

// function freeze<T>(obj: T): Readonly<T>;
const todoCloneReadonly = Object.freeze<Todo>(t);
// todoCloneReadonly.title = 'new title'; // Readonly<T> 타입이기 때문에 값 변경시 에러발생