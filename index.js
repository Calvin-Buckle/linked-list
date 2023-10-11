
class Node{
    constructor(value)
    {
    this.value = value;
    this.nextNode = null;
    }
    }
    

class LinkedList
{
constructor(head = null)
{
    this.head = head
    
    
    this.size = 0
}

append(value)
{
    let node = new Node(value)
    if (this.head == null)
    {
    return this.head = node;
    };
   if (this.head.nextNode!= null){this.head.nextNode.nextNode = node}
   else
    {
    return this.head.nextNode = node
    }
    
}

prepend(value)
{
    
    let node = new Node(value)
    {
        this.head = node;
    }
   
}




}


let thing = new LinkedList;;
thing.prepend(10)
thing.append(20)
thing.append(30)


console.log(thing)

