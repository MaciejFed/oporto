export interface Comperable<T> {
  equal(other: Comperable<T>): boolean;
}

export function onlyUniqe<T>(arr: Comperable<T>[]) {
  const uniqueElements: Comperable<T>[] = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i].equal(arr[j])) {
        unique = false;
      }
    }
    if (unique) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}
