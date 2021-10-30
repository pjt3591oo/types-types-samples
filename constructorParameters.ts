// type T0 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
// type T1 = ConstructorParameters<FunctionConstructor>;  // string[]
// type T2 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)?]
// const t0: T0 = ['message'];

class Mung {
  a;
  b;
  constructor(a: string, b: number) {
    this.a = a;
    this.b = b;
  }
}

type MungMung = ConstructorParameters<typeof Mung>;  // [string, number]

const params: MungMung = ['a', 1];

const mung = new Mung(...params);
console.log(mung.a)
console.log(mung.b)