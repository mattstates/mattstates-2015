var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var mongoose = require('mongoose');
//var pCod = require('./passcodes.js');
var Blogpost = require('./blogposts.js').BlogPost;

var port = process.env.PORT || 3000
if(process.env.PORT) {
    var mlabUSER = process.env.mlabUSER;
    var mlabPASS = process.env.mlabPASS;
}

///// USE THIS TO MANUALLY ADD POSTS TO THE DB ////
/*var uploadAPost = new Blogpost({   
                                    title: 'Simon App',
                                    author: 'Matt States',
                                    date: 'February 2016',
                                    body: 'This app was a project requirement for the Free Code Camp Front End Development Certificate. It is a throwback to the game Simon from the eighties.',
                                    exerpt: 'The game Simon from the eighties in JavaScript!',
                                    techused: ['HTML', 'CSS', 'JavaScript'],
                                    siteURL: 'http://codepen.io/mattstates/full/xVGeyo',
                                    imageurl: '/assets/images/simonapp.png'
                            });*/

/*uploadAPost.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Post was uploaded to the database.');
      };
});*/
///// END USE THIS TO MANUALLY ADD POSTS TO THE DB ////

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Handle resquests and responses to the 'root'.
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + 'index.html'));
    res.render('index', {});
});

app.get('/api', function(req, res) {
    
    Blogpost.find({author: 'Matt States'}, function(err, posts) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(posts);
        //console.log(posts);
    });
    
});

app.listen(port, function() {
    console.log("this app is listening on port" + port + ".");
});