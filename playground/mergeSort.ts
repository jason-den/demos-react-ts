function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(mergeSort(arr)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
