(function()
{
  var Stylo = function(scope)
  {
    var _instance = this;
    var _scope = scope != "" ? scope + " " : "";

    var _styleSheet = document.createElement("style");

    document.head.appendChild(_styleSheet);

    var _rules = {};

    _instance.update = function()
    {
      var stylesheet = "";

      for (var selector in _rules)
      {
        var scoped = "";

        if(_scope != "")
        {
          scoped = _scope + selector.replace(",","," + _scope);
        }
        else
        {
          scoped = selector;
        }

        stylesheet += scoped + "{";
        var rules = _rules[selector];

        for (var prop in rules)
        {
          stylesheet += prop + ":" + rules[prop] + ";";
        }

        stylesheet += "}";
      }

      _styleSheet.textContent = stylesheet;
    }

    _instance.addRule = function(selector, rules)
    {
      if (_rules[selector] == undefined)
      {
        _rules[selector] = {};
      }
      for (var rule in rules)
      {
        _rules[selector][rule] = rules[rule];
      }
    }
  }
  
  this.Stylo = Stylo;
})();
