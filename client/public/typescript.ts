//There are 2 ways to define types in typescript
interface LoginInputState {
    name: string,
    email: string
}
interface LoginInputStateWithAge extends LoginInputState { // not possible in type
    age: number
}

type LoginInputState2 = { 
    name: string,
    email: string
}