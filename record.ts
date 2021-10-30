interface Todo {
  title: string;
  desc: string;
}

type TodoCategory = 'work' | 'home' | 'other';

const todoRecord: Record<TodoCategory, Todo> = {
  work: {
    title: '',
    desc: '',
  }, 
  home: {
    title: '',
    desc: '',
  }, 
  other: {
    title: '',
    desc: '',
  }, 
}