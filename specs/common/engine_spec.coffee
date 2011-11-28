req = (name) ->
  path = "#{__dirname}/../../lib/#{name}"
  console.log path
  require path

{Engine} = req 'engine'
{Page} = req 'models'

describe 'Page', ->
  it 'should render a layout', ->
    engine = new Engine
    page = new Page('page', '{{title}}')
    console.log('dingo', page.layoutText())
    html = engine.renderPage(page, {title: 'Title'}) 
    expect(html).toBe('Title')
    console.log html
    

