var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var pCod = require('./passcodes.js');
//var database = require('./blogposts.js').database;
var Blogpost = require('./blogposts.js').BlogPost;

var port = process.env.PORT || 3000
///// USE THIS TO MANUALLY ADD POSTS TO THE DB ////
var uploadAPost = new Blogpost({   
                                    title: 'Video Poker 2015',
                                    author: 'Matt States',
                                    date: 'July 2015',
                                    body: 'This was a game I wanted to program from the ground up usign HTML, CSS, and JavaScript without any libraries or frameworks. I did borrow some CSS for the background textures and the textures for the poker chips, but the rest was done without so much as a Stack Overflow search. I should go through the code base and refactor it and spruce up the design overall. My main goal was to make it look good on iOS and I think I accomplished that.',
                                    exerpt: 'A video poker game in vanilla JavaScript.',
                                    techused: ['HTML', 'CSS', 'JavaScript'],
                                    siteURL: 'http://musicpants.net/webapps/video-poker/',
                                    imageurl: '/assets/images/videopoker2015.png'
                            });

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

//Handle resquests and responses to the 'root'.
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + 'index.html'));
    res.render('index', {});
});

app.get('/api', function(req, res) {
    
    Blogpost.find({author: 'Matt States'}, function(err, posts) {
        if (err) throw err;
        res.send(posts);
        console.log(posts);
    });
    
});

app.listen(port, function() {
    console.log("this app is listening on port 3000!");
});