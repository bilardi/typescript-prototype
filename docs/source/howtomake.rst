How to make
===========

In this section you can find how to generate or publish that helps you with managing your code.

How we create it
################

These steps are only for education propose because you can clone this package for starting with your projects like the description in Getting started section.

The main commands that we used for create the package are

.. code-block:: bash

    $ cd your-typescript-project
    $ npm init -y
    $ tsc --init
    $ npm install --save-dev typescript # install TypeScript as a devDependency in package.json

These commands create `package.json <https://docs.npmjs.com/cli/v7/configuring-npm/package-json>`_ and `tsconfig.json <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>`_ files.

In `this commit <https://github.com/bilardi/typescript-prototype/commit/f7c3e395376537c9abf1cd2cf778bce5d4de7854>`_ you can find a basic change: you can use these configuration files like your start.

The main configuration file is **package.json** that it could contains all you need:

* the main properties named **main**, **types** and `scripts <https://docs.npmjs.com/cli/v7/using-npm/scripts>`_
* outline properties named **directories**, **engines**, **repositories** and **bugs**
* and then, some properties to improve your code: `jest <https://jestjs.io/>`_ for your TDD and `eslintConfig <https://eslint.org/>`_ for linting

TDD
###

Before write code, it is important to verbalize the concepts by documentation and to create Test Driven Development (TDD) for your code. Then, it is important to use unit test for finding the issues and before to update change log file and package version.

See the development of this code step by step on `readthedocs / step by step <https://simple-ts-sample.readthedocs.io/en/latest/stepbystep.html>`_ for learning how to make a unit test.

You can install your npm tests package using npm: below there is the installation command of the test framework used in this sample

.. code-block:: bash

    $ cd your-typescript-project
    $ npm install --save-dev jest @types/jest ts-jest jest-extended # install Jest as a devDependency in package.json

Linting
#######

When you write your code, you can use any editor: code editor or not, with autocompile or not, with plugin for improving your code or not.

The best practice is to use a static program analysis for identifing the main mistakes of form:

* if one variable is initialized with ``let`` but then it is not modified, you might consider using ``const``
* if you have defined to use only doublequote, a static program analysis can help you for this

You can install your npm lint package using npm: below there is the installation command of the lint framework used in this sample

.. code-block:: bash

    $ cd your-typescript-project
    $ npm install --save-dev eslint @typescript-eslint/eslint-plugin@latest # install ESlint as a devDependency in package.json

Scripts
#######

In the file named **package.json** there is an important section: scripts.

In this section, you can define your specific commands that npm will run for you when you run

* a command with the format like ``npm run <name-of-your-property>``
* a standard command for the operation on life cycle (see details in the `scripts documentation page <https://docs.npmjs.com/cli/v7/using-npm/scripts>`_)

There are many methods to define what you want to do for each step of package life:

* you can use only the section **scripts**
* you can also use a **Makefile** so the section scripts will have kept slim
* another way it is to keep separated the section scripts and Makefile

It is a choice to force everybody uses your specific commands:
in this repo, there are a Makefile uses the section scripts, so they are separated.

Packaging
#########

The tutorial for `packaging your projects <https://docs.npmjs.com/cli/v7/using-npm/developers>`_ is standard. And then your package is public on `npm <https://www.npmjs.com/>`_.

The main commands for testing your package,

.. code-block:: bash

    $ cd typescript-prototype
    $ npm link src
    $ cd example
    $ npm link simple-sample # locally simulates npm install
    $ npx ts-node example.ts
    $ cd -

It is a best practice to test everything before to publish,
so this repo has a `Makefile <https://github.com/bilardi/typescript-prototype/blob/master/Makefile>`_
with some commands for testing all locally but not only:

.. code-block:: bash

    $ make help # for printing the commands list
    $ make itest # for testing all locally

If you have no problem, but this is a beta version, you can publish with

.. code-block:: bash

    $ npm publish --beta
    $ # or
    $ make btest # run all tests and then publish a beta version of the package

If you have any issue, you can try to create the package locally to investigate the problem

.. code-block:: bash

    $ run pack # locally generates a tarball of everything that will get sent to and published on npm
    $ # or
    $ make ptest # run all tests and then generate the package

The main commands for publishing your package

.. code-block:: bash

    $ npm publish
    $ # or
    $ make build # run all tests and then publish the package
