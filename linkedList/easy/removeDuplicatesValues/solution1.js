// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let prev = linkedList
	let current = linkedList.next
	let actualValue = linkedList.value
	
	while(current){
		if(current.value === actualValue){
			prev.next = current.next
			current.next = null
			current = prev.next
		}else{
			prev = current
			current = current.next
			actualValue = prev.value
		}
	}
  return linkedList;
}
