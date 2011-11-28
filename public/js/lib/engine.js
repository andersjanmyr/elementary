(function() {
  var Engine, Handlebars;

  Handlebars = require('handlebars');

  Engine = (function() {

    function Engine() {}

    Engine.prototype.renderPage = function(page, data) {
      var html, template;
      template = Handlebars.compile(page.layout());
      return html = template(data);
    };

    return Engine;

  })();

  exports.Engine = Engine;

}).call(this);
