# incremean

Provides a method to compute an arithmetic mean incrementally.

## Installation

``` sh
npm install incremean
```

## Usage

To use the module,

``` javascript
var Incremean = require('incremean');
```

**incremean()** - returns an initialized method to compute an arithmetic mean incrementally.

``` javascript
var mean = Incremean();
```

**mean(number[]): number** - if provided arguments, the method updates and returns the updated mean value. If provided no arguments, the method returns the current mean value.

``` javascript
mean(1); // 1
mean(2); // 1.5

console.log(mean(3));
// returns 2

mean(4, 5); // 3

console.log(mean());
// returns 3
```

## Examples

``` javascript
var Incremean = require('incremean');

// Initialize a method to calculate the mean incrementally:
var mean = Incremean();

// Simulate some data...
for (var i = 0; i < 1000; i++) {
  mean(Math.random() * 100);
}

console.log( mean() );
// returns ~0.5
```

## Example with Typescript

Package contains typescript definitions. No need to install @types separately.

``` typescript
import Incremean = require('incremean');

// Use one counter for a certain parameter.
const average1 = Incremean();
average1(1, 2, 3);
average1(4, 5);

// Use another counter to the values of other parameters.
const average2 = Incremean();
average2(80, 54, 130);
average2(11);
average2(123);

console.log('average1', average1());
console.log('average2', average2());
```
