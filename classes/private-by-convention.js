class Counter {
   constructor() {
      this._count = 0; // convention: _count is private by convention
   }

   increment() {
      this._count++;
      return this._count;
   }

   getCount() {
      return this._count;
   }
}

const counter1 = new Counter();
console.log(counter1._count); // 0
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.increment()); // 3
console.log(counter1.getCount()); // 3
