/**
 * Create a stack.Then create a queue using two stacks.
 */



///redo to make deque persist as an out box, enque to buldid up and only transfer over when outbox is empty

function Stack() {
  this.items = {};
  this.length = 0;
  this.push = function (item) {
    this.items[this.length++] = item;
  }
  this.pop = function () {
    if (this.length) {
      let item = this.items[this.length - 1]
      delete this.items[this.length - 1];
      this.length--;
      return item;
    } else {
      return undefined;
    }
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stackA = new Stack();
  this.stackB = new Stack();
  this.enqueue = function (item) {
    this.stackA.push(item);
  }
  this.dequeue = function () {
    let item = this.stackA.pop();
    if (!item) {
      return item;
    }
    while (item) {
      this.stackB.push(item);
      item = this.stackA.pop();
    }
    let result = this.stackB.pop();
    item = this.stackB.pop();
    while (item) {
      this.stackA.push(item);
      item = this.stackB.push();
    }
    return result;
  }
}
function Queue() {
  this.stackA = new Stack();
  this.stackB = new Stack();
  this.enqueue = function (item) {
    this.stackA.push(item);
  }
  this.dequeue = function () {
    let item = this.stackB.pop();
    if (item) {
      return item;
    } else {
      item = this.stackA.pop();
      if (!item) {
        return item;
      }
      while (item) {
        this.stackB.push(item);
        item = this.stackA.pop();
      }
      let result = this.stackB.pop();
      item = this.stackB.pop();
      while (item) {
        this.stackA.push(item);
        item = this.stackB.pop();
      }
      return result;
    }
  }

}

module.exports = { Stack: Stack, Queue: Queue };
