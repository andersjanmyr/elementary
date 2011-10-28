express = require 'express'
jade = require 'jade'
io = require 'socket.io'


app = express.createServer()
io.listen(app)

app.configure ->
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static "#{__dirname}/../public"
  app.set('views', "#{__dirname}/../views")
  app.set('view engine', 'jade')
  app.set('view options', { layout: false })

app.get '/', (req, resp) ->
  resp.render 'index'

port = process.env.PORT or process.env.VMC_APP_PORT or 4000 

console.log(process.env);
console.log "Starting on port #{port}"
console.log "Serving files from #{__dirname}/../public"
app.listen(port)

timestamp = ->
  d = new Date
  date = "#{d.getFullYear()}-#{d.getMonth()+1}-#{d.getDate()}"
  time = "#{d.getHours()}:#{d.getMinutes()}:#{d.getSeconds()}"
  "#{date} #{time}"


