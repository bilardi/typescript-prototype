/**
 * An example of abstract class
 *
 * There are two examples of function: they cannot have any code,
 * if they are marked abstract.
 *
 * **license**: MIT,
 * **see**: https://github.com/bilardi/typescript-prototype
 */
export abstract class MyClassAbstract {
    /**
     * A boolean variable
     */
    qux: boolean;
    
    /**
     * Initialization of variable named qux with value true
     */
    constructor() {
        this.qux = true;
    }

    /**
     * Baz gets a random boolean
     * @returns a boolean
     */
    baz(): boolean {
        return Math.random() >= 0.5;
    }

    /**
     * Foo
     * @param foo a boolean value
     * @returns a boolean
     */
    abstract foo(foo: boolean): boolean;

    /**
     * Quux can be protected but not private
     * @returns a boolean
     */
    protected abstract quux(): boolean;
}