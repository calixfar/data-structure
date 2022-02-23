import { LinkedListNode } from './linked-list-node'

interface List<T> {
  size: number
  head: LinkedListNode<T>
  tail: LinkedListNode<T>
}

export class LinkedList<T> {
  private list: List<T> | undefined

  constructor () {
    this.list = undefined
  }

  size(): number {
    if (this.list) return this.list.size
    
    return 0
  }

  isEmpty(): boolean {
    return !this.list
  }

  addFront(val: T): void {
    const newNode = new LinkedListNode(val)

    if (!this.list) {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1
      }

      return
    }

    this.list.head.prev = newNode
    newNode.next = this.list.head
    this.list.head = newNode
    this.list.size += 1
  }

  addBack(val: T): void {
    const newNode = new LinkedListNode(val)

    if (!this.list) {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1
      }

      return
    }

    this.list.tail.next = newNode
    newNode.prev = this.list.tail
    this.list.tail = newNode
    this.list.size += 1
  }

  print () {
    if (!this.list) {
      console.log('The list is empty')
      
      return
    }
    
    let currentNode = this.list.head
    
    do {
      console.log(currentNode.value)
      currentNode = currentNode.next as LinkedListNode<T>
    } while (currentNode)
  }
}