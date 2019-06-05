class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 1000000;
  }
  isEmpty() {
    var res = false;
    if (this.queueControl.length === 0) return true;
    else return res;
  }
  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else return false;
  }
  enqueue(x) {
    if (this.MAX_SIZE > this.queueControl + x) {
      this.queueControl.unshift(x);
      return this.queueControl;
    } else {
      return `Queue Overflow`;
    }
  }
  dequeue() {
    let last = this.queueControl.pop();
    if (this.queueControl.length === 0) return `Queue Underflow`;
    else return last;
  }
}
