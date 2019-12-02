
// Этот класс содержит значение каждого узла списка, а также предыдущий и следующий его узлы
class LinkNode {
  next: LinkNode | undefined;
  previous: LinkNode | undefined;
  value: any;

  constructor(value: string, next: any, previous: any) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

// Класс списка
class LinkedList {
  head: LinkNode | undefined;
  tail: LinkNode | undefined;

  length: number;

  constructor(value: string) {
    this.head = new LinkNode(value, undefined, undefined);
    this.tail = this.head;

    this.length = 1;
  }

//Метод добавления узла списка (с проверками)
  addHead(value: string): LinkedList {
    const oldHead = this.head;

    const newNode = new LinkNode(value, oldHead, undefined);


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
  }

//Метод удаления верхнего узла списка (с проверками)
  removeHead() {
    const oldHead = this.head;


    if (oldHead && oldHead.next) {
      this.head = oldHead.next;
      this.head.previous = undefined;
    }

    if (oldHead && this.tail && oldHead.value === this.tail.value) {
      this.tail = undefined;
    }

    this.length--;

    return this;
  }

//Поиск узла списка
  search(value: string) {
    if (this.head && value === this.head.value) {
      return this.head;
    }

    if (this.tail && value === this.tail.value) {
      return this.tail;
    }

    let found = undefined;

    if (this.head && this.head.next !== this.tail) {
      let node = this.head.next;

      while (node !== undefined) {
        if (node.value === value) {
          found = node;
          break;
        } else {
          node = node.next;
        }
      }
    }

    return found;
  }

//Удалить узел списка
  remove(value: string) {
    
    if (this.head && this.head.value === value) {
      const oldHead = this.head;

      this.head = oldHead.next;
    }
    
    if (this.tail && this.tail.value === value) {
      const oldTail = this.tail;

      this.tail = oldTail.previous;
    }

    let found: LinkNode | undefined = undefined;

    if (this.head && this.head.next !== this.tail) {
      let node = this.head.next;

      while (node !== undefined) {
        if (node.value === value) {
          found = node;
          break;
        } else {
          node = node.next;
        }
      }
    }

    if (found) {
      const prev = found.previous;
      const next = found.next;

      if (prev && next && found.next && found.previous) {
        found.next.previous = prev;
        found.previous.next = next;
      }

      found.next = next;

      this.length--;
    }

    return this;
  }

//Добавить узел в хвост
  addTail(value: string): LinkedList {
    const oldTail = this.tail;

    if (oldTail) {
      this.tail = new LinkNode(value, undefined, oldTail);

      oldTail.next = this.tail;
    }

    this.length++;

    return this;
  }

//Удалить узел в хвосте
  removeTail(): LinkedList {
    const oldTail = this.tail;

    if (oldTail) {
      this.tail = oldTail.previous;

      if (this.tail) {
        this.tail.next = undefined;
      }

      this.length--;
    }

    return this;
  }

//Вывод всего списка
  printList() {
    let result: any[] = [];

    let count = this.head;

    while (count) {
      result.push(count.value);
      count = count.next;
    }

    return result.join("\n => ");
  }
}

const Link = new LinkedList("My diet");


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




