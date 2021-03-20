/**
 * An example of interface
 *
 * There are a variable and the statement of a function: it cannot have any code, only return type.
 *
 * **license**: MIT,
 * **see**: https://github.com/bilardi/typescript-prototype
 */
export interface MyInterface {
    /**
     * This variable has to be initialized from who implements this interface
     */
    bar: boolean;

    /**
     * Get bar value
     * @returns a boolean
     */
    getBar(): boolean;
}