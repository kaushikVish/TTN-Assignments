class Node{
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class StackLL{
    constructor(){
        this.top=null;
        this.size=0;
    }

    push(data){
        let temp= new Node(data);
        if(this.top==null)
            this.top=temp;
        else{
            temp.next=this.top;
            this.top=temp;
        }
        this.size++;
    }

    pop(){
        if(this.top==null){
            console.log("Stack is Empty");
            return;
        }
        else{
            console.log("Popped element is ",this.top.data);
            var current=this.top;
            this.top=current.next;
            // delete current;
            this.size--;
        }
    }

    peek(){
        if(this.top==null){
            console.log("Stack is Empty");
            return -1;
        }
        else{
            return this.top.data;
        }
    }

    length(){
        return this.size;
    }
}

let s1= new StackLL();
console.log(s1.peek());
s1.push(23);
s1.push(99);
s1.push(2121);
console.log(s1.peek());
s1.pop();
console.log(s1.length());