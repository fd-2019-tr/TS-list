// Этот класс содержит значение каждого узла списка, а также предыдущий и следующий его узлы
var LinkNode = /** @class */ (function () {
    function LinkNode(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
    return LinkNode;
}());
// Класс списка
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new LinkNode(value, undefined, undefined);
        this.tail = this.head;
        this.length = 1;
    }
    //Метод добавления узла списка (с проверками)
    LinkedList.prototype.addHead = function (value) {
        var oldHead = this.head;
        var newNode = new LinkNode(value, oldHead, undefined);
        this.head = newNode;
        if (this.tail === undefined || this.tail.value === undefined) {
            this.tail = this.head;
        }
        if (this.tail && oldHead && this.tail.value === oldHead.value) {
            this.tail.previous = this.head;
        }
        if (this.head.next && this.head.next.previous === undefined) {
            this.head.next.previous = this.head;
        }
        this.length++;
        return this;
    };
    //Метод удаления верхнего узла списка (с проверками)
    LinkedList.prototype.removeHead = function () {
        var oldHead = this.head;
        if (oldHead && oldHead.next) {
            this.head = oldHead.next;
            this.head.previous = undefined;
        }
        if (oldHead && this.tail && oldHead.value === this.tail.value) {
            this.tail = undefined;
        }
        this.length--;
        return this;
    };
    //Поиск узла списка
    LinkedList.prototype.search = function (value) {
        if (this.head && value === this.head.value) {
            return this.head;
        }
        if (this.tail && value === this.tail.value) {
            return this.tail;
        }
        var found = undefined;
        if (this.head && this.head.next !== this.tail) {
            var node = this.head.next;
            while (node !== undefined) {
                if (node.value === value) {
                    found = node;
                    break;
                }
                else {
                    node = node.next;
                }
            }
        }
        return found;
    };
    //Удалить узел списка
    LinkedList.prototype.remove = function (value) {
        if (this.head && this.head.value === value) {
            var oldHead = this.head;
            this.head = oldHead.next;
        }
        if (this.tail && this.tail.value === value) {
            var oldTail = this.tail;
            this.tail = oldTail.previous;
        }
        var found = undefined;
        if (this.head && this.head.next !== this.tail) {
            var node = this.head.next;
            while (node !== undefined) {
                if (node.value === value) {
                    found = node;
                    break;
                }
                else {
                    node = node.next;
                }
            }
        }
        if (found) {
            var prev = found.previous;
            var next = found.next;
            if (prev && next && found.next && found.previous) {
                found.next.previous = prev;
                found.previous.next = next;
            }
            found.next = next;
            this.length--;
        }
        return this;
    };
    //Добавить узел в хвост
    LinkedList.prototype.addTail = function (value) {
        var oldTail = this.tail;
        if (oldTail) {
            this.tail = new LinkNode(value, undefined, oldTail);
            oldTail.next = this.tail;
        }
        this.length++;
        return this;
    };
    //Удалить узел в хвосте
    LinkedList.prototype.removeTail = function () {
        var oldTail = this.tail;
        if (oldTail) {
            this.tail = oldTail.previous;
            if (this.tail) {
                this.tail.next = undefined;
            }
            this.length--;
        }
        return this;
    };
    //Вывод всего списка
    LinkedList.prototype.printList = function () {
        var result = [];
        var count = this.head;
        while (count) {
            result.push(count.value);
            count = count.next;
        }
        return result.join("\n => ");
    };
    return LinkedList;
}());
var Link = new LinkedList("My diet");
console.log(Link.addTail("First dish"));
console.log(Link.addTail("Second dish"));
console.log("My diet is: ");
console.log("*******************");
console.log(Link.printList());
console.log("*******************");
console.log("Remove one dish", Link.removeTail());
console.log("*******************");
console.log("Adding another", Link.addTail("Bread"));
console.log("Adding another", Link.addTail("Compote"));
console.log("*******************");
console.log("My new diet is: ");
console.log("*******************");
console.log(Link.printList());
console.log("*******************");
console.log("Seacrh a node", Link.search("Bread"));
console.log("*******************");
/*console.log("add tail", Link.addTail("Bread"));
console.log("*******************");
console.log("Print list", Link.printList());
console.log("*******************");
console.log("Remove one", Link.remove("compote"));
console.log("*******************");
console.log("Remove Tail", Link.removeTail());
console.log("*******************");
console.log("Print list", Link.printList());*/
