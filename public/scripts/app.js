
var testArray = [
    {
        _id: "56f5a8a12737a9ed1469817d",
        title: "The Hollow Trees",
        author: "Matt States",
        date: "2015-10-01T07:00:00.000Z",
        body: "This project was a redesign and WordPress migration for a local children's folk band called the Hollow Trees. I managed the content migration and adapted it into the WordPress framework ensuring that the content was responsive. I was also tasked with modifying the provided theme to match the designer's comps including keeping the design responsive at various screen sizes.",
        exerpt: "A complete redesign and migration to WordPress for a local children’s folk band.",
        siteURL: "http://thehollowtrees.com",
        imageurl: "/assets/images/thehollowtrees.png",
        __v: 0,
        techused: [
            "WordPress",
            "HTML",
            "CSS",
            "MailChimp",
            "Photoshop"
        ]
    },
    {
        _id: "56f5ab657893d0fb14ce1eb4",
        title: "In the Mood Live",
        author: "Matt States",
        date: "2015-12-01T08:00:00.000Z",
        body: "I was provided with a design comp and a theme from ThemeForest to incorporate the design changes to. In addition to structure and style changes, the site owner had requested some custom functionality to modify how the theme's calendar worked with their show's specific needs. I worked with the existing theme's codebase to change how some of the dates and information was laid out on some of the inner pages. I also worked with the Advanced Custom Fields plugin to add meta boxes feeding that info to a WP Query to meet the functionality requests.",
        exerpt: "A redesign for a 1940's big band musical revue",
        siteURL: "http://inthemoodlive.com",
        imageurl: "/assets/images/inthemoodlive.png",
        __v: 0,
        techused: [
            "WordPress",
            "HTML",
            "CSS",
            "PHP",
            "Photoshop"
        ]
    },
    {
        _id: "56f5ac6eca8f2405158779b6",
        title: "Danger Date",
        author: "Matt States",
        date: "2016-01-01T08:00:00.000Z",
        body: "Danger Date is a dating web site for people involved in first-responder occupations. This site was put together to collect information from people who would be interested in such a site. I was given a design comp and needed to get a form on the page to match it. In addition to that the form needed to send the collected information to the client's MailChimp account and let her know when people had joined the mailing list. I matched the design comp and made necessary adjustments to keep things responsive for mobile.",
        exerpt: "A working mockup for a site beta.",
        siteURL: "http://dangerdate.com",
        imageurl: "/assets/images/dangerdate.png",
        __v: 0,
        techused: [
            "WordPress",
            "HTML",
            "CSS",
            "MailChimp"
        ]
    },
    {
        _id: "56f5ae58b044d01115c9d21c",
        title: "Guardian SSI",
        author: "Matt States",
        date: "2016-02-01T08:00:00.000Z",
        body: "Guardian SSI is a company that sells specialized over-the-oven fire extinguishers. Their old site was built on WordPress but the theme was built custom for them so some support and features were lacking. This was an interesting job working with the old code base and seeing a lot of commented out boiler plate and a mix of \"best practices.\" Since a lot of the WordPress work I am tasked with is working with conservative budgets, I usually have to make do with as much of the client's legacy code as possible. In this project there were some dynamic tables populated from some custom grouping and post types behind the scenes. Guardian wanted to keep that functionality, but it was a mixed bag of code in the page templates with PHP, jQuery, and vanilla JavaScript. In the end everything was hooked up and working, matched the design comps responsively, and looking amazing!",
        exerpt: "Moving from an older unresponsive WordPress site to a more modern design.",
        siteURL: "http://guardianssi.com",
        imageurl: "/assets/images/guardianssi.png",
        __v: 0,
        techused: [
            "WordPress",
            "HTML",
            "CSS",
            "PHP",
            "JavaScript",
            "jQuery"
        ]
    },
    {
        _id: "56f5b0a33051262d1530b5da",
        title: "Video Poker 2015",
        author: "Matt States",
        date: "2015-07-01T07:00:00.000Z",
        body: "This was a game I wanted to program from the ground up usign HTML, CSS, and JavaScript without any libraries or frameworks. I did borrow some CSS for the background textures and the textures for the poker chips, but the rest was done without so much as a Stack Overflow search. I should go through the code base and refactor it and spruce up the design overall. My main goal was to make it look good on iOS and I think I accomplished that.",
        exerpt: "A video poker game in vanilla JavaScript.",
        siteURL: "http://musicpants.net/webapps/video-poker/",
        imageurl: "/assets/images/videopoker2015.png",
        __v: 0,
        techused: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }
];





var msPort = angular.module('mattstatesPortfolio', []);

msPort.controller('mainController', function($scope) {
    $scope.name = 'Matt States';
    $scope.projects = testArray;

});

msPort.directive('msprojectElement', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/assets/directives/projects.html'
    }
});


