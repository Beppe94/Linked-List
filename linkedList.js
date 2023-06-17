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

        return counter;
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
            if (current === null) return "There is no item at this index";
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

    find(element) {

        //initialize 2 variables with the current head of the list and a counter set to 0 (index)
        let current = this.head;
        let counter = 0;

        //iterate over list 
        while(current != null) {
            
            //check if given value is equal to the current value being checked
            if(current.value === element) {

                //if it is, return counter variable which is the index of the value
                return `The element is at index ${counter}`;
            }

            //move to the next node and increment counter variable
            current = current.next;
            counter++;
        }
        
        //if the element is not found return
        return `Element not in the list`;;
    }

    toString() {

        //initialize 2 variables with the current head of the list and an empty string
        let current = this.head;
        let string = '';
        
        //iterate over the list 
        while(current !== null) {

            //concatenate strings to show all the elemenets in the list 
            string += `(${current.value}) -> `;

            //move current node to the next
            current = current.next;
        }
        
        //concatenate null to the altrady finished string
        return string + 'null';
    }

    removeAt(index) {
        
        //initialize 3 variables with the current head node, 
        //the previous node set to null
        //and the current index counter set to 0
        let current = this.head;
        let previous = null;
        let currIndex = 0;

        //check if the given index is less than 0 or greater than list length
        if(index < 0 || index > this.size()) return 'Wrong index input';

        //check if the given index is the first element in the list and update the head
        //and check if that was the only element
        //if it is update the tail node
        if(index === 0) {
            this.head = this.head.next;
            if(!this.head) {
                this.tail = null;
            }
            return
        }

        //iterate over the list updating the initial variables
        while(current && currIndex < index) {
            previous = current;
            current = current.next;
            currIndex++;
        }

        if(current) {
            //remove the node by updating the reference 
            previous.next = current.next;

            //update tail node if remove last node
            if(current === this.tail) {
                this.tail = previous;
            }
        }
    }

    insertAt(value, index) {

        //initialize 3 variables with the current head node, 
        //the previous node set to null
        //and the current index counter set to 0
        let current = this.head;
        let previous = null;
        let currIndex = 0;

        //check if the given index is less than 0 or greater than list length
        if(index < 0 || index > this.size()) return 'Wrong index input';

        //check if the given index is 0 (first element in the list) 
        //if it is we update the current head and the next node
        if(index === 0) {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            //if the lits is empty, updte the tail node
            if(!this.tail) {
                this.tail = newNode;
            }
        } else {

            //finde the given index in the list
            //and update initial variables
            while(current && currIndex < index) {
                previous = current;
                current = current.next;
                currIndex++;
            }

            //insert the new node once the index is found
            if(currIndex === index) {
                let newNode = new Node(value);
                newNode.next = current;
                previous.next = newNode;
                //if inserting at the end, update tail node
                if(!current) {
                    this.tail = newNode;
                }
            }
        }
    }
}




const list = new LinkedList();

list.prepend(5)
list.append(10);
list.append(20);
list.append(25);
list.append(24);

list.removeElement()

list.prepend(0)

console.log(list.size());
console.log(list);
console.log(list.firstElement());
console.log(list.lastElement());
console.log(list.elementAt(2));
console.log(list.contains(0));
console.log(list.find(20));
console.log(list.toString());
console.log(list.removeAt(1));
console.log(list.toString());
console.log(list.insertAt(100, 0));
console.log(list.toString());
