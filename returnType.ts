function f1(): { a: number, b: string }

type NewReturnType = ReturnType<typeof f1>;  // { a: number, b: string }