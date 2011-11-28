(function() {
  var Block, Element, Layout, Page;

  Page = (function() {

    function Page(name, layout, stylesheet) {
      this.name = name;
      if (layout == null) layout = 'default-page';
      this.stylesheet = stylesheet != null ? stylesheet : 'main.css';
      if (layout.indexOf('{{') >= 0) this.layout = new Layout(layout);
      this.blocks = [];
    }

    Page.prototype.layoutText = function() {
      return this.layout.text;
    };

    return Page;

  })();

  Block = (function() {

    function Block(name, layout) {
      this.name = name;
      this.layout = layout != null ? layout : 'default-block';
      this.elements = [];
    }

    return Block;

  })();

  Element = (function() {

    function Element(name, layout) {
      this.name = name;
      this.layout = layout != null ? layout : 'default-element';
    }

    return Element;

  })();

  Layout = (function() {

    function Layout(text) {
      this.text = text;
    }

    Layout.fromTemplate = function(template) {
      return new Layout(template);
    };

    return Layout;

  })();

  exports.Page = Page;

  exports.Block = Block;

  exports.Element = Element;

}).call(this);
