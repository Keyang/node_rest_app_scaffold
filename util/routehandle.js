var _ = require("lodash");
module.exports = function(func, argPaths) {
  return function(req, res, next) {
    var args = _.map(argPaths, function(path) {
      return _.get(req, path);
    });

    function callback(err, r) {
      if (err) {
        if (err.code) {
          res.status(err.code);
          next(err.message);
        } else {
          next(err);
        }
      } else {
        if (!r) {
          r = {};
        }
        res.json(r);
      }
    }
    args.push(callback);
    args.push(req);
    args.push(res);
    args.push(next);
    var prom = func.apply({}, args);
    if (prom && prom.then) {
      prom.then(function(){
        var args=Array.prototype.slice.call(arguments,0);
        args.unshift(null);
        callback.apply({},args);
      },callback);
    }
  }
}
