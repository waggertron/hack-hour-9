/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    if (!head) return null;
    let cur = head.next;
    const tail = head;
    while (tail.next) {
        cur = tail.next;
        tail.next = cur.next;
        cur.next = head;
        head = cur;
    }
    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
