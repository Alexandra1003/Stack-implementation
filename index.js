class Stack {
    constructor() {
        this.values = [];
        this.count = 0;
    }

    push(elem) {
        this.count++;
        this.values[this.count - 1] = elem;
    }

    pop() {
        if(this.count === 0) {
            return;
        }

        this.count--;
        return this.values.pop();
    }

    peek() {
        return this.values[this.count - 1];
    }

    clone() {
        return this;
    }

    clear() {
        while (!this.isEmpty()) {
            this.count--;
            this.values.pop();
        }
        
    }

    showSize() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}


// FOR TESTING..
let a = new Stack()

a.push(1)

a.push(2)

a.push(3)

console.log(a.push(4))

a.showSize();