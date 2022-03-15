export class CircularBuffer<T> {
  private list: Array<T>
  private writeIndex: number
  private readIndex: number

  private constructor(private readonly capacity: number){
    this.list = new Array(capacity)
    this.readIndex = 0
    this.writeIndex = 0
  }

  static init<T> (capacity: number): CircularBuffer<T> {
    return new CircularBuffer(capacity)
  }

  enqueue(value: T) {
    if (this.list[0] && this.writeIndex === this.readIndex) {
      this.readIndex += 1
      this.readIndex = this.readIndex % this.capacity
    }

    this.list[this.writeIndex++] = value
    this.writeIndex = this.writeIndex % this.capacity
  }

  dequeue() {
    this.readIndex %= this.capacity
  }

  print() {
    console.table(this.list)
    console.table({writeIndex: this.writeIndex, readIndex: this.readIndex})
  }
}