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

to be continued ..