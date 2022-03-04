import { LinkedList } from './linked-list'

const linkedList = new LinkedList<number>()

linkedList.addBack(1)
linkedList.addBack(2)
linkedList.addBack(3)
// linkedList.addBack(3)
// linkedList.addBack(4)
// linkedList.addBack(5)
// linkedList.addBack(2)
linkedList.print()
// console.log('indexOf position', linkedList.indexOf(3))
// console.log('value by position', linkedList.findAt(4))

// linkedList.deleteByValue(2)
linkedList.deleteBack()
console.log('last item deleted')
linkedList.print()
linkedList.deleteBack()
linkedList.print()
linkedList.deleteBack()
linkedList.print()