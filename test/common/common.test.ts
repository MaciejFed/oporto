/* eslint-disable jest/expect-expect */
import { Comparable, isBeforeWeekday, onlyDistinct } from '../../src/common/common';


class MyClass implements Comparable {
    importantProperty: string;
    notImportantProperty: string
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
       const notUniqeArray: MyClass[] = [new MyClass('1', '0'), new MyClass('1', '1'), new MyClass('2', '1'), new MyClass('3', '1')];
       const uniqeArray = onlyDistinct(notUniqeArray);

       expect(uniqeArray.length).toEqual(3)
    });

    it('Distinct Elements - Empty', async () => {
        const notUniqeArray: MyClass[] = [];
        const uniqeArray = onlyDistinct(notUniqeArray);

        expect(uniqeArray.length).toEqual(0)
     });

     it('Distinct Elements - Single', async () => {
        const notUniqeArray: MyClass[] = [new MyClass('1', '1'), new MyClass('1', '1')];
        const uniqeArray = onlyDistinct(notUniqeArray);

        expect(uniqeArray.length).toEqual(1)
     });
});

