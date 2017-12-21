# incremean

Serializable object that calculates the arithmetic mean incrementally.

## Installation

``` sh
npm install incremean
```

## Usage

``` javascript
var Incremean = require('incremean').default;
// or in es6 style:
import Incremean from 'incremean';

var avg = new Incremean();

avg.add(1);
// 1
avg.add(2);
// 1.5
avg.add(3);
// 2
avg.add(4);
// 2.5
avg.add(5, 6, 7, 8, 9, 10);
// 5.5
// and you can check this: (1+2+3+4+5+6+7+8+9+10)/10 = 5.5

var json = JSON.stringify(avg);
// '{"counter":10,"mean":5.5,"MAX_VAULUE_EXCEEDED":false}'

var avgRestored = Incremean.restore(json);
// Incremean { counter: 10, mean: 5.5, MAX_VAULUE_EXCEEDED: false }

avgRestored.add(50);
// 9.545454545454545
// check: (1+2+3+4+5+6+7+8+9+10+50)/11 = 9.545454545454545

var serialized = avgRestored.marshal();
// '[11,9.545454545454545,false]'

var avgUnserialized = Incremean.unmarshal(serialized);
// Incremean {
//  counter: 11,
//  mean: 9.545454545454545,
//  MAX_VAULUE_EXCEEDED: false }

// avgUnserialized.add(...) and so on...
```
