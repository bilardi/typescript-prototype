# Typescript prototype

This package contains a simple sample of a Typescript package prototype.
It is part of the [educational repositories](https://github.com/pandle/materials) to learn how to write stardard code and common uses of the TDD.

See the documentation and how to do it on [readthedocs](https://simple-ts-sample.readthedocs.io/en/latest/).
And see the development of this code step by step

* with [see-git-steps](https://github.com/bilardi/see-git-steps)
* on [readthedocs / step by step](https://simple-ts-sample.readthedocs.io/en/latest/stepbystep.html)

## Installation

The package is not self-consistent: it needs to install [npm](https://www.npmjs.com/get-npm), the [Node Package Manager](https://docs.npmjs.com/cli/v6/commands).

And then you can download the package by github:

```
$ git clone https://github.com/bilardi/typescript-prototype
```

Or you can install by npm:

```
$ npm install simple-sample
```

## Usage

Read the unit tests in [tests/myClass.test.py](tests/myClass.test.ts) file to use it. This is a best practice.

```typescript
import { MyClass } from 'simple-sample';
console.log(new MyClass(true));
```

## Development

It is common use to test the code step by step and unittest module is a good beginning for unit test and functional test.

Test with unittest module

```
$ cd typescript-prototype
$ npm run test # see package.json for other details
```

Test all the other steps

```
$ cd typescript-prototype
$ make ptest # see Makefile for other details
```

## Change Log

See [CHANGELOG.md](CHANGELOG.md) for details.

## License

This package is released under the MIT license.  See [LICENSE](LICENSE) for details.
