# LoveFlies
Loving-heart-flying animation.

## Demo
[Demo](http://hengwu.me/repos/LoveFlies/demo.html)
 
## Usage
```js
var loveFlyCreator = require('path/to/loveflies.js');
$trigger.addEventListener(
    'click',
    function (e) {
        loveFlyCreator($container, {
            type: 'text',
            scaleFrom: 0.2,
            scaleTo: 1
        });
    },
    false);
```
