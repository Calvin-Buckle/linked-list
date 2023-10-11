class LinkedList
{
constructor(head = null){
    this.head = head
}
append(value){
    let node = new Node(value)
    return this.head = node;
}

}

class Node{
constructor(value)
{
this.value = value;
this.nextNode = null;
}
}


let thing = new LinkedList;
thing.append(10)
console.log(thing)

