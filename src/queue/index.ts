import { Queue } from './queue'

const queue = Queue.init()

queue.enqueue(1)
queue.enqueue(2)
queue.print()
console.log('DELETE')
queue.dequeue()
queue.print()
console.log('DELETE')
queue.dequeue()
queue.print()
console.log('DELETE')
queue.dequeue()
queue.print()