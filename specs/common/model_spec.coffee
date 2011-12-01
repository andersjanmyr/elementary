req = (name) ->
  path = "#{__dirname}/../../lib/#{name}"
  console.log path
  require path

{Page} = req 'models'
describe 'Page', ->
  it 'should hold a layout', ->
    page = new Page('page', '{{title}}')
    expect(page.layout).toBeDefined()
    

