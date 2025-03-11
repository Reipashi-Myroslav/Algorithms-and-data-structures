class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null; // додано поле prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Додавання елемента в кінець списку
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // виправлено newMode на newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Переміщення елемента на K позицій вперед
    moveKPositionsForward(P0, K) {
        if (P0 === null || K <= 0) return;

        let current = P0;
        let positionsMoved = 0;
        
        while (current.next !== null && positionsMoved < K) {
            current = current.next;
            positionsMoved++;
        }
        
        // Від'єднуємо P0
        if (P0.prev !== null) {
            P0.prev.next = P0.next;
        } else {
            this.head = P0.next;
        }
        if (P0.next !== null) {
            P0.next.prev = P0.prev;
        } else {
            this.tail = P0.prev;
        }
        
        // Вставляємо P0 на нову позицію
        if (current.next !== null) {
            P0.next = current.next;
            current.next.prev = P0;
        } else {
            P0.next = null;
            this.tail = P0;
        }
        P0.prev = current;
        current.next = P0;
    }

    // Виведення першого та останнього елементів списку
    printFirstAndLast() {
        console.log("Перший елемент:", this.head ? this.head.data : null);
        console.log("Останній елемент:", this.tail ? this.tail.data : null);
    }

    // Виведення вмісту списку
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result.trim());
    }
}

function main() {
    // Створення двозв'язного списку
    const list = new DoublyLinkedList();
    [1, 2, 3, 4, 5, 6, 7].forEach(num => list.add(num));

    console.log("Початковий список:");
    list.printList();

    // Переміщення елемента на K позицій вперед
    const P0 = list.head.next.next; // Припустимо, що P0 вказує на 3-й елемент (3)
    const K = 2;
    
    list.moveKPositionsForward(P0, K);

    console.log("\nСписок після переміщення елемента:");
    list.printList();

    // Виведення першого та останнього елементів списку
    list.printFirstAndLast();
}

main();
