class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {

        //append a new node to the end of the list
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {

        //prepend a new node to the start of the list
        const newNode = new Node(data);
        const head = this.head;

        if(head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
    }

    size() {

        //return the sum of elements in the list
        let current = this.head;
        let counter = 0;

        while(current != null) {
            current = current.next;
            counter++;
        }

        return `This list is ${counter} elements long`;
    }

    firstElement() {

        //return the first element in the list
        return `The first element is ${this.head.value}`;
    }

    lastElement() {

        //return last element in the list
        return `The last element is ${this.tail.value}`;
    }

    elementAt(index) {

        //return the node at given index
        let current = this.head;

        for (let i = 0; i < index; i++) {

            current = current.next;
            if (current === null) return "There is no item for this index";
        }

        return current;
    }
    
    removeElement() {

        //if list is empty, return
        if(!this.head) {
            return;
        }
        
        //if there is only one element to remove in the list 
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        
        //check if the next node is the tail, if so remove it
        let current = this.head;
        while(current.next !== this.tail) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
    }

    contains(element) {
        
        //check if given value is in the list, if so return true else false
        let current = this.head;

        while(current !== null) {

            if(current.value === element) return `This element is in the list`;
                        
            current = current.next;
        }

        return `This element is not in the list`;
    }
}


const list = new LinkedList();

list.prepend(5)
list.append(10);
list.append(20);
list.append(25);
list.append(24);

list.removeElement()

console.log(list.size());
console.log(list);
console.log(list.firstElement());
console.log(list.lastElement());
console.log(list.elementAt(2));
console.log(list.contains(0));