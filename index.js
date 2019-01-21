class Stack {
    constructor() {
        this.values = [];
        this.count = this.values.length;
    }

    push(elem) {
        this.values.push(elem);
        this.count++;
        this.values[this.count - 1] = elem;
    }

    pop() {
        if (this.count === 0) {
            return;
        }

        this.count--;
        return this.values.pop();
    }

    peek() {
        return this.values[this.count - 1];
    }

    clone() {
        let stack = new Stack();

        this.values.forEach(value => {
            stack.push(value);
        });
        stack.count = this.values.length;

        return stack;
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

    copyTo(array, index) {
        if (!(array instanceof Array)) {
            throw new Error(`${array} is not an Array!`);
        }

        if (index < 0) {
            throw new Error('Index must be greater than 0!');
        }

        for (let i = 0; i < this.values.length; i++) {
            array[index] = this.values[i];
            index++;
        }
    }
}


// FOR TESTING..
let a = new Stack()

a.push(1)

a.push(2)

a.push(3)

console.log(a.push(4))

a.showSize();

