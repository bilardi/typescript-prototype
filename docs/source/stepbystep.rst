Step by step
============

This page is for learning all steps that they are necessary for writing a simple package like simple-sample.

see-git-steps
#############

The package `see-git-steps <https://github.com/bilardi/see-git-steps>`_ has been written for reading piece by piece the commits of a git repository.

If you want to use it, you have to install it following its README.md.

Getting started
###############

The goal of the package simple-sample is to create a TypeScript package prototype. 
So you can use this simple package for downloading a base for your package.

Step 1
******

The first step is to add all the outline files for your package

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps
    179811d93b9fcc77c0fdb76ba53102cfdbe2e8d9 step 1 - add the outline files
    .gitignore
    .npmignore
    CHANGELOG.md
    LICENSE
    MANIFEST.in
    Makefile
    README.md
    README.rst
    package-lock.json
    package.json
    tsconfig.json

They are important files and below you can find a link of a guide for each file

* `.gitignore <https://git-scm.com/docs/gitignore>`_, to ignore specific files when you have to commit
* `.npmignore <https://npm.github.io/publishing-pkgs-docs/publishing/the-npmignore-file.html>`_, to ignore specific files when you have to publish the package
* `CHANGELOG.md <https://keepachangelog.com/en/1.0.0/>`_, the  best practise for reading the minor o major change of your code
* `LICENSE <https://help.github.com/en/github/building-a-strong-community/adding-a-license-to-a-repository>`_, the best practise for defining your policy for the public repository
* `MANIFEST.in <https://packaging.python.org/guides/using-manifest-in/>`_, documentation included into your package
* `Makefile <https://www.gnu.org/software/make/manual/make.html>`_, it is not necessary but it is a comfortable way to remember procedures
* `README.md <https://en.wikipedia.org/wiki/Markdown>`_, documentation visible on your repository homepage and `package page <https://www.npmjs.com/package/simple-sample>`_
* `README.rst <https://en.wikipedia.org/wiki/ReStructuredText>`_, documentation visible on readthedocs
* `package-lock.json <https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json>`_, it describes the exact tree of the packages used
* `package.json <https://docs.npmjs.com/cli/v7/configuring-npm/package-json>`_, it describes the requirements and behaviour of the package
* `tsconfig.json <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>`_, it describes the requirements to compile the package

The files that you have to customize are

* **.gitignore**, for example, if you use an ide with specific files extension
* **LICENSE**, with year and your name
* **Makefile**, with your PACKAGE_NAME and YOUR_USERNAME of `npm <https://www.npmjs.com/>`_
* **README.md** / **README.rst**, with your quick start documentation

For initializing a npm package,

.. code-block:: bash

    $ cd typescript-prototype
    $ npm init -y # create package.json
    $ tsc --init # create tsconfig.json
    $ npm install --save-dev typescript # install TypeScript as a devDependency in package.json

When you have modified, you can commit your first change

.. code-block:: bash

    $ cd typescript-prototype
    $ git init # for initializing the repository
    $ git add .gitignore CHANGELOG.md LICENSE MANIFEST.in Makefile README.md *json
    $ git commit -m "step 1 - add the outline files"

Step 2
******

The second step is to custom the configuration files with what you need for creating your package

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps
    f7c3e395376537c9abf1cd2cf778bce5d4de7854 step 2 - update configuration files
    package-lock.json
    package.json
    tsconfig.json

For testing and linting your code, you have to install some packages

.. code-block:: bash

    $ cd typescript-prototype
    $ npm install --save-dev jest @types/jest ts-jest jest-extended # install Jest as a devDependency in package.json
    $ npm install --save-dev eslint @typescript-eslint/eslint-plugin@latest # install ESlint as a devDependency in package.json

Those commands update the configuration files, and for packaging your code, you have to define some other variables

* **package.json**, where you find variables like name, description and scripts
* **tsconfig.json**, where you find variables like outDir, rootDir and exclude

See the changes these configuration files by `GitHub <https://github.com/bilardi/typescript-prototype/commit/f7c3e395376537c9abf1cd2cf778bce5d4de7854>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd python-prototype
    $ see-git-steps -c f7c3e395376537c9abf1cd2cf778bce5d4de7854 -v

The file **package-lock.json** is automatically generated.

When you have modified the configuration files, you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add *json
    $ git commit -m "step 2 - update configuration files"

Step 3
******

Before write code, it is important to verbalize the concepts by documentation:
so the documentation is important to learn a package as to plan how to write the code.

You can write your documentation as you want: you can create docs folder like in this package, by `sphinx <https://simple-sample.readthedocs.io/en/latest/howtomake.html#documentation>`_.

You can also write an example of code that it uses your future package, that you will use for testing each your new release.

When you have created your documentation, you can add the new folder and you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add docs example
    $ git commit -m "step 3 - add documentation by sphinx and example"

When a commit completes one feature or a set of fixies, you can tag that commit as a release.
The standard behaviour is to add changes in a CHANGELOG file: see the changes of **CHANGELOG.md** by `GitHub <https://github.com/bilardi/typescript-prototype/commit/0a6442f798934183b36167246eef5d103194b432>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c 0a6442f798934183b36167246eef5d103194b432 -v | head -n 34 | tail -n 17 # for CHANGELOG.md details

So you can add CHANGELOG.md on your last commit, or you can create one commit for changelog, and then you can add the tag.

.. code-block:: bash

    $ cd typescript-prototype
    $ git add CHANGELOG.md
    $ git commit --amend # add file on your last commit
    $ git tag v0.0.1 -m "Empty package and documentation by sphinx" # create a tag with that version name
    $ git tag -n # show the tag list with description
    $ git push origin --tags # load the tag on repository

Step 4
******

Before write code, it is important to verbalize the methods by create Test Driven Development (TDD) for your code.
Then, it is important to use unit test for finding the issues and before to update change log file and package version.

In TypeScript, there are many TDD frameworks: in this repo is used `Jest <https://jestjs.io/>`_.

Natively, Typescript does not allow to instantiate an abstract class or an interface.

So the tests are only on the final public functions: see the unit tests by `GitHub <https://github.com/bilardi/typescript-prototype/commit/4bf512b2f38372cd2eb97b7006131dfb5dd62f98>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c 4bf512b2f38372cd2eb97b7006131dfb5dd62f98 -v

When you have created **tests/myClass.test.ts**, you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add tests/myClass.test.ts
    $ git commit -m "step 4 - add the unit test"

Step 5
******

Now you can write your first code: see myClassAbstract by `GitHub <https://github.com/bilardi/typescript-prototype/commit/48a7b214cff13cd179dbdfa404895dc96521acfb>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c 48a7b214cff13cd179dbdfa404895dc96521acfb -v

A class abstract cannot be instantiated, so you cannot test directly.

When you have created src/myClassAbstract.ts, you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add src/myClassAbstract.ts
    $ git commit -m "step 5 - add myClassAbstract"

Step 6
******

Now you can write your second code: see myInterface by `GitHub <https://github.com/bilardi/typescript-prototype/commit/f4c3acf94b79d4939436204cf30d5c116d98c553>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c f4c3acf94b79d4939436204cf30d5c116d98c553 -v

An interface can only be extended, so you cannot test directly.

When you have created src/myInterface.ts, you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add src/myInterface.ts
    $ git commit -m "step 6 - add myInterface"

Step 7
******

Now you can write your third code: see myType by `GitHub <https://github.com/bilardi/typescript-prototype/commit/ac1ae35f85bba8cab099dae166b8b4f772fa9a01>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c ac1ae35f85bba8cab099dae166b8b4f772fa9a01 -v

A functional test for a type is to use it, so you can test directly on myClass.

When you have created src/myType.ts, you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add src/myType.ts
    $ git commit -m "step 7 - add myType"

Step 8
******

After verbalizing all functions by the unit tests, after to write myClassAbstract, myInterface and myType,
you are ready to write myClass and the index: see new files by `GitHub <https://github.com/bilardi/typescript-prototype/commit/fce06f494a319e2a282d282e1c5905941db61505>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c fce06f494a319e2a282d282e1c5905941db61505 -v

When you have created new files, you can run all unit tests

.. code-block:: bash

    $ cd typescript-prototype
    $ npm run test

    > simple-sample@0.0.1 test
    > jest

    PASS  tests/myClass.test.ts
    Simple tests
        ✓ Passes when MyClass can be instantiated (3 ms)
    Functional tests
        ✓ Passes when baz returns a boolean
        ✓ Passes when foo returns the reverse value of its input (1 ms)
        ✓ Passes when getBar returns the value of bar
        ✓ Passes when fooBar returns the reverse value of bar (1 ms)
        ✓ Passes when fooQuux returns the reverse value of qux
        ✓ Passes when getGrault returns the value of corge (2 ms)
        ✓ Passes when fooGrault returns the reverse value of corge (1 ms)

    Test Suites: 1 passed, 1 total
    Tests:       8 passed, 8 total
    Snapshots:   0 total
    Time:        1.708 s
    Ran all test suites.

If all test is OK, you can add the new file and you can commit your changes

.. code-block:: bash

    $ cd typescript-prototype
    $ git add src/myType.ts
    $ git commit -m "step 8 - add index, myClass and unit tests works properly"

Step 9
******

You are completed the package, so you can tag that commit as a release.
This step could be run every time you complete a class with its unit test.
The files that you have to update are **CHANGELOG.md**, **docs/source/conf.py**, **package.json** and **package-lock.json**, because they contain version number.
See the changes by `GitHub <https://github.com/bilardi/typescript-prototype/commit/1a2933a6351d04fc20935e471a95d1d8ea27a695>`_ or by command line with see-git-steps

.. code-block:: bash

    $ cd typescript-prototype
    $ see-git-steps -c 1a2933a6351d04fc20935e471a95d1d8ea27a695 -v

The files named package.json and package-lock.json have 3 points where update them, you can use a command of npm

.. code-block:: bash

    $ cd typescript-prototype
    $ npm version --no-git-tag-version minor

So you can add the files updated, you can create a commit dedicated, and then you can add the tag.

.. code-block:: bash

    $ cd typescript-prototype
    $ git add CHANGELOG.md docs/source/conf.py package.json package-lock.json
    $ git commit -m "step 9 - update changelog and version of the simple-sample package"
    $ git push origin master # load the commit on remote repository
    $ git tag v0.1.0 -m "The first full version of the simple-sample package" # create a tag with that version name
    $ git tag -n # show the tag list with description
    $ git push origin --tags # load the tag on repository

Step 10
*******

If you want to publish the package on npm, you have to

* remove the line ``"private": true,`` on **package.json**
* run all steps locally (see paragraph **Packaging** in the section named :ref:`How to make <How to make>`)
* decide if you want to publish a beta version or stable
