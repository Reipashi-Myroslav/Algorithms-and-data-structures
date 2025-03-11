class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
 

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while(last.next !== null) {
            last = last.next;
        }
        last.next = newNode;
    }

deleteFirstGreaterThan(x) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
        if (current.data > x) {
            if (prev !== null) {
                prev.next = current.next;
            } else {
                this.head = current.next;
            }
            return;
        }
        prev = current;
        current = current.next;
    }
}

addBeforeValue(x, newData) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
        if (current.data ===x) {
            const newNode = new Node(newData);
            if (prev !== null) {
                prev.next = newNode;
                newNode.next = current;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
        }
        prev = current;
        current = current.next;
    }
}

printList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
        result += current.data + " -> ";
        current = current.next;
    }
    result += 'Кінець';
    console.log(result);
}
}
//Створення списку
const ll = new LinkedList();
[1, 3, 5, 15, 2, 15, 4].forEach(num => ll.append(num));

console.log("Початковий список:");
ll.printList();

//Видалення першого елемента більше числа 4
ll.deleteFirstGreaterThan(4);
console.log("\nПісля видалення першого елемента більше числа 4:");
ll.printList();

//Додавання числа 10 перед кожним числом 15
ll.addBeforeValue(15, 10);
console.log("\nПісля додавання числа 10 перед кожним числом 15:");
ll.printList();