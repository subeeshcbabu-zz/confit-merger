const ConfitPromise = require('./lib/confit-promise');
const Handlers = require('shortstop-handlers');
const Debuglog = require('util').debuglog;
const Debug = Debuglog('confit-merger');

//Default protocols
const Protocols = (basedir) => ({
    file:    Handlers.file(basedir),
    path:    Handlers.path(basedir),
    base64:  Handlers.base64(),
    env:     Handlers.env(),
    require: Handlers.require(basedir),
    exec:    Handlers.exec(basedir),
    glob:    Handlers.glob(basedir)
});

const Merger = ({ paths }) => {

    Debug(`Merging confit for paths ${paths}`);
    //Map the path to confit promise objects
    const configs = paths.map(basedir => {
        const protocols = Protocols(basedir);
        return ConfitPromise({ basedir, protocols });
    });
    //Reduce the array of promise to single promise after merging the confit
    return configs.reduce((baseFactory, overrideFactory) => {
        //Get the base confit and the override confit factory objects.
        return baseFactory.then((baseConfit) => {
            return overrideFactory.then(newConfit => {
                baseConfit.merge(newConfit);
                return baseConfit;
            });
        });
    });
};
module.exports = Merger;
