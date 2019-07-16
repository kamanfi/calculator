import operate from './operate';
import { fail } from 'assert';

describe('calculator should add subtract and multiply', () => {


    test('adds 3 + 3 to equal 6', () => {
        expect(operate( 3, 3,'+')).toBe("6");
    });

    test('subtract 3 - 3 to equal 9', () => {
        expect(operate( 3, 3,'-')).toBe("0");
    });

    // test('adds 3 / 3 to equal 1', () => {
    //     expect(operate( 3, 3,'/')).toBe("1");
    // });

    test('multiplies 3 x 3 to equal 9', () => {
        expect(operate( 3, 3,'x')).toBe("9");
    });
})

// describe('calculator should fail if passed a non numeric string ', () => {

//     test('should fail if string of addition is passed ', () => {
//         expect(operate( 3, 3,'addition')).toThrowError(U`nknown operation '${addition}`);
//     });

//     test('should fail if string of - is passed ', () => {
//         expect(operate( 3, 3,'subtraction')).toBe(fail);
//     });

//     test('should fail if string of / is passed', () => {
//         expect(operate( 3, 3,'division')).toBe(fail);
//     });

//     test('should fail if string of * is passed', () => {
//         expect(operate( 3, 3,'multiplication')).toBe(fail);
//     });
// })
