var connect = require('connect');
var sassMiddleware = require('node-sass-middleware'); 
var autoprefixer = require('autoprefixer');
var browserslist = require('browserslist');
var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/styles';

var serveStatic = require('serve-static'); 
var http = require('http');
var port = process.env.PORT || 8000;
var app = connect();
app.use('/styles', sassMiddleware({ 
  plugins: [
    /* Plugins */
    autoprefixer({
      grid: "autoplace", 
    })
  ],
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded' 
})); 
app.use('/',
  serveStatic('./public', {})
);
http.createServer(app).listen(port);
console.log('Server listening on port ' + port);
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);

console.log(autoprefixer().info());
