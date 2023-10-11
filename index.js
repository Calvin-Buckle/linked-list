class LinkedList
{
constructor(head = null){
    this.head = head
    this.tail = null
}
append(value){
    let node = new Node(value)
    if (this.head == null)
    {
    return this.head = node;
    }
    else
    {
    return this.tail = node
    }
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

