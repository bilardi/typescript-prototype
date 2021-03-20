/**
 * Test class of MyClass
 * 
 * This is a basic unit test class. There is a test for each public function.
 * If the functions contained conditions, there would be more tests for each public function.
 * 
 * **license**: MIT,
 * **see**: https://github.com/bilardi/typescript-prototype
 */
import "jest-extended";
import { MyClass } from "../src";

let testTrue = <MyClass>{ };
let testFalse = <MyClass>{ };

describe("Simple tests", () => {
    test("Passes when MyClass can be instantiated", () => {
        testTrue = new MyClass(true);
        expect(testTrue).toMatchObject({ qux: true, bar: true, corge: true });
        testFalse = new MyClass(false);
        expect(testFalse).toMatchObject({ qux: true, bar: false, corge: true });
    });
});
describe("Functional tests", () => {
    test("Passes when baz returns a boolean", () => {
        expect(testTrue.baz()).toBeBoolean();
    });
    test("Passes when foo returns the reverse value of its input", () => {
        expect(testTrue.foo(true)).toBe(false);
        expect(testTrue.foo(false)).toBe(true);
    });
    test("Passes when getBar returns the value of bar", () => {
        expect(testTrue.getBar()).toBe(true);
        expect(testFalse.getBar()).toBe(false);
    });
    test("Passes when fooBar returns the reverse value of bar", () => {
        expect(testTrue.fooBar()).toBe(false);
        expect(testFalse.fooBar()).toBe(true);
    });
    test("Passes when fooQuux returns the reverse value of qux", () => {
        expect(testTrue.fooQuux()).toBe(false);
        expect(testFalse.fooQuux()).toBe(false);
    });
    test("Passes when getGrault returns the value of corge", () => {
        expect(testTrue.getGrault()).toBe(true);
        expect(testFalse.getGrault()).toBe(true);
        testTrue.setGrault(true);
        expect(testTrue.getGrault()).toBe(true);
        testTrue.setGrault(false);
        expect(testTrue.getGrault()).toBe(false);
        testTrue.setGrault(1);
        expect(testTrue.getGrault()).toBe(1);
        testTrue.setGrault(0);
        expect(testTrue.getGrault()).toBe(0);
        testFalse.setGrault(true);
        expect(testFalse.getGrault()).toBe(true);
        testFalse.setGrault(false);
        expect(testFalse.getGrault()).toBe(false);
        testFalse.setGrault(1);
        expect(testFalse.getGrault()).toBe(1);
        testFalse.setGrault(0);
        expect(testFalse.getGrault()).toBe(0);
    });
    test("Passes when fooGrault returns the reverse value of corge", () => {
        testTrue.setGrault(true);
        expect(testTrue.fooGrault()).toBe(false);
        testTrue.setGrault(false);
        expect(testTrue.fooGrault()).toBe(true);
        testTrue.setGrault(1);
        expect(testTrue.fooGrault()).toBe(false);
        testTrue.setGrault(0);
        expect(testTrue.fooGrault()).toBe(true);
        testFalse.setGrault(true);
        expect(testFalse.fooGrault()).toBe(false);
        testFalse.setGrault(false);
        expect(testFalse.fooGrault()).toBe(true);
        testFalse.setGrault(1);
        expect(testFalse.fooGrault()).toBe(false);
        testFalse.setGrault(0);
        expect(testFalse.fooGrault()).toBe(true);
    });
});
