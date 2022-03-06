//test cases
const myLinkedList = new LinkedList()
myLinkedList.insertLast(1)
myLinkedList.insertLast(1)
myLinkedList.insertLast(3)
myLinkedList.insertLast(4)
myLinkedList.insertLast(4)
myLinkedList.insertLast(5)
myLinkedList.insertLast(6)
myLinkedList.insertLast(6)

myLinkedList.printNodeValues()
console.log("-----")

function deleteRepeatedNodes(LinkedList){
    if(LinkedList.head){
        let prev = LinkedList.head
        let actualValue = prev.data
        let current = prev.next
        while(current){
            if(current.data === actualValue){
                prev.next = current.next
                current.next = null
                current = prev.next
            }else{
                prev = current
                current = current.next
                actualValue = prev.data
            }
        }
    }
    return LinkedList
}

console.log("deleted repeated nodes")
deleteRepeatedNodes(myLinkedList).printNodeValues()
