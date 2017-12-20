# incremean

> Provides a method to compute an arithmetic mean incrementally.

## Installation

``` sh
npm install incremean
```

## Usage

To use the module,

``` javascript
var incremean = require('incremean');
```

**incremean()** - returns an initialized method to compute an arithmetic mean incrementally.

``` javascript
var mean = incremean();
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
var incremean = require('incremean');

// Initialize a method to calculate the mean incrementally:
var mean = incremean();

// Simulate some data...
for (var i = 0; i < 1000; i++) {
  mean(Math.random() * 100);
}

console.log( mean() );
// returns ~0.5
```
