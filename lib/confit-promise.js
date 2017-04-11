const Confit = require('confit');
const ConfitPromise = (options) => {
    const Factory = Confit(options);
    return new Promise((resolve, reject) => {
        Factory.create((err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};
module.exports = ConfitPromise;
