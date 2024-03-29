/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let cur = l1,
    head = l2,
    nextHead = l1.next;
  do {
    if (!head) break;
    cur.next = head;
    head = head.next;
    cur = cur.next;
    if (!nextHead) break;
    cur.next = nextHead
    nextHead = nextHead.next;
    cur = cur.next
  } while (head || nextHead);
  return l1;
}

module.exports = {Node: Node, zip: zip};
