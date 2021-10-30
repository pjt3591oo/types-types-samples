function sampleParametersFunction(arg: { a: number, b: string }) {
  console.log(arg.a);
  console.log(arg.b);
}

type SampleParametersFunction = Parameters<typeof sampleParametersFunction>;

const sampleParametersFunctionParams: SampleParametersFunction = [{ a: 1, b: "mung" }];

sampleParametersFunction(...sampleParametersFunctionParams );

/*
interface Args {
  a: number;
  b: string;
}

function f1(arg: Args) {
  console.log(arg.a);
  console.log(arg.b);
}

const arg: Args = { a: 1, b: "mung" };

f1(arg);
*/