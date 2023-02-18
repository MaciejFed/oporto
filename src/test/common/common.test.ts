import { Comparable, onlyDistinct } from '../../common/common';

class MyClass implements Comparable {
  importantProperty: string;
  notImportantProperty: string;
  constructor(importantProperty: string, notImportantProperty: string) {
    this.importantProperty = importantProperty;
    this.notImportantProperty = notImportantProperty;
  }

  equal(other: MyClass): boolean {
    return this.importantProperty === other.importantProperty;
  }
}

describe('Common Functions Test', () => {
  it('Distinct Elements', async () => {
    const notUniqueArray: MyClass[] = [
      new MyClass('1', '0'),
      new MyClass('1', '1'),
      new MyClass('2', '1'),
      new MyClass('3', '1')
    ];
    const uniqueArray = onlyDistinct(notUniqueArray);

    expect(uniqueArray.length).toEqual(3);
  });

  it('Distinct Elements - Empty', async () => {
    const notUniqueArray: MyClass[] = [];
    const uniqueArray = onlyDistinct(notUniqueArray);

    expect(uniqueArray.length).toEqual(0);
  });

  it('Distinct Elements - Single', async () => {
    const notUniqeArray: MyClass[] = [new MyClass('1', '1'), new MyClass('1', '1')];
    const uniqueArray = onlyDistinct(notUniqeArray);

    expect(uniqueArray.length).toEqual(1);
  });
});
