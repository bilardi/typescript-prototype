/**
 * An example of class
 *
 * An example of class that it extends an abstract class and it implements an interface.
 * There is a boolean pun by foo function of abstract class, bar function of interface class,
 * and foobar function of this class.
 * 
 * **license**: MIT,
 * **see**: https://github.com/bilardi/typescript-prototype
 */
import { Corge } from "./myType";
import { MyInterface } from "./myInterface";
import { MyClassAbstract } from "./myClassAbstract";
export class MyClass extends MyClassAbstract implements MyInterface {
    /**
     * A boolean variable of interface: it has to be initialized
     */
    bar: boolean;
    /**
     * A variable has to be initialized in the constructor
     */
    private corge: Corge;

    /**
     * Initialization of variables
     * @param bar a boolean value with default true
     */
    constructor(bar: boolean) {
        super()
        this.bar = bar;
        this.corge = true;
    }

    /**
     * Foo gets reverse value of foo
     * @param foo a boolean value
     * @returns reverse value of foo
     */
    foo(foo: boolean): boolean {
        return ! foo;
    }

    /**
     * Bar gets value of bar
     * @returns a boolean
     */
    getBar(): boolean {
        return this.bar;
    }

    /**
     * Foobar gets reverse value of bar
     * @returns reverse value of bar
     */
    fooBar(): boolean {
        return this.foo(this.bar);
    }

    /**
     * Quux recalls abstract variable
     * @returns a boolean
     */
    protected quux(): boolean {
        return this.qux;
    }

    /**
     * FooQuux gets reverse value of protected method quux
     * @returns a boolean
     */
    fooQuux(): boolean {
        return this.foo(this.quux())
    }

    /**
     * Grault gets value of corge
     * @returns the boolean true
     */
    private grault(): Corge {
        return this.corge;
    }

    /**
     * setGrault sets the value of corge
     * @param corge a Corge value
     */
    setGrault(corge: Corge): void {
        this.corge = corge;
    }

    /**
     * getGrault gets the value of corge
     * @returns a Corge value
     */
    getGrault(): Corge {
        return this.grault();
    }

    /**
     * FooGrault gets reverse value of private method grault
     * @returns a boolean value
     */
    fooGrault(): boolean {
        const corge = this.grault();
        if (corge == true || corge == 1) {
            return this.foo(true);
        }
        return this.foo(false);
    }
}