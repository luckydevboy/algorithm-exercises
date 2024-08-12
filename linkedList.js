class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  clear() {
    this.head = null;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(3);
node1.next = node2;

let list = new LinkedList(node1);

console.log("list:", list);
console.log("list.size:", list.size());
