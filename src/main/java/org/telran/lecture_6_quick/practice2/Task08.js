
// "Камни"
// Имеется N камней веса А1,А2,...,АN.
// Необходимо разбить их на две кучи таким образом, чтобы веса куч отличались не более чем в 2 раза.
// Если этого сделать нельзя, то указать это.

// Вход: массив целых чисел - веса камней
// Выход: два числа - вес первой и второй куч. Или сообщение "Разбить на две кучи нельзя"

const stones = [3, 8, 5, 1, 6];

function splitStones(stones) {
    stones.sort((a, b) => b - a);

    let heap1 = 0; 
    let heap2 = 0; 

    for (let stone of stones) {
        if (heap1 <= heap2) {
            heap1 += stone;
        } else {
            heap2 += stone;
        }
    }

    if (heap1 <= 2 * heap2 && heap2 <= 2 * heap1) {
        return [heap1, heap2];
    } else {
        return "Разбить на две кучи нельзя";
    }
}

const result = splitStones(stones);
console.log("Результат:", result);
