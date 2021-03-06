var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne ={
title:'Article One|Dilip kumar',
heading:'Article One',
date:'sep 5,2015',
content:`  <p>
                       This is content for article one.This is content for article one.This is content for article one.This is content for article one.
                       </p>
                        <p>
                       This is content for article one.This is content for article one.This is content for article one.This is content for article one.
                       </p>
                        <p>
                       This is content for article one.This is content for article one.This is content for article one.This is content for article one.
                       </p>`
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =`<html>
    <head>
        <title>
            ${date}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
                      </head>
           <body>
              <div class="container">
                   <div>
                   <a href="/">Home</a>
                   </div>
                       <hr/>
                   <h3>
                      ${heading}
                   </h3>
                       <div>
                           ${date}
                       </div>
                   <div>
                     ${content}
                       </div>
                 </div>
                 </body>
                 </html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/artical-one',function(req,res)
{
   res.send(createTemplate(articleOne));
});
app.get('/artical-two',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/artical-three',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
