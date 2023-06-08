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
        let current = this.head;
        let counter = 0;

        while(current != null) {
            current = current.next;
            counter++;
        }

        return `This list is ${counter} elements`;
    }

    firstElement() {
        return `The first element is ${this.head.value}`;
    }

    lastElement() {
        return `The last element is ${this.tail.value}`;
    }

    elementAt(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {

            current = current.next;
            if (current === null) return "There is no item for this index";
        }

        return current;
    }
}


const list = new LinkedList();

list.append(10);
list.append(20);
list.append(25);
list.prepend(5);
list.prepend(9);
list.append(24);

console.log(list.size());
console.log(list);
console.log(list.firstElement());
console.log(list.lastElement());
console.log(list.elementAt(5));