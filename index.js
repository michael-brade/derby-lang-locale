module.exports = function () {
  return function (req, res, next) {
    var model = req.getModel();
    var supported = Object.keys(model.get('$lang.dict.strings'));
    model.insert('$locale.supported', 0, supported);
    next();
  };
};
