class Car {
    constructor(public model: string, public productionYear: number) { }
}

class Stack<T> {
    data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T {
        return this.data.pop();
    }

    peek(): T {
        if(this.data.length)
            return this.data[this.data.length - 1];

        return null;
    }

    size() {
        return this.data.length;
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

