import { LinkedList } from "../linked-list/linked-list";

export class Queue<T> {

  constructor (private readonly list: LinkedList<T>) {}

  static init <T>(): Queue<T> {
    return new Queue(new LinkedList<T>())
  }

  enqueue (value: T) {
    this.list.addBack(value)
  }

  dequeue () {
    this.list.deleteFront()
  }

  print () {
    this.list.print()
  }
}