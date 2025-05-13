function toRoman(num) {
    if (num <= 0) return ''; // Roman numerals have no representation for 0

    const symbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [roman, value] of symbols) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}
