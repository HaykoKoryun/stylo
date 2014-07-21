(function()
{
    var Styler = function()
    {
        var _instance = this;

        var _styleSheet = document.createElement("style");
		
        document.head.appendChild(_styleSheet);

        var _rules = {};

        this.update = function()
        {
            var stylesheet = "";

            for(var selector in _rules)
            {
                stylesheet += selector + "{";
                var rules = _rules[selector];

                for(var prop in rules)
                {
                    stylesheet += prop + ":" + rules[prop] + ";";
                }

                stylesheet += "}";
            }

            _styleSheet.textContent = stylesheet;
        }

        this.addRule = function(selector, rules)
        {
            if(_rules[selector] == undefined)
            {
                _rules[selector] = {};
            }
            for(var rule in rules)
            {
                _rules[selector][rule] = rules[rule];
            }
        }
    }
	
	this.Styler = Styler;
})();