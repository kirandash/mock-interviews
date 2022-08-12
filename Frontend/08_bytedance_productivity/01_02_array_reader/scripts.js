Array.prototype.getReader = function() {
    const newArr = [...this];
    return {
        read: function(num = 1) {
            if(!Number.isInteger(num) || num < 0) {
                // throw new Error("Invalid input");
                return "Invalid input"
            }
            return newArr.splice(0, num);
        }
    }
}

const arr = [1,2,3,4,5,6];
const reader = arr.getReader();
console.log(reader.read(-1)); // Error
console.log(reader.read(1.5));
console.log(reader.read("1"));
console.log(reader.read()); // [1]
console.log(reader.read(1)); // [2]
console.log(reader.read(2)); // [3, 4]
console.log(reader.read(2)); // [5, 6]
console.log(reader.read()); // []
console.log(arr); // [1, 2, 3, 4, 5, 6]
