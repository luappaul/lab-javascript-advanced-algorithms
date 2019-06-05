class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 1000;
  }
  isEmpty() {
    var res = false;
    if (this.stackControl.length === 0) res = true;
    return res;
  }
  canPush() {
    var res = false;
    if (this.stackControl.length < this.MAX_SIZE) res = true;
    return res;
  }
  push(x) {
    this.stackControl.push(x);
    this.stackControl;
    if (x > this.MAX_SIZE - this.stackControl.length) {
      return `Stack Overflow`;
    } else {
      return this.stackControl;
    }
  }
  pop() {
    let last = this.stackControl.pop();
    if (this.stackControl.length === 0) {
      return `Stack Underflow`;
    } else {
      return last;
    }
  }
}
