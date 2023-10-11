
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


size(){
    let tmp = this.head
    let counter = 0
    while (tmp != null)
    {
        counter++;
        tmp = tmp.nextNode;
    }
    return counter;
}

header()
{
    return this.head
}

tails()
{
    let tmp = this.head;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp;
}

at(index){
    let tmp = this.head;
    let i;
    for(i = 0; i < index ; i++){
       tmp = tmp.nextNode;
       if (tmp == null){return 'there is no node for this index'}
    }
    return tmp;
}

}


let list = new LinkedList;;
list.prepend(10)
list.append(20)
list.append(30)


console.log(list)
console.log(list.at(0))
console.log(list.size())
console.log("head",list.header())
console.log("tail",list.tails())