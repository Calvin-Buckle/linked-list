
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
  
    for(let i = 0; i < index ; i++){
       tmp = tmp.nextNode;
       if (tmp == null){return 'there is no node for this index'}
    }
    return tmp;
}


pop(){
    let tmp = this.head;
    tmp = tmp.nextNode
    if (tmp.nextNode != null){ return tmp.nextNode = null}
}

contains(value)
 {
    let tmp = this.head;
    while(tmp != null){
        if( tmp.value == value)return true
        tmp = tmp.nextNode 
    }
    return false
}

find(value){
 let tmp = this.head;
 let index = -1;
 while( tmp != null){
    index++
    if( tmp.value == value)return index;
    tmp = tmp.nextNode
    if (tmp.value != value) return null 
 }
}

toString() {
    let tmp = this.head;
    let stringList = "";
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    return (stringList += "null");
  }


  insertAt(value, index) {
    if (this.head == null) this.prepend(value);
    else {
      let cur = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;
        if (cur == null) break;
      }
      const tmp = new Node(value);
      prev.nextNode = tmp;
      tmp.nextNode = cur;
    }
  }

  removeAt(index) {
    if (this.head == null) return;
    let cur = this.head;
    let prev = null;


    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur == null) return ;
    }
    prev.nextNode = cur.nextNode;
  }
}




let list = new LinkedList;;
list.prepend(10)
list.append(20)
list.append(30)

list.insertAt(23, 1);
list.removeAt(1)
console.log(list.toString())

