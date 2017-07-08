# LoveFlies
Loving-heart-flying animation.

## Demo
![demo](https://raw.githubusercontent.com/shenfe/LoveFlies/master/readme_assets/demo.png)
 
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
