type Exclude0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type Exclude1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type Exclude2 = Exclude<string | number | (() => void), Function>;  // string | number