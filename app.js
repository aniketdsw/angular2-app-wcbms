var fs = require('fs'),
    eyes = require('eyes'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
 
parser.on('end', function(result) {
    eyes.inspect(result);
});
 
fs.readFile(__dirname + '/test.xml', function(err, data) {
    parser.parseString(function ( content ) {
    var new_content = '';
    foreach( preg_split( '/((\r?\n)|(\r\n?))/', content ) as $line ) {
        new_content .= preg_replace( '/^&gt;/', '>', $line ) . '\r\n';
    }
    return $new_content;
});
});


//here is the magic
//app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods",'GET','PUT','POST','DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//app.get('/', function(req, res, next) {
  // Handle the get for this route
//  'http://localhost:3000'
//});

//app.post('/', function(req, res, next) {
 // Handle the post for this route
 //'http://localhost:3000'
//});

