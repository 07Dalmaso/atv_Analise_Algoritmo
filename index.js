
// Programa: Dado um valor de "n" você vai ordenar um vetoe embaralhado de um tamanho "n", 
// O que preciso fazer : Ordenar e mostar seu tempo de execução tempo de execução

// Função Geradora do vetor 
function vetorAleatorio(size) {
    const vector = [];
    for (let i = 0; i < size; i++) {
        vector.push(Math.floor(Math.random() * 10000000));
    }
    return vector;
}
const tamanhoDoVetor = 10000000;
const vetor = vetorAleatorio(tamanhoDoVetor);

//Merge Sort
function mergeSort(v) {
    if (v.length <= 1) {
        return v;
    }

    const mid = Math.floor(v.length / 2);
    const left = v.slice(0, mid);
    const right = v.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}


//Quick sort
function quickSort(v) {
    if (v.length <= 1) {
        return v;
    }

    const pivot = v[0];
    const left = [];
    const right = [];

    for (let i = 1; i < v.length; i++) {
        if (v[i] < pivot) {
            left.push(v[i]);
        } else {
            right.push(v[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

//Insertion Sort
function insertionSort(v) {
    const n = v.length;
    for (let i = 1; i < n; i++) {
        const key = v[i];
        let j = i - 1;
        while (j >= 0 && v[j] > key) {
            v[j + 1] = v[j];
            j--;
        }
        v[j + 1] = key;
    }
    return v;
}

console.log("Vetor:", vetor);
let antesMerge = Date.now();
console.log(mergeSort(vetor));
let duracaoMerge = Date.now() - antesMerge;
console.log("Duração do Merge Sort: "+ duracaoMerge + " ms");
let antesQuick = Date.now();
console.log(quickSort(vetor));
let duracaoQuick = Date.now() - antesQuick;
console.log("Duração do Quick Sort: " + duracaoQuick + " ms");
let antesInsert = Date.now();
console.log(insertionSort(vetor));
let duracaoInsert = Date.now() - antesQuick;
console.log("Duração do Insert On Sort: "+ duracaoInsert + " ms");