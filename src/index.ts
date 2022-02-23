import { LinkedList } from './linked-list/linked-list'

const linkedList = new LinkedList<number>()

linkedList.addFront(1)
linkedList.addFront(2)
linkedList.addFront(3)
linkedList.addFront(4)
linkedList.addFront(5)
linkedList.print()