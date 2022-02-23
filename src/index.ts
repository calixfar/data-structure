import { LinkedList } from './linked-list/linked-list'

const linkedList = new LinkedList<number>()

linkedList.addFront(1)
linkedList.addFront(2)
linkedList.addFront(3)
linkedList.addFront(4)
linkedList.addFront(5)
linkedList.print()
console.log('indexOf position', linkedList.indexOf(3))
console.log('value by position', linkedList.findAt(4))