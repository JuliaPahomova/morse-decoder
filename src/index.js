const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // хранит результат
    let ready_string = "";
    // разбивает строку на слова
    let words = expr.split('**********');
    // для каждого из слов
    for (let i = 0; i < words.length; i++) {
        // считает 10 бит буквой
        for (let j = 0; j < words[i].length;) {
            let letter = words[i].substring(j, j + 10);
            let str_bit = "";
            // каждые 2 бита из 10-ти бит буквы переводит в морзянку
            // игнорируя 00
            for (let x = 0; x < letter.length;) {
                let bit = letter.substring(x, x + 2);
                if (bit === "10") str_bit = str_bit + ".";
                if (bit === "11") str_bit = str_bit + "-";
                x = x + 2;
            }
            // вносит дешифрованные слова в готовое выражение
            ready_string = ready_string + MORSE_TABLE[str_bit];
            j = j + 10;
        }
        // добавляет пробел между слов, если слово в массиве не последнее
        if (i !== words.length-1) ready_string = ready_string + " ";
    }
    return (ready_string);
}

module.exports = {
    decode
}
