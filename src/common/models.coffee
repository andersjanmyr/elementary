class Page
  constructor: (@name, layout='default-page', @stylesheet='main.css') ->
    if layout.indexOf('{{') >= 0
      @layout = new Layout(layout)

    @blocks = []

  layoutText: ->
    @layout.text



class Block
  constructor: (@name, @layout='default-block') ->
    @elements = []


class Element
  constructor: (@name, @layout='default-element') ->

class Layout
  constructor: (@text) ->

  @fromTemplate: (template) ->
    new Layout(template)

exports.Page = Page
exports.Block = Block
exports.Element = Element

