//*****

type GetSecondArg<T> = T extends (first: any, second: infer SecondArg, ...args: any[]) => any ? SecondArg : never

type NumberFunc = (a: number, b: number, c: string) => number

type Second = GetSecondArg<NumberFunc> // number

//*****

type Getter<T> = {
    [Key in keyof T as `get${Capitalize<Key & string>}`]: () => T[Key]
}

type Person = {
    1: number,
    name: string
}

type GetPerson = Getter<Person>


let person: Person = {
    1: 2,
    name: 'Test'
}

let getPerson: GetPerson = {
    //get1: () => person[1], // error because number & string is never
    getName: () => person.name,
}

//*****

type MyReturnType<T> = T extends (...args: any[]) => infer ReturnType ? ReturnType : never;

type TestFunction = () => string | number;

type TestFunctionReturnType = MyReturnType<TestFunction> // string | number



