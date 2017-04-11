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

## API

`ConfitMerger(options)`

* `options` - (*Object*) - (required) - Options for confit merger

    - `paths` - (*Array) - (required) - The list of absolute paths of the `basedir` of the config files (`basedir` is the directory in which confg files can be located).

    - `protocols` - (*Object) - (optional) - An object containing the details of [shortstop](https://github.com/krakenjs/shortstop) protocols to be added in addition to the default [shortstop-handlers](https://github.com/krakenjs/shortstop-handlers).
