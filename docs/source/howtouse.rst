How to use
==========

In this section you can find some tips & tricks for learning to use any code.

Instead, if you need to learn `typescript language <https://www.typescriptlang.org/>`_, it is better to read something dedicated like a `book <https://basarat.gitbook.io/typescript/>`_ or a `rich documentation <https://www.typescriptlang.org/docs/>`_.

Unit tests
##########

When you change something on your code, you can run one unit test about that class changed

.. code-block:: bash

    $ cd typescript-prototype
    $ npm test -- tests/myClass.test.ts

And when you are ready for the commit, you can use a command for running all unit tests

.. code-block:: bash

    $ cd typescript-prototype
    $ npm test

But for learning how to use an class in your code, you need to read its unit test file.
You can find the import class, the initialization class, and the main public methods.

MyClass
#######

The precedent approches are the best practice for learning something about a specific package.

Sometimes, the package is so complex, that it is also necessary a "Quick start" where a developer can learn the main classes or methods to start from

So it is a good practice to improve some lines: in this repo you can find a file in the folder `example <https://github.com/bilardi/typescript-prototype/blob/master/example/>`_

.. code-block:: typescript

    import { MyClass } from 'simple-sample';
    console.log(new MyClass(true));

For running the example, you can copy that file in **another folder** as described below

.. code-block:: bash

    $ mkdir example
    $ cp typescript-prototype/example/example.ts example/
    $ cd example
    $ npm install simple-sample
    $ npx ts-node example.ts
