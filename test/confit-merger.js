const Test = require('ava');
const ConfitMerger = require('../index');
const Path = require('path');

Test('basic merger', t => {

    return ConfitMerger( {
        paths: [
            Path.resolve(__dirname, 'fixtures', 'config'),
            Path.resolve(__dirname, 'fixtures', 'moduleconfig')
        ]
    }).then(confit => {
        t.truthy(confit);
        t.is(confit.get('a'), 'hello from module config');
        t.is(confit.get('b'), 'hi from default config');
        t.is(confit.get('c'), 'hi from module config');
    });
});

Test('Three level confit merger', t => {

    return ConfitMerger( {
        paths: [
            Path.resolve(__dirname, 'fixtures', 'config'),
            Path.resolve(__dirname, 'fixtures', 'moduleconfig'),
            Path.resolve(__dirname, 'fixtures', 'appconfig')
        ]
    }).then(confit => {
        t.truthy(confit);
        t.is(confit.get('a'), 'hello from app config');
        t.is(confit.get('b'), 'hi from default config');
        t.is(confit.get('c'), 'hi from module config');
        t.is(confit.get('d'), 'hi from app config');
    });
});
