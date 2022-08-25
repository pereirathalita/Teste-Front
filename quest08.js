// 8) Qual é a saída do código a seguir? Explique sua resposta  

var a = {},  

       b = { key: 'b' },  

       c = { key: 'c' };  

a[b] = 123;  

a[c] = 456;  

// console.log(a);
// console.log(b);
// console.log(c);
console.log(a[b]); 

// A saída do código é 456.
// Os objetos estão sendo convertidos em string, ou seja, 
// o objeto está sendo definido como uma key, nesse caso as keys estão “dentro” do a,  
// por isso o valor inicial (123) é substituído quando chamamos o console, ou seja, o 123 é subscrito e a saída do console é 456. 