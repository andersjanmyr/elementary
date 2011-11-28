Handlebars = require 'handlebars'

class Engine
  
  renderPage: (page, data) ->
    template = Handlebars.compile(page.layoutText());
    html = template(data)

exports.Engine = Engine

