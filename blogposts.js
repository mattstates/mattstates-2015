var mongoose = require('mongoose');

//var mongoDBProd = process.env.MONGOLAB_URI;
var mlabUSER = process.env.mlabUSER;
var mlabPASS = process.env.mlabPASS;

if(!mlabUSER) {
    var pCod = require('./passcodes.js');
} else {
    var mongoDBProd = 'mongodb://'+mlabUSER+':'+mlabPASS+'@ds021299.mlab.com:21299/mattstates_homepage';
    console.log(mongoDBProd);
}

    
var blogpost = {
    
    //DATABASE CONNECTION
    database: mongoDBProd || mongoose.connect('mongodb://'+pCod.mongoDB.username+':'+pCod.mongoDB.password+'@ds021299.mlab.com:21299/mattstates_homepage'),
    //BLOG POST SCHEMA
    BlogPost: mongoose.model('BlogPost', {    
                                    title: String,
                                    author: String,
                                    date: Date,
                                    body: String,
                                    exerpt: String,
                                    techused: Array,
                                    siteURL: String,
                                    imageurl: String
                                })
    
    //BLOG POST DATA TO UPLOAD
    /*var testPost = new BlogPost({   
                                    title: 'Test Post',
                                    author: 'Test Author',
                                    body: 'LOREM IPSUM BLAH',
                                    techused: 'nodeJS'
                                }),*/
    
    //SAVE TO THE DATABASE
    /*testPost.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Post was uploaded to the database.');
      };
    });*/
    
};

module.exports = blogpost;