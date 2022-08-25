// 7) Qual será a saída do código abaixo para o console e por quê?  

var arr1 = "john".split(''); 

var arr2 = arr1.reverse();

var arr3 = "jones".split('');  

arr2.push(arr3);  

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));  

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// A saída do código será:
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
// Porque quando o método reverse() é chamado de um objeto de um array, 
// ele não retorna apenas o inverso do array, mas também inverte a ordem do próprio array(arr1, nesse caso). 
// O resultado do arr2 é uma simples referência ao arr1, não uma cópia, ou seja, quando algo é feito no arr2, 
// o arr1 também será afetado, pois arr1 e arr2 são referências ao mesmo objeto. 