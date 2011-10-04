(function() {
  var recalc;
  $(document).ready(function() {
    var i, _results;
    for (i = 0; i <= 11; i++) {
      $("#char-" + i).css("opacity", 0.3);
    }
    _results = [];
    for (i = 0; i <= 2; i++) {
      _results.push($("#info-" + i).css("opacity", 0.3));
    }
    return _results;
  });
  recalc = function(elem, e) {
    var d, dmax;
    d = Math.abs(elem.offset().left + elem.width() / 2 - e.clientX);
    dmax = 200;
    return elem.css("opacity", d > dmax ? 0.3 : (-0.7 / dmax) * d + 1);
  };
  document.onmousemove = function(e) {
    var i, _results;
    for (i = 0; i <= 11; i++) {
      recalc($("#char-" + i), e);
    }
    _results = [];
    for (i = 0; i <= 2; i++) {
      _results.push(recalc($("#info-" + i), e));
    }
    return _results;
  };
}).call(this);
