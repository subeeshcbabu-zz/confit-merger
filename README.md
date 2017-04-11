# confit-merger

A utility module to merge environment-aware [confit](https://github.com/krakenjs/confit) based configurations.

Please read these documents on [confit](https://github.com/krakenjs/confit):

- https://github.com/krakenjs/confit#usage

- https://github.com/krakenjs/confit#config-api

- https://github.com/krakenjs/confit#default-behavior

## Usage

```javascript
    const ConfitMerger = require('confit-merger');

    ConfitMerger( {
        paths: [
            Path.resolve('path/to/default/config'),
            Path.resolve('path/to/module/config'),
            Path.resolve('path/to/app/config')
        ]
    }).then(config => {

        // `config` is the Merged confit object.
        console.log(config.get('a'));
    });
```
