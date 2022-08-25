// 11) Escreva uma função que recebe dois parâmetros, um inteiro e um vetor, e encontre esse inteiro utilizando busca binária

function binarySearch(array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

      const middle = Math.floor((start + end) / 2);
      if (array[middle] === num) {
        return `A posição de ${num} é: ${middle}`;
      } else if (array[middle] < num) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return `O número ${num} não foi encontrado no array`
  }

  console.log(binarySearch([1,2,3,4,5,6], 548956));
  console.log(binarySearch([1,2,3,4,5,6], -158));
  console.log(binarySearch([1,2,3,4,5,6], 1));
  console.log(binarySearch([1,2,3,4,5,6], 6));
  console.log(binarySearch([1,3,5,7,9], 2));
  console.log(binarySearch([1,3,5,7,9], 7));


									

