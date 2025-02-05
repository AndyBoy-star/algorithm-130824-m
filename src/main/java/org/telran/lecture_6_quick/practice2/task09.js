
// "Анаграммы"
// Задается массив строк - слов. Найти в нем все анаграммы (слова, составленные из одних и тех же букв).

const words = ["listen", "silent", "enlist", "inlets", "hello", "below", "elbow", "world"];

function findAnagrams(words) {
    const map = new Map();

    for (let word of words) {
        const sortedWord = word.split('').sort().join('');

        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values()).filter(group => group.length > 1);
}

const anagrams = findAnagrams(words);
console.log("Анаграммы:", anagrams);
