import { Stack } from './stack'

const stack = Stack.init<number>()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()