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
// var uploadAPost = new Blogpost({
//                                     title: 'Markdown Previewer',
//                                     author: 'Matt States',
//                                     date: 'May 2016',
//                                     body: 'This app will allow you to format text in real time from a text area input. The markdown preview uses the same markdown rules used at GitHub. You can see this kind of text input implemented on sites that accept user posts–an example would be Reddit',
//                                     exerpt: 'Type plain text while following some simple formatting rules and see the results update dynamically.',
//                                     techused: ['HTML', 'SCSS', 'JavaScript', 'React.js', 'Marked.js', 'Babel.js', 'Bootstrap', 'React-DOM.js'],
//                                     siteURL: 'http://codepen.io/mattstates/full/JXwmjp',
//                                     imageurl: '/assets/images/markdownpreviewer.png'
//                             });

// uploadAPost.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Post was uploaded to the database.');
//       };
// });
///// END USE THIS TO MANUALLY ADD POSTS TO THE DB ////

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Handle resquests and responses to the 'root'.
var sendHomePage = function(req, res) {
    //res.sendFile(path.join(__dirname + 'index.html'));
    res.render('index', {});
}

app.get('/', sendHomePage);
app.get('/about', sendHomePage);
app.get('/portfolio', sendHomePage);
app.get('/contact', sendHomePage);

app.get('/api', function(req, res) {

    Blogpost.find({author: 'Matt States'}, function(err, posts) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(posts.sort());
        //console.log(posts);
    });

});

app.listen(port, function() {
    console.log("this app is listening on port" + port + ".");
});
