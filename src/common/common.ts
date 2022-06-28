export interface Comperable {
  equal(other: Comperable): boolean;
}

export function onlyDistinct(arr: Comperable[]): Comperable[] {
  const distinctElements: Comperable[] = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < distinctElements.length; j++) {
      if (i !== j && arr[i].equal(distinctElements[j])) {
        unique = false;
      }
    }
    if (unique) {
      distinctElements.push(arr[i]);
    }
  }
  return distinctElements;
}
