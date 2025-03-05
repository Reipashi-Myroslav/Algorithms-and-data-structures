class Disk {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

//Додавання нового диску у стек
addToStack(disk) {
    this.items.push(disk);
}
//Видалення диску із стека
removeFromStack() {
    if(this.items.length === 0) {
        throw new Error("Стек порожній.Не можна видалити елемент.")
    }
    return this.items.pop();
}
//Перегляд даних стеку
displayStack() {
    console.log("Дані у стеку:");
    this.items.forEach((disk,index) => {
        console.log(`${index + 1}.Назва: ${disk.name},Об'єм диску:${disk.size}`);
    })
}

    // Знаходження диску з найбільшим об'ємом
    getMaxDisk() {
        if (this.items.length === 0) {
            return null;
        }
        let maxDisk = this.items[0];
        this.items.forEach(disk => {
            if (disk.size > maxDisk.size) {
                maxDisk = disk;
            }
        });
        return maxDisk;
    
}
//Очистка стеку
clearStack() {
    this.items = [];
}
}
//Створення стеку
function main() {
    const stack = new Stack();
//Додавання нових дисків у стек
stack.addToStack(new Disk("Диск №1", 128));
stack.addToStack(new Disk("Диск №2", 256));
stack.addToStack(new Disk("Диск №3", 64));

//Перегляд даних стеку
stack.displayStack();

//Видалення диску зі стеку 
try {
    const removedDisk = stack.removeFromStack();
    console.log(`Видалено диск: Назва: ${removedDisk.name}, Об'єм диску ${removedDisk.size}`);
} catch(error) {
    console.log(error.message);
}
//Вивід диску з найбільшим об'ємом
const maxDisk = stack.getMaxDisk();
if(maxDisk) {
    console.log(`Диск з максимальним об'ємом: Назва: ${maxDisk.name}, Об'єм диску: ${maxDisk.size}`);
}
 else {
    console.log('Стек пустий.');
 }

 //Очистка стека
 stack.clearStack();
 console.log("Стек очищено.");
}

main();