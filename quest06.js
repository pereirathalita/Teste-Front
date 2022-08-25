// 6) Escreva uma função simples que retorne um booleano indicando se uma string é ou não um palíndromo. Palíndromo: uma palavra, frase, número ou outra sequência de símbolos ou elementos, cujo significado pode ser interpretado da mesma maneira na direção direta ou reversa  

// Ex: Amor a Roma, O lobo ama o bolo, ama, ovo, "11011", reviver, salas 


// function palindrome(str) {
//     for(var i = 0; i <str.length / 2; i++)
//     if(str[i])
//     return true;
// }

// console.log(palindrome("o lobo ama o bolo"));

function palindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

console.log(palindrome("amor a roma"));
console.log(palindrome("o lobo ama o bolo"));
console.log(palindrome("ama"));
console.log(palindrome("ovo"));
console.log(palindrome("11011"));
console.log(palindrome("reviver"));
console.log(palindrome("salas"));
