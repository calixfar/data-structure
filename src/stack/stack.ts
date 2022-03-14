import { LinkedList } from '../linked-list/linked-list'

export class Stack<T> {
  
  private constructor (private readonly list: LinkedList<T>) {}

  static init <T>(): Stack<T> {
    return new Stack<T>(new LinkedList<T>())
  }

  push (value: T) {
    this.list.addBack(value)
  }

  pop () {
    this.list.deleteBack()
  }

  print () {
    this.list.print()
  }
}