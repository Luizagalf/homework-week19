class Worker {
    constructor(n, s, r, d) {
        this.name = n;
        this.surname = s;
        this.rate = r;
        this.days = d;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());