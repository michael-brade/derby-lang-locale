module.exports = function () {
  return function (req, res, next) {
    var model = req.getModel();
    var supported = Object.keys(model.get('$lang.translations'));
    model.push('$locale.supported', supported);
    next();
  };
};