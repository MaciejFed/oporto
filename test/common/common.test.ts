/* eslint-disable jest/expect-expect */
import { Comperable, onlyUniqe } from '../../src/common/common';


class MyClass implements Comperable<MyClass> {
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

    it('Unique Elements', async () => {
       const notUniqeArray: MyClass[] = [new MyClass('1', '0'), new MyClass('1', '1'), new MyClass('2', '1'), new MyClass('3', '1')];
       const uniqeArray = onlyUniqe(notUniqeArray);

       expect(uniqeArray.length).toEqual(2)
    });

    it('Unique Elements - Empty', async () => {
        const notUniqeArray: MyClass[] = [];
        const uniqeArray = onlyUniqe(notUniqeArray);
 
        expect(uniqeArray.length).toEqual(0)
     });

     it('Unique Elements - No Uniqe', async () => {
        const notUniqeArray: MyClass[] = [new MyClass('1', '1'), new MyClass('1', '1')];
        const uniqeArray = onlyUniqe(notUniqeArray);
 
        expect(uniqeArray.length).toEqual(0)
     });
});

