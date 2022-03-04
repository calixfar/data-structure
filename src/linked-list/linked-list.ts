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

    console.log('|====== START LIST ======|')

    do {
      console.log(currentNode.value)
      currentNode = currentNode.next as LinkedListNode<T>
    } while (currentNode)

    console.log('|====== END LIST ======|')
  }

  indexOf (val: T) {
    if (!this.list) {
      console.log('The list is empty')
      
      return
    }

    let currentNode = this.list.head
    let match = -1
    let index = 0

    do {
      if (val === currentNode.value) {
        match = index

        break
      }

      index++
      currentNode = currentNode.next as LinkedListNode<T>
    } while (currentNode)

    return match
  }

  findAt (position: number) {
    if (!this.list) {
      console.log('The list is empty')
      
      return
    }

    let currentNode = this.list.head
    let match: null | T = null
    let index = 0

    do {
      if (index === position) {
        match = currentNode.value

        break
      }

      index++
      currentNode = currentNode.next as LinkedListNode<T>
    } while (currentNode)

    return match
  }

  deleteByValue (value: T) {
    if (!this.list) {
      console.log('The list is empty')
      
      return
    }

    let currentNode = this.list.head

    do {
      if (value === currentNode.value) {
        const prevNode = currentNode.prev
        const nextNode = currentNode.next

        if (currentNode === this.list!.head) {
          if (nextNode) {
            this.list!.head = nextNode
          } else {
            this.list = undefined

            return
          }
        }

        if (currentNode === this.list!.tail) {
          if (prevNode) {
            this.list!.tail = prevNode
          } else {
            this.list = undefined

            return
          }
        }

        if (prevNode) {
          prevNode.next = nextNode
        }

        if (nextNode) {
          nextNode.prev = prevNode
        }
      }

      currentNode = currentNode.next as LinkedListNode<T>
    } while (currentNode)
  }

  deleteBack () {
    if (!this.list) {
      console.log('This list is empty, please fill it with values before using the delete method')

      return
    }

    if (!this.list.tail.prev) {
      this.list = undefined
      return
    }

    this.list.tail = this.list.tail.prev
    this.list.tail.next = null
    this.list.size -= 1

    if (this.list.tail.prev) {
      this.list.tail.prev.next = this.list.tail
    }
  }
}